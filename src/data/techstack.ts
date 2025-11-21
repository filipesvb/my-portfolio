export type Technology = {
  image: string;
  title: string;
  value: string;
  category: string;
  style: {
    bg: string;
    text: string;
  };
};

export type TechKey = keyof typeof techstack;

export enum tagValues {
  REACT = "react",
  FIREBASE = "firebase",
  PHASERJS = "phaserjs",
  VITE = "vite",
  ZUSTAND = "zustand",
  TAILWINDCSS = "tailwindcss",
  I18NEXT = "i18next",
  FRAMER_MOTION = "framer_motion",
  NEXTJS = "nextjs",
}

export const techstack = {
  [tagValues.REACT]: {
    image: "",
    title: "React",
    value: tagValues.REACT,
    category: "frontend",
    style: {
      bg: "#61DBFB",
      text: "#000080",
    },
  },
  [tagValues.NEXTJS]: {
    image: "",
    title: "NextJS",
    value: tagValues.NEXTJS,
    category: "fullstack",
    style: {
      bg: "#61DBFB",
      text: "#000080",
    },
  },
  [tagValues.FIREBASE]: {
    image: "",
    title: "Firebase",
    value: tagValues.FIREBASE,
    category: "backend",
    style: {
      bg: "#FFA000",
      text: "#000000",
    },
  },
  [tagValues.PHASERJS]: {
    image: "",
    title: "Phaser.js",
    value: tagValues.PHASERJS,
    category: "frontend",
    style: {
      bg: "#8BC34A",
      text: "#ffffff",
    },
  },
  [tagValues.ZUSTAND]: {
    image: "",
    title: "Zustand",
    value: tagValues.ZUSTAND,
    category: "frontend",
    style: {
      bg: "#FF7043",
      text: "#ffffff",
    },
  },
  [tagValues.TAILWINDCSS]: {
    image: "",
    title: "Tailwindcss",
    value: tagValues.TAILWINDCSS,
    category: "frontend",
    style: {
      bg: "#38BDF8",
      text: "#1E293B",
    },
  },
  [tagValues.VITE]: {
    image: "",
    title: "Vite",
    value: tagValues.VITE,
    category: "frontend",
    style: {
      bg: "#646CFF",
      text: "#ffffff",
    },
  },
  [tagValues.I18NEXT]: {
    image: "",
    title: "i18next",
    value: tagValues.I18NEXT,
    category: "fullstack",
    style: {
      bg: "#E10098",
      text: "#ffffff",
    },
  },
  [tagValues.FRAMER_MOTION]: {
    image: "",
    title: "Framer Motion",
    value: tagValues.FRAMER_MOTION,
    category: "frontend",
    style: {
      bg: "#0055FF",
      text: "#ffffff",
    },
  },
};
