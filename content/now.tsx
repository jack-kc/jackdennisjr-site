export type NowItem = {
  label: string;
  value: string;
};

export type NowUpdate = {
  date: string;
  items: NowItem[];
};

export const nowUpdates: NowUpdate[] = [
  {
    date: "2026-02-15",
    items: [
      {
        label: "Learning",
        value: "Frontend engineering, Next.js, and modern deployment workflows.",
      },
      {
        label: "Building",
        value: "jackdennisjr.com as a long-lived identity and learning space.",
      },
      {
        label: "Writing",
        value: "Short notes as I learn in public.",
      },
    ],
  },
];
