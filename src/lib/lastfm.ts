export interface AlbumImage {
    size: string;
    "#text": string;
}

export interface Track {
    artist: {
        "#text": string;
    };
    image: {
        "0": AlbumImage;
        "1": AlbumImage;
        "2": AlbumImage;
        "3": AlbumImage;
    };
    album: {
        "#text": string;
    };
    name: string;
    url: string;
    date?: {
        uts: string;
        "#text": string;
    };

    // The @attr field only exists when the track is playing
    "@attr"?: {
        nowplaying: string;
    };
}

export interface UserInfo {
    user: string;
    total: string;
}

export function isNowPlaying(track: Track): boolean {
    return track["@attr"]?.nowplaying === "true";
}

export function getDisplayTime(track: Track): string {
    const playedTimeStr = track.date?.uts;
    if (!playedTimeStr) return "Now playing";

    const playedTime = parseInt(playedTimeStr);
    const secondsAgo = Date.now() / 1000 - playedTime;

    const timeUnits: [number, string][] = [
        [60 * 60, "hour"],
        [60, "minute"],
        [1, "second"],
    ];

    // Display date and time over 1 day ago
    const MAX_TIME_AGO = 60 * 60 * 24;

    // Within last day, display largest time unit
    if (secondsAgo < MAX_TIME_AGO) {
        for (const [seconds, label] of timeUnits) {
            const value = Math.floor(secondsAgo / seconds);

            if (value >= 1) {
                return `${value} ${label}${value > 1 ? "s" : ""} ago`;
            }
        }
    }

    const date = new Date(playedTime * 1000);

    return date.toLocaleString(undefined, {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
}