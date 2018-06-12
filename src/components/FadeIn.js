import React from 'react'
import { css } from 'react-emotion';
import { Spring } from 'react-spring';

export default (props) => {
  return (
      <Spring
        to={{ opacity: 1 }}
        from={{ opacity: 0 }}
      >
        {({ opacity }) => (
          <div className={css`opacity:${opacity}`}>
            {props.children}
          </div>
        )}
      </Spring>
  )
}
