import { GET_HELP, ABOUT_NIKE, JOIN_US, SUB_LINKS } from '../data/footer.data'
import { ReactComponent as LocationIcon } from 'shared/assets/icons/icon-location.svg'
import styles from './Footer.module.scss'
import { memo } from 'react'

export const Footer = memo(() => {
  return (
    <>
      <footer className='footer h-[400px] bg-midnight'>
        <div className='footer__container h-full mx-[4vw] '>
          <div className='footer__wrapper flex flex-col justify-between h-full '>
            <div className='footer-body mt-[40px]'>
              <div className='footer__menu flex gap-[200px] text-white50'>
                <ul className={`footer__menu-list ${styles.footer__menuList}`}>
                  <div
                    className={`footer__menu-title ${styles.footer__menuTitle}`}
                  >
                    Get Help
                  </div>
                  {GET_HELP.map((item, idx) => (
                    <li
                      className={`footer__menu-item ${styles.footer__menuItem}`}
                      key={idx}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>

                <ul className={`footer__menu-list ${styles.footer__menuList}`}>
                  <div
                    className={`footer__menu-title ${styles.footer__menuTitle}`}
                  >
                    About Nike
                  </div>
                  {ABOUT_NIKE.map((item, idx) => (
                    <li
                      className={`footer__menu-item ${styles.footer__menuItem}`}
                      key={idx}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>

                <ul className={`footer__menu-list ${styles.footer__menuList}`}>
                  <div
                    className={`footer__menu-title ${styles.footer__menuTitle}`}
                  >
                    Join Us
                  </div>
                  {JOIN_US.map((item, idx) => (
                    <li
                      className={`footer__menu-item ${styles.footer__menuItem}`}
                      key={idx}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='sub-footer flex justify-between items-end pb-[40px]'>
              <div className='flex gap-8 items-end'>
                <div className='sub-footer__location flex items-center gap-1'>
                  <div className=''>
                    <LocationIcon className='fill-white' />
                  </div>
                  <div className='text-sm text-white'>United Kingdom</div>
                </div>
                <div className='sub-footer__copyrights text-xs text-white50'>
                  © 2023 Nike, Inc. All Rights Reserved
                </div>
              </div>
              <div className='sub-footer__menu'>
                <ul className='sub-footer__menu-list flex gap-4'>
                  {SUB_LINKS.map((item, idx) => (
                    <li
                      className={`sub-footer__menu-item ${styles.subFooter__menuItem}`}
                      key={idx}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
})
