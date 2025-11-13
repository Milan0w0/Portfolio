import './Testimonial.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section'
import SkillsCard from '@/components/SkillsCard/SkillsCard'
import TestimonialCard from '@/components/TestimonialCard'

export default () => {
  const testimonial = [
    {
      imgSrc: '/src/assets/images/testimonial/flora-sheen.png',
      href: '/',
      description:
        'It was an incredible pleasure working together on this project, thank you',
      forename: 'Nikolaeva Vera',
      job: 'Designer',
    },
    {
      imgSrc: '/src/assets/images/testimonial/elizaveta-alexandrova.png',
      href: '/',
      description:
        'We wanted a clean and modern landing page for our campaign, and the result exceeded our expectations.',
      forename: 'Elizaveta Alexandrova',
      job: 'Marketing Manager',
    },
    {
      imgSrc: '/src/assets/images/testimonial/morozov-nikolay.png',
      href: '/',
      description:
        'The site is intuitive, visually balanced, and adapts perfectly to any device.',
      forename: 'Morozov Nikolay',
      job: 'Client',
    },
  ]

  return (
    <Section
      className="testimonial"
      title="Testimonial"
      titleId="testimonial-title"
    >
      <TestimonialCard
        className="testimonial__cards"
        testimonial={testimonial}
      />
    </Section>
  )
}
