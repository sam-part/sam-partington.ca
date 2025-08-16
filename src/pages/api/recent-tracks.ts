import type { APIRoute } from "astro";

const API_KEY = import.meta.env.LASTFM_API_KEY;
const NUM_TRACKS = 5;
const USER = "Augosis";

const CACHE_TTL = 15 * 1000;
let cached_data: any = null;
let cached_timestamp = 0;

export const GET: APIRoute = async () => {
    // Serve cached data if exists and within TTL
    if (cached_data && Date.now() - cached_timestamp < CACHE_TTL) {
        return new Response(JSON.stringify(cached_data));
    }

    try {
        const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks
                                    &user=${USER}
                                    &limit=${NUM_TRACKS}
                                    &api_key=${API_KEY}
                                    &format=json`);
            
        if (!response.ok) {
            return response;
        }

        const data = await response.json();

        cached_data = data;
        cached_timestamp = Date.now();

        return new Response(JSON.stringify(data));
    } catch (err: any) {
        const options = {
            status: 500,
        };

        return new Response(
            JSON.stringify({ error: err.message }),
            options
        );
    }
}