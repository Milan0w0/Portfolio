import './Projects.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section'
import ProjectsCard from '@/components/ProjectsCard'

export default () => {
  const projects = [
    {
      imgSrc: '/src/assets/images/projects/future-tech.jpg',
      title: 'Future-Tech',
      description:
        "A modern multi-page website created for company working in the field of artificial intelligence.\n" +
        "The project was developed using HTML, SCSS, and JavaScript, with a focus on clean structure, maintainable code, and responsive design across all devices",
      href: 'https://milan0w0.github.io/future-tech/',
    },
    {
      imgSrc: '/src/assets/images/projects/vrnas.jpg',
      title: 'VrNas',
      description:
        "A one-page website created for company specializing in virtual reality technologies.\n" +
        "Built with HTML, SCSS, JavaScript, and Vite, the site features a clean and modern design focused on visual appeal and user interaction.",
      href: 'https://milan0w0.github.io/VRNas/',
    },
    {
      imgSrc: '/src/assets/images/projects/positivus.jpg',
      title: 'Positivus',
      description:
        "A one-page website created for company operating in the marketing and creative solutions field.\n" +
        "Developed using HTML and SCSS, with a strong focus on clean structure, modern layout, and responsive design for all screen sizes.",
      href: 'https://milan0w0.github.io/positivus/',
    },
    {
      imgSrc: '/src/assets/images/projects/casino.jpg',
      title: 'CasinoWorld',
      description:
        "A front-end pet project simulating a simple online casino experience with interactive features and animations.\n" +
        "The app includes a roulette animation, a randomized win/lose system, and a betting slider that allows users to adjust their wager dynamically.\n" +
        "\n" +
        "It also features a fake balance system that is saved locally and persists after page reload, along with a form for receiving additional virtual money.\n" +
        "The project was built using HTML, SCSS, and JavaScript, focusing on interactivity and user engagement.",
      href: 'https://milan0w0.github.io/casino/',
    },
  ]

  return (
    <Section
      className="projects"
      title="Projects"
      background="black"
      titleId="projects-title"
    >
      <ProjectsCard className="projects__cards" projects={projects} />
    </Section>
  )
}
