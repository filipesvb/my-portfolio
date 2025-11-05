
export type Project = {
  id: string,
  image: string,
  links: {
    github: string,
    live: string
  },
  tags: Technology[]
}

export type Technology = {
  image: string,
  title: string,
  style: {
    bg: string,
    text: string
  }
}

export const projects: Project[] = [
  {
    id: 'project1',
    image: '/images/project1.png',
    links: {
      github: "",
      live: ""
    },
    tags: [
      {
        image: '',
        title: 'React',
        style: {
          bg: '#61DBFB',
          text: '#000080',
        },
      },
      {
        image: '',
        title: 'Firebase',
        style: {
          bg: '#FFA000',
          text: '#000000',
        },
      },
    ],
  },
  {
    id: 'project2',
    image: '/images/project2.png',
    links: {
      github: "",
      live: ""
    },
    tags: [
      {
        image: '',
        title: 'React',
        style: {
          bg: '#61DBFB',
          text: '#000080',
        },
      },
      {
        image: '',
        title: 'Phaser.js',
        style: {
          bg: '#8BC34A',
          text: '#ffffff',
        },
      },
    ],
  },
  {
    id: 'project3',
    image: '/images/project3.png',
    links: {
      github: "",
      live: ""
    },
    tags: [
      {
        image: '',
        title: 'React',
        style: {
          bg: '#61DBFB',
          text: '#000080',
        },
      },
      {
        image: '',
        title: 'Zustand',
        style: {
          bg: '#FF7043',
          text: '#ffffff',
        },
      },
      {
        image: '',
        title: 'TailwindCSS',
        style: {
          bg: '#38BDF8',
          text: '#1E293B',
        },
      },
    ],
  },
  {
    id: 'project4',
    image: '/images/project4.png',
    links: {
      github: "",
      live: ""
    },
    tags: [
      {
        image: '',
        title: 'Vite',
        style: {
          bg: '#646CFF',
          text: '#ffffff',
        },
      },
      {
        image: '',
        title: 'i18next',
        style: {
          bg: '#E10098',
          text: '#ffffff',
        },
      },
      {
        image: '',
        title: 'Framer Motion',
        style: {
          bg: '#0055FF',
          text: '#ffffff',
        },
      },
    ],
  },
];