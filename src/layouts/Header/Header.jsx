import './Header.scss'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import BurgerButton from '@/components/BurgerButton'
import Icon from '@/components/Icon'

export default (props) => {
  const menuItems = [
    {
      label: 'Skills',
      href: '#skills-title',
    },
    {
      label: 'Experience',
      href: '#experience-title',
    },
    {
      label: 'About me',
      href: '#about-title',
    },

    {
      label: 'Projects',
      href: '#projects-title',
    },
  ]

  return (
    <header className="header" data-js-overlay-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({ label, href }, index) => (
                <li className="header__menu-item" key={index}>
                  <a className="header__menu-link h6" href={href} data-js-overlay-menu-link="">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__actions">
            <Button className="header__button" href="https://kwork.ru/user/bakkermilanowo">
              <span>Freelance </span>
              <img
                src="/src/assets/icons/person.svg"
                alt=""
                width="22"
                height="22"
                loading="lazy"
              />
            </Button>
          </div>
        </dialog>
        <BurgerButton
          className="header__burger-button visible-mobile"
          extraAttrs={{
            'data-js-overlay-menu-burger-button': '',
          }}
        />
      </div>
    </header>
  )
}
