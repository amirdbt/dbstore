import React, { useEffect } from "react"
import HomePage from "./pages/HomePage/HomePage"
import { Route, Switch, Redirect } from "react-router-dom"
import ShopPage from "./pages/Shop/Shop"
import Header from "./components/Header/Header"
import Sign from "./pages/Sign/Sign"
import "./App.css"

import { connect } from "react-redux"

import { selectCurrentUser } from "./redux/user/userSelector"
import { createStructuredSelector } from "reselect"
import Checkout from "./pages/Checkout/Checkout"

import { checkUserSession } from "./redux/user/UserAction"

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <Sign />)}
        />
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
