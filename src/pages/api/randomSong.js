// pages/api/randomSong.js

export default async function handler(req, res) {
  const accessToken = process.env.GENIUS_ACCESS_TOKEN;

  if (!accessToken) {
    return res.status(500).json({ error: "Missing Genius API access token" });
  }

  const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  // Assuming song IDs range from 1 to 2000000 for example
  const randomSongId = getRandomInt(1, 2000000);

  try {
    const response = await fetch(
      `https://api.genius.com/songs/${randomSongId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch song");
    }

    const data = await response.json();
    const song = data.response.song;

    res.status(200).json({ song: song.title });
  } catch (error) {
    console.error("Error fetching random song:", error);
    res.status(500).json({ error: "Failed to fetch random song" });
  }
}
