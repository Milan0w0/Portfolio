import './Skills.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section'
import SkillsCard from '@/components/SkillsCard'

export default (props) => {
  const { className } = props

  const skills = [
    { imgSrc: 'html', label: 'Html' },
    { imgSrc: 'css', label: 'Css' },
    { imgSrc: 'scss', label: 'Scss' },
    { imgSrc: 'javascript', label: 'Javascript' },
    { imgSrc: 'npm', label: 'Npm' },
    { imgSrc: 'git', label: 'Git' },
    { imgSrc: 'vite', label: 'Vite' },
    { imgSrc: 'eslint', label: 'Eslint' },
    { imgSrc: 'stylelint', label: 'Stylelint' },
    { imgSrc: 'prettier', label: 'Prettier' },
    { imgSrc: 'jsx', label: 'JSX' },
  ]

  return (
    <Section className="skills" title="Skills" titleId="skills-title">
      <SkillsCard className="skills__cards" skills={skills} />
    </Section>
  )
}
