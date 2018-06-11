import React from 'react'
import { css } from 'react-emotion';
import { Motion, spring } from 'react-motion';

export default (props) => {
  return (
      <Motion
        style={{ opacity: spring(1, {damping: 40}) }}
        defaultStyle={{ opacity: 0 }}
      >
        {({ opacity }) => (
          <div className={css`opacity:${opacity}`}>
            {props.children}
          </div>
        )}
      </Motion>
  )
}
