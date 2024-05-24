import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <span className="navigation-links-text">{props.text}</span>
        <span className="navigation-links-text1">{props.text1}</span>
        <span className="navigation-links-text2">{props.text2}</span>
        <span className="navigation-links-text3">{props.text3}</span>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-text {
            color: var(--dl-color-ruminant-navbar_buttons);
            font-size: 20px;
            align-self: center;
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
            text-transform: uppercase;
            text-decoration: none;
          }
          .navigation-links-text1 {
            color: var(--dl-color-ruminant-navbar_buttons);
            font-size: 20px;
            align-self: center;
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
            margin-left: var(--dl-space-space-twounits);
            text-transform: uppercase;
            text-decoration: none;
          }
          .navigation-links-text2 {
            color: var(--dl-color-ruminant-navbar_buttons);
            font-size: 20px;
            align-self: center;
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
            margin-left: var(--dl-space-space-twounits);
            text-transform: uppercase;
            text-decoration: none;
          }
          .navigation-links-text3 {
            color: var(--dl-color-ruminant-navbar_buttons);
            font-size: 20px;
            align-self: center;
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
            margin-left: var(--dl-space-space-twounits);
            text-transform: uppercase;
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  text3: 'about us',
  text1: 'beta program',
  rootClassName: '',
  text: 'company',
  text2: 'the goat',
}

NavigationLinks.propTypes = {
  text3: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks
