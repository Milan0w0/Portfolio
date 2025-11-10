import './ProjectsCard.scss'
import clsx from 'clsx'
import { Image } from 'minista'
import Icon from '@/components/Icon'

export default (props) => {
  const { className, projects } = props

  return (
    <ul className={clsx('projects-card', className)} data-js-scroll-block="">
      {projects.map(({ imgSrc, title, description, href }, index) => (
        <li className="projects-card__item">
          <Image className="projects-card__image" src={imgSrc} />
          <div className="projects-card__content">
            <h1 className="projects-card__number">
              <b>{String(index + 1).padStart(2, '0')}</b>
            </h1>
            <h2 className="projects-card__title">{title}</h2>
            <div className="projects-card__description">
              <p>{description}</p>
            </div>
            <a className="projects-card__link" href={href} title="read-more">
              <Icon name={'read-more'} />
            </a>
          </div>
        </li>
      ))}
    </ul>
  )
}
