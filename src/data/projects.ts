export type Project = {
  id: string;
  image: string;

  links: {
    github: string;
    live: string;
  };
  tags: Technology[];
};

export type Technology = {
  image: string;
  title: string;
  value: string;
  style: {
    bg: string;
    text: string;
  };
};

enum tagValues {
  REACT = "react",
  FIREBASE = "firebase",
  PHASERJS = "phaserjs",
  VITE = "vite",
  ZUSTAND = "zustand",
  TAILWINDCSS = "tailwindcss",
  I18NEXT = "i18next",
  FRAMER_MOTION = "framer_motion",
}

export const projects: Project[] = [
  {
    id: "project1",
    image: "/images/project1.png",
    links: {
      github: "",
      live: "",
    },
    tags: [
      {
        image: "",
        title: "React",
        value: tagValues.REACT,
        style: {
          bg: "#61DBFB",
          text: "#000080",
        },
      },
      {
        image: "",
        title: "Firebase",
        value: tagValues.FIREBASE,
        style: {
          bg: "#FFA000",
          text: "#000000",
        },
      },
    ],
  },
  {
    id: "project2",
    image: "/images/project2.png",
    links: {
      github: "",
      live: "",
    },
    tags: [
      {
        image: "",
        title: "React",
        value: tagValues.REACT,
        style: {
          bg: "#61DBFB",
          text: "#000080",
        },
      },
      {
        image: "",
        title: "Phaser.js",
        value: tagValues.PHASERJS,
        style: {
          bg: "#8BC34A",
          text: "#ffffff",
        },
      },
    ],
  },
  {
    id: "project3",
    image: "/images/project3.png",
    links: {
      github: "",
      live: "",
    },
    tags: [
      {
        image: "",
        title: "React",
        value: tagValues.REACT,
        style: {
          bg: "#61DBFB",
          text: "#000080",
        },
      },
      {
        image: "",
        title: "Zustand",
        value: tagValues.ZUSTAND,
        style: {
          bg: "#FF7043",
          text: "#ffffff",
        },
      },
      {
        image: "",
        title: "Tailwindcss",
        value: tagValues.TAILWINDCSS,
        style: {
          bg: "#38BDF8",
          text: "#1E293B",
        },
      },
    ],
  },
  {
    id: "project4",
    image: "/images/project4.png",
    links: {
      github: "",
      live: "",
    },
    tags: [
      {
        image: "",
        title: "Vite",
        value: tagValues.VITE,
        style: {
          bg: "#646CFF",
          text: "#ffffff",
        },
      },
      {
        image: "",
        title: "i18next",
        value: tagValues.I18NEXT,
        style: {
          bg: "#E10098",
          text: "#ffffff",
        },
      },
      {
        image: "",
        title: "Framer Motion",
        value: tagValues.FRAMER_MOTION,
        style: {
          bg: "#0055FF",
          text: "#ffffff",
        },
      },
    ],
  },
];
