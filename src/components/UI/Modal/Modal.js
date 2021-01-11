import React from 'react'

import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     nextProps.show !== props.show ||
  //     nextProps.children !== props.children
  //   );
  // }

  return (
    <React.Component>
      <Backdrop show={props.show} clicked={props.modalCosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </React.Component>
  )
}

export default React.memo(
  modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
)
