import './TestimonialCard.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import { Image } from 'minista'

export default (props) => {
  const { className, testimonial = [] } = props

  return (
    <ul className={clsx('testimonial-card', className)}>
      {testimonial.map(({ imgSrc, description, href, forename, job }) => (
        <li className="testimonial-card__item">
          <Image className="testimonial-card__image" src={imgSrc}  />
          <div className="testimonial-card__description">
            <p>{description}</p>
          </div>
          <h5 className="testimonial-card__name">
            {forename}
          </h5>
          <a className="testimonial-card__job" href={href}>{job}</a>
        </li>
      ))}
    </ul>
  )
}
