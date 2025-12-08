import ReactIcon from "@/assets/icons/react.svg?react";
import NextIcon from "@/assets/icons/nextjs.svg?react";
import FirebaseIcon from "@/assets/icons/firebase.svg?react";
import TailwindIcon from "@/assets/icons/tailwindcss.svg?react";
import ViteIcon from "@/assets/icons/vite.svg?react";
import I18NextIcon from "@/assets/icons/i18next.svg?react";
import TypescriptIcon from "@/assets/icons/typescript.svg?react";
import NetlifyIcon from "@/assets/icons/netlify.svg?react";
import PrismaIcon from "@/assets/icons/prisma.svg?react";
import ZodIcon from "@/assets/icons/zod.svg?react";
import ExpressIcon from "@/assets/icons/express.svg?react";
import ESLintIcon from "@/assets/icons/eslint.svg?react";
import PostgreSQLIcon from "@/assets/icons/postgresql.svg?react";
import JavascriptIcon from "@/assets/icons/javascript.svg?react";
import HTMLIcon from "@/assets/icons/html5.svg?react";
import CSSIcon from "@/assets/icons/css.svg?react";

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
  JAVASCRIPT = "javascript",
  HTML = "html",
  CSS = "css",
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
  PRISMA = "prisma",
  ZOD = "zod",
  EXPRESS = "express",
  ESLINT = "eslint",
  POSTGRESQL = "postgresql",
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
  [tagValues.PRISMA]: {
    image: PrismaIcon,
    title: "PrismaORM",
    value: tagValues.PRISMA,
    category: "backend",
    style: {
      bg: "#2D3748",
      text: "#f9f9f9",
    },
  } as Technology,
  [tagValues.ZOD]: {
    image: ZodIcon,
    title: "Zod",
    value: tagValues.ZOD,
    category: "frontend",
    style: {
      bg: "#408AFF",
      text: "#f9f9f9",
    },
  } as Technology,
  [tagValues.EXPRESS]: {
    image: ExpressIcon,
    title: "Express",
    value: tagValues.EXPRESS,
    category: "backend",
    style: {
      bg: "#000000",
      text: "#f9f9f9",
    },
  } as Technology,
  [tagValues.ESLINT]: {
    image: ESLintIcon,
    title: "ESLint",
    value: tagValues.ESLINT,
    category: "fullstack",
    style: {
      bg: "#4B32C3",
      text: "#f9f9f9",
    },
  } as Technology,
  [tagValues.POSTGRESQL]: {
    image: PostgreSQLIcon,
    title: "PostgreSQL",
    value: tagValues.POSTGRESQL,
    category: "backend",
    style: {
      bg: "#4169E1",
      text: "#f9f9f9",
    },
  } as Technology,
  [tagValues.JAVASCRIPT]: {
    image: JavascriptIcon,
    title: "Javascript",
    value: tagValues.JAVASCRIPT,
    category: "fullstack",
    style: {
      bg: "#F7DF1E",
      text: "#f9f9f9",
    },
  } as Technology,
  [tagValues.HTML]: {
    image: HTMLIcon,
    title: "HTML",
    value: tagValues.HTML,
    category: "frontend",
    style: {
      bg: "#E34F26",
      text: "#f9f9f9",
    },
  } as Technology,
  [tagValues.CSS]: {
    image: CSSIcon,
    title: "CSS",
    value: tagValues.CSS,
    category: "frontend",
    style: {
      bg: "#663399",
      text: "#f9f9f9",
    },
  } as Technology,
};
