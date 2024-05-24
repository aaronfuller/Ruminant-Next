import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <>
      <header
        data-role="Header"
        className={`header-header Content ${props.rootClassName} `}
      >
        <header
          data-thq="thq-navbar"
          className="header-navbar-interactive navbar"
        >
          <img
            alt="logo"
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/logo_blue-1500h.webp"
            srcSet="/logo_blue-1500h.webp 1200w, /logo_blue-tablet.webp 800w, /logo_blue-mobile.webp 480w"
            className="header-image"
          />
          <div data-thq="thq-navbar-nav" className="header-desktop-menu">
            <nav className="header-links">
              <Link href="/">
                <a className="header-link navbar_buttons">{props.text4}</a>
              </Link>
              <Link href="/home">
                <a className="header-link1 navbar_buttons">{props.text5}</a>
              </Link>
              <Link href="/the-goat">
                <a className="header-link2 navbar_buttons">{props.text6}</a>
              </Link>
              <Link href="/about-us">
                <a className="header-link3 navbar_buttons">
                  <span className="header-text1">TEAM</span>
                  <br></br>
                </a>
              </Link>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="header-burger-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="header-mobile-menu">
            <div className="header-nav">
              <div className="header-top">
                <img
                  alt="image"
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/logo_website_header-1500h.webp"
                  srcSet="/logo_website_header-1500h.webp 1200w, /logo_website_header-tablet.webp 800w, /logo_website_header-mobile.webp 480w"
                  className="header-logo"
                />
                <div data-thq="thq-close-menu" className="header-close-menu">
                  <svg viewBox="0 0 1024 1024" className="header-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="header-links1">
                <span className="header-text3 navbar_buttons">
                  {props.text4}
                </span>
                <span className="header-text4 navbar_buttons">
                  {props.text5}
                </span>
                <span className="header-text5 navbar_buttons">
                  {props.text6}
                </span>
                <span className="header-text6 navbar_buttons">
                  <span className="header-text7">TEAM</span>
                  <br></br>
                </span>
              </nav>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .header-header {
            flex: initial;
            width: 100vw;
            height: 8vh;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: space-between;
          }
          .header-navbar-interactive {
            width: 100vw;
            display: flex;
            z-index: 110;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .header-image {
            height: 2rem;
          }
          .header-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .header-links {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .header-link {
            fill: var(--dl-color-ruminant-salmon);
            color: var(--dl-color-ruminant-salmon);
            align-self: center;
            font-style: normal;
            transition: 0.3s;
            text-decoration: none;
          }
          .header-link:hover {
            font-weight: 800;
          }
          .header-link1 {
            fill: var(--dl-color-ruminant-salmon);
            color: var(--dl-color-ruminant-salmon);
            align-self: center;
            font-style: normal;
            transition: 0.3s;
            text-decoration: none;
          }
          .header-link1:hover {
            font-weight: 800;
          }
          .header-link2 {
            fill: var(--dl-color-ruminant-salmon);
            color: var(--dl-color-ruminant-salmon);
            align-self: center;
            font-style: normal;
            transition: 0.3s;
            text-decoration: none;
          }
          .header-link2:hover {
            font-weight: 800;
          }
          .header-link3 {
            fill: var(--dl-color-ruminant-salmon);
            color: var(--dl-color-ruminant-salmon);
            align-self: center;
            font-style: normal;
            transition: 0.3s;
            text-decoration: none;
          }
          .header-link3:hover {
            font-weight: 800;
          }
          .header-burger-menu {
            display: none;
          }
          .header-icon {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .header-mobile-menu {
            top: 32px;
            right: 48px;
            width: 100vw;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            margin-top: -24px;
            margin-right: -48px;
            flex-direction: column;
            justify-content: space-between;
            background-color: #000000;
          }
          .header-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .header-logo {
            height: 2rem;
          }
          .header-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-icon2 {
            fill: #ffffff;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .header-links1 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .header-text3 {
            color: #ffffff;
            width: 100%;
            align-self: center;
            font-style: normal;
            text-align: left;
            transition: 0.3s;
          }
          .header-text3:hover {
            font-weight: 800;
          }
          .header-text4 {
            color: #ffffff;
            width: 100%;
            align-self: center;
            font-style: normal;
            text-align: left;
            transition: 0.3s;
            text-decoration: none;
          }
          .header-text4:hover {
            font-weight: 800;
          }
          .header-text5 {
            color: #ffffff;
            width: 100%;
            align-self: center;
            font-style: normal;
            text-align: left;
            transition: 0.3s;
          }
          .header-text5:hover {
            font-weight: 800;
          }
          .header-text6 {
            color: #ffffff;
            width: 100%;
            align-self: center;
            font-style: normal;
            text-align: left;
            transition: 0.3s;
          }
          .header-text6:hover {
            font-weight: 800;
          }
          .header-root-class-name {
            top: 0px;
            left: 0px;
            right: 0px;
            margin: auto;
            position: absolute;
          }
          .header-root-class-name1 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            margin: auto;
            position: absolute;
          }
          .header-root-class-name2 {
            top: 0px;
            left: 0px;
            right: 0px;
            position: static;
          }
          .header-root-class-name3 {
            top: 0px;
            left: 0px;
            right: 0px;
            position: static;
          }
          .header-root-class-name4 {
            top: 0px;
            left: 0px;
            right: 0px;
            position: static;
          }
          .header-root-class-name5 {
            top: 0px;
            left: 0px;
            right: 0px;
            position: static;
          }
          .header-root-class-name6 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            margin: auto;
            position: absolute;
          }
          @media (max-width: 1200px) {
            .header-root-class-name1 {
              position: static;
            }
            .header-root-class-name6 {
              position: static;
            }
          }
          @media (max-width: 991px) {
            .header-link3 {
              fill: var(--dl-color-ruminant-salmon);
              color: var(--dl-color-ruminant-salmon);
              font-size: 20px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 500;
              text-transform: uppercase;
              text-decoration: none;
            }
            .header-text6 {
              color: #ffffff;
              font-size: 20px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 500;
              text-transform: uppercase;
              text-decoration: none;
            }
          }
          @media (max-width: 767px) {
            .header-header {
              align-items: center;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
            }
            .header-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .header-desktop-menu {
              display: none;
            }
            .header-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .header-mobile-menu {
              margin-right: -80px;
            }
          }
          @media (max-width: 479px) {
            .header-header {
              padding: var(--dl-space-space-unit);
            }
            .header-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .header-link {
              color: var(--dl-color-ruminant-navbar_buttons);
              font-size: 20px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 500;
              margin-left: 0px;
              text-transform: uppercase;
              text-decoration: none;
            }
            .header-link2 {
              margin-left: 0px;
            }
            .header-link3 {
              color: var(--dl-color-ruminant-navbar_buttons);
              font-size: 20px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 500;
              margin-left: 0px;
              text-transform: uppercase;
              text-decoration: none;
            }
            .header-text1 {
              margin-left: 0px;
            }
            .header-mobile-menu {
              padding: 16px;
              margin-right: -64px;
            }
            .header-text3 {
              fill: var(--dl-color-gray-white);
              color: var(--dl-color-gray-white);
              font-size: 20px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 500;
              margin-left: 0px;
              text-transform: uppercase;
              text-decoration: none;
            }
            .header-text5 {
              margin-left: 0px;
            }
            .header-text6 {
              fill: var(--dl-color-gray-white);
              color: var(--dl-color-gray-white);
              font-size: 20px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 500;
              margin-left: 0px;
              text-transform: uppercase;
              text-decoration: none;
            }
            .header-text7 {
              margin-left: 0px;
            }
            .header-root-class-name {
              margin: 0px;
              margin-left: 0px;
            }
            .header-root-class-name1 {
              margin: 0px;
              margin-left: 0px;
            }
            .header-root-class-name6 {
              margin: 0px;
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  text5: 'company',
  text4: 'GET LAWNCARE',
  text6: 'the goat',
  text11: 'the goat',
  text2: 'about us',
  imageAlt: 'logo',
  text: 'beta program',
  rootClassName: '',
  text1: 'the goat',
  text3: 'company',
  text21: 'about us',
  imageSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  text12: 'company',
  imageAlt1: 'image',
  text31: 'beta program',
  imageSrc1: 'a84e35f4-440b-4169-8f79-32e0da43e2ed',
}

Header.propTypes = {
  text5: PropTypes.string,
  text4: PropTypes.string,
  text6: PropTypes.string,
  text11: PropTypes.string,
  text2: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text21: PropTypes.string,
  imageSrc: PropTypes.string,
  text12: PropTypes.string,
  imageAlt1: PropTypes.string,
  text31: PropTypes.string,
  imageSrc1: PropTypes.string,
}

export default Header
