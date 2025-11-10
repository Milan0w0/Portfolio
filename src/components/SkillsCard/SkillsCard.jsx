import './SkillsCard.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default (props) => {
  const { className, skills = [] } = props

  return (
    <ul className={clsx('skills-card__list', className)}>
      {skills.map(({ imgSrc, label }) => (
        <li className="skills-card__item" title={label}>
          <Icon
            className="skills-card__icon icon--big"
            name={imgSrc}
            aria-label={label}
            hasFill
          />
          <h5 className="skills-card__title">{label}</h5>
        </li>
      ))}
    </ul>
  )
}
