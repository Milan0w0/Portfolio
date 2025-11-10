import './ExperienceСard.scss'
import clsx from 'clsx'
import { Icon, Image} from 'minista'

export default (props) => {
  const { className, experience = [] } = props

  return (
    <ul className={clsx('experience-сard', className)}>
      {experience.map(({ imgSrc, title, date, description }) => (
        <li className="experience-сard__item">
          <div className="experience-сard__top">
            <div className="experience-сard__name">
              <Image className="experience-сard__icon" src={imgSrc} />
              <h4 className="experience-сard__title">{title}</h4>
            </div>
            <time className="experience-сard__date" dateTime={date.dateTime}>
              {date.label}
            </time>
          </div>
          <div className="experience-сard__bottom">
            <div className="experience-сard__description">
              <p>{description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
