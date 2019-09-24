import React from "react"
import HomePage from "./pages/HomePage/HomePage"
import { Route, Switch, Redirect } from "react-router-dom"
import ShopPage from "./pages/Shop/Shop"
import Header from "./components/Header/Header"
import Sign from "./pages/Sign/Sign"
import "./App.css"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import { connect } from "react-redux"
import { setCurrentUser } from "./redux/user/UserAction"
import { selectCurrentUser } from "./redux/user/userSelector"
import { createStructuredSelector } from "reselect"
import Checkout from "./pages/Checkout/Checkout"

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
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
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Sign />
            }
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
