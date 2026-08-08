export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  cover: string;
  src: string;
  duration: string;
}

export const playlist: Track[] = [
  {
    id: "1",
    title: "ALL THE SMALL THINGS",
    artist: "Blink-182 — Pop Punk",
    album: "Enema of the State",
    cover: "🎸",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    duration: "06:12",
  },
  {
    id: "2",
    title: "IN TOO DEEP",
    artist: "Sum 41 — Skate Punk",
    album: "All Killer No Filler",
    cover: "⚡",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    duration: "07:05",
  },
  {
    id: "3",
    title: "SUGAR, WE'RE GOIN DOWN",
    artist: "Fall Out Boy — Pop Punk",
    album: "From Under the Cork Tree",
    cover: "🔥",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    duration: "05:44",
  },
  {
    id: "4",
    title: "MY FRIENDS OVER YOU",
    artist: "New Found Glory — Pop Punk",
    album: "Sticks and Stones",
    cover: "🤘",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    duration: "05:02",
  },
];
