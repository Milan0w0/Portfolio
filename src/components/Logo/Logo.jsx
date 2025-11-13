import './Logo.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, loading = 'lazy', color } = props

  const title = 'Logo'

  return (
    <a
      className={clsx('logo', color && `logo--${color}`, className)}
      id="home"
      href="#home"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src="./images/logo.svg"
        alt=""
        width={140}
        height={40}
        loading={loading}
      />
    </a>
  )
}
