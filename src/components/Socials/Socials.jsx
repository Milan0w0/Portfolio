import './Socials.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default (props) => {
  const { className } = props

  const links = [
    {
      label: 'Telegram',
      icon: 'telegram',
      href: 'https://t.me/Milan0w0',
    },
    {
      label: 'GitHub',
      icon: 'github',
      href: 'https://github.com/Milan0w0',
    },
    {
      label: 'Email',
      icon: 'email',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=bakkermilanowo@gmail.com',
    },
  ]

  return (
    <div className={clsx('socials', className)}>
      <ul className="socials__list">
        {links.map(({ label, icon, href }) => (
          <a className="socials__item" href={href} title={label}>
            <Icon name={icon} hasFill />
          </a>
        ))}
      </ul>
    </div>
  )
}
