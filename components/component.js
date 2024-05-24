import React from 'react'

const AppComponent = (props) => {
  return (
    <>
      <div className="app-component-container"></div>
      <style jsx>
        {`
          .app-component-container {
            flex: 1;
            width: var(--dl-size-size-xsmall);
            height: 100%;
            display: flex;
            position: relative;
            align-self: flex-end;
            margin-bottom: 0px;
            background-size: cover;
            background-image: url('/shutterstock_125540273-1500h.webp');
            background-position: center;
          }
        `}
      </style>
    </>
  )
}

export default AppComponent
