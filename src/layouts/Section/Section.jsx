import './Section.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    title,
    background, //default || black
    titleId,
    children,
  } = props

  return (
    <section
      className={clsx('section', background && `section--${background}`)}
      aria-labelledby={titleId}
    >
      <div className="section__inner container">
        <header className="section__header">
          <h1 className="section__title" id={titleId}>
            My <b>{title}</b>
          </h1>
        </header>
        <div className={clsx('section__body', className)}>{children}</div>
      </div>
    </section>
  )
}
