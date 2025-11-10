import './Experience.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section'
import ExperienCard from '@/components/ExperienceСard'

export default (props) => {
  const experience = [
    {
      imgSrc: './src/assets/icons/company/kwork.png',
      title: 'Front-End Developer - Freelance',
      date: {
        dataTime: '2025-10',
        label: 'Oct 2025 - Present',
      },
      description:
        "I currently work actively on various freelance platforms, offering front-end development services to clients. I apply all the skills I gained in my previous work to create user-friendly websites.",
    },
    {
      imgSrc: './src/assets/icons/company/divotion.jpg',
      title: 'Front-End Developer - Divotion',
      date: {
        dataTime: '2024-05/2025-08',
        label: 'May 2024 - Aug 2015',
      },
      description: "Worked on creating responsive and modern web interfaces for small business clients." +
        "Developed layouts using HTML, SCSS, and JavaScript, optimized code for performance, and implemented interactive features." +
        "Used Vite, Git, and ESLint to maintain clean and efficient project workflows." +
        "Collaborated with designers to ensure pixel-perfect implementation and improved user experience.",
    },
    {
      imgSrc: './src/assets/icons/company/geekbrains.png',
      title: 'Front-End Development Course - GeekBrains',
      date: {
        dataTime: '2023-05/2024-02',
        label: 'June 2023 - Feb 2024',
      },
      description:
        "Studied for 8 months, gaining practical experience with modern web technologies such as HTML, CSS, SCSS, JavaScript, and Bootstrap." +
        "During the course, I built several small projects and learned how to structure clean, maintainable code. This program gave me a solid foundation in web development and helped me understand how to create responsive and user-friendly interfaces.",
    },
  ]

  return (
    <Section
      className="experience"
      title="Experience"
      background="black"
      titleId="experience-title"
    >
      <ExperienCard className="experience__cards" experience={experience} />
    </Section>
  )
}
