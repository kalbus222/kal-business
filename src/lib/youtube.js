import axios from 'axios';

const API_KEY = process.env.YOUTUBE_API_KEY
const BASE_URL = 'https://www.googleapis.com/youtube/v3';
let cachedData = {};
let lastFetched = 0;
const CACHE_DURATION = 3600 * 1000;

export async function getRecentUploads(channelID) {
    const now = Date.now();

    if (now - lastFetched < CACHE_DURATION && channelID in cachedData) {
        return cachedData[channelID];
    }

    try {
        console.log("fetching API");
        const channelRes = await axios.get(`${BASE_URL}/channels`, {
            params: {
                part: 'contentDetails',
                id: channelID,
                key: API_KEY,
            },
        });
        const uploadPlaylistId = channelRes.data.items[0].contentDetails.relatedPlaylists.uploads;


        const uploadRes = await axios.get(
            `${BASE_URL}/playlistItems?part=snippet&playlistId=${uploadPlaylistId}&maxResults=3&key=${API_KEY}`
        )


        const videos = uploadRes.data.items.map((item) => ({
            title: item.snippet.title,
            videoId: item.snippet.resourceId.videoId,
            thumbnail: item.snippet.thumbnails.maxres?.url ||
                item.snippet.thumbnails.standard?.url ||
                item.snippet.thumbnails.high?.url ||
                item.snippet.thumbnails.medium?.url ||
                item.snippet.thumbnails.default?.url,
            publishedAt: item.snippet.publishedAt,
            videoUrl: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
        }));

        // Cache it
        cachedData[channelID] = videos;
        lastFetched = now;

        return videos;
    } catch (error) {
        console.error('Error fetching recent uploads:');
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
            console.error('Headers:', error.response.headers);
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Error message:', error.message);
        }

        return [];
    }
}