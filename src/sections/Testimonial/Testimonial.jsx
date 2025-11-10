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
      forename: 'Lina Carter',
      job: 'Designer',
    },
    {
      imgSrc: '/src/assets/images/testimonial/liam-carter.png',
      href: '/',
      description:
        'We wanted a clean and modern landing page for our campaign, and the result exceeded our expectations.',
      forename: 'Liam Carter',
      job: 'Marketing Manager',
    },
    {
      imgSrc: '/src/assets/images/testimonial/amelia-brooks.png',
      href: '/',
      description:
        'The site is intuitive, visually balanced, and adapts perfectly to any device.',
      forename: 'Amelia Brooks',
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
