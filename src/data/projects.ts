
export type Project = {
  id: string,
  image: string,
  link: string,
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'project1',
    image: '/images/project1.png',
    link: 'https://meuprojeto.com',
    tags: ['React', 'API'],
  },
  {
    id: 'project2',
    image: '/images/project2.png',
    link: 'https://outroprojeto.com',
    tags: ['Node', 'Database'],
  },
  {
    id: 'project3',
    image: '/images/project3.png',
    link: 'https://outropro3jeto.com',
    tags: ['Node', 'Database'],
  },
  {
    id: 'project4',
    image: '/images/project4.png',
    link: 'https://outropro4jeto.com',
    tags: ['Node', 'Database'],
  },
]
