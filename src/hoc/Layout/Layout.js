import React, { useState } from 'react'
import { connect } from 'react-redux'

import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import WrapperComponent from '../WrapperComponent/WrapperComponent'

const layout = ({ isAuthenticated, children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false)
  }

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer)
  }

  return (
    <WrapperComponent>
      <Toolbar
        isAuth={isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler}
      />
      <SideDrawer
        isAuth={isAuthenticated}
        open={showSideDrawer}
        closed={sideDrawerClosedHandler}
      />
      <main className={classes.Content}>{children}</main>
    </WrapperComponent>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  }
}

export default connect(mapStateToProps)(layout)
