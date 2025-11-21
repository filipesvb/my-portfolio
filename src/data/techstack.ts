import ReactIcon from "@/assets/icons/react.svg?react";
import NextIcon from "@/assets/icons/nextjs.svg?react";
import FirebaseIcon from "@/assets/icons/firebase.svg?react";
import TailwindIcon from "@/assets/icons/tailwindcss.svg?react";
import ViteIcon from "@/assets/icons/vite.svg?react";
import I18NextIcon from "@/assets/icons/i18next.svg?react";
import TypescriptIcon from "@/assets/icons/typescript.svg?react";
import NetlifyIcon from "@/assets/icons/netlify.svg?react";
import { ComponentType, SVGProps } from "react";

export type Technology = {
  image: ComponentType<SVGProps<SVGElement>>;
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
  NETLIFY = "netlify",
  TYPESCRIPT = "typescript",
  PHASERJS = "phaserjs",
  VITE = "vite",
  ZUSTAND = "zustand",
  TAILWINDCSS = "tailwindcss",
  I18NEXT = "i18next",
  FRAMER_MOTION = "framer_motion",
  NEXTJS = "nextjs",
}

export const techstack: Partial<Record<tagValues, Technology>> = {
  [tagValues.REACT]: {
    image: ReactIcon,
    title: "React",
    value: tagValues.REACT,
    category: "frontend",
    style: {
      bg: "#61DAFB",
      text: "#000080",
    },
  } as Technology,
  [tagValues.NEXTJS]: {
    image: NextIcon,
    title: "NextJS",
    value: tagValues.NEXTJS,
    category: "fullstack",
    style: {
      bg: "#000000",
      text: "#ffffff",
    },
  } as Technology,
  [tagValues.FIREBASE]: {
    image: FirebaseIcon,
    title: "Firebase",
    value: tagValues.FIREBASE,
    category: "backend",
    style: {
      bg: "#DD2C00",
      text: "#000000",
    },
  } as Technology,
  [tagValues.NETLIFY]: {
    image: NetlifyIcon,
    title: "Netlify",
    value: tagValues.NETLIFY,
    category: "fullstack",
    style: {
      bg: "#00C7B7",
      text: "#000000",
    },
  } as Technology,
  // [tagValues.PHASERJS]: {
  //   image: '',
  //   title: 'Phaser.js',
  //   value: tagValues.PHASERJS,
  //   category: 'frontend',
  //   style: {
  //     bg: '#8BC34A',
  //     text: '#ffffff',
  //   },
  // } as Technology,
  // [tagValues.ZUSTAND]: {
  //   image: '',
  //   title: 'Zustand',
  //   value: tagValues.ZUSTAND,
  //   category: 'frontend',
  //   style: {
  //     bg: '#FF7043',
  //     text: '#ffffff',
  //   },
  // } as Technology,
  [tagValues.TAILWINDCSS]: {
    image: TailwindIcon,
    title: "Tailwindcss",
    value: tagValues.TAILWINDCSS,
    category: "frontend",
    style: {
      bg: "#38BDF8",
      text: "#1E293B",
    },
  } as Technology,
  [tagValues.VITE]: {
    image: ViteIcon,
    title: "Vite",
    value: tagValues.VITE,
    category: "frontend",
    style: {
      bg: "#646CFF",
      text: "#ffffff",
    },
  } as Technology,
  [tagValues.I18NEXT]: {
    image: I18NextIcon,
    title: "i18next",
    value: tagValues.I18NEXT,
    category: "fullstack",
    style: {
      bg: "#26A69A",
      text: "#ffffff",
    },
  } as Technology,
  [tagValues.TYPESCRIPT]: {
    image: TypescriptIcon,
    title: "Typescript",
    value: tagValues.TYPESCRIPT,
    category: "fullstack",
    style: {
      bg: "#3178C6",
      text: "#ffffff",
    },
  } as Technology,
  // [tagValues.FRAMER_MOTION]: {
  //   image: '',
  //   title: 'Framer Motion',
  //   value: tagValues.FRAMER_MOTION,
  //   category: 'frontend',
  //   style: {
  //     bg: '#0055FF',
  //     text: '#ffffff',
  //   },
  // } as Technology,
};
