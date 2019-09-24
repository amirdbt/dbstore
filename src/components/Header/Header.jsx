import React from "react"
import "./Header.scss"
import { ReactComponent as Logo } from "../assets/crown.svg"
import { Link } from "react-router-dom"
import { auth } from "../../firebase/firebase.utils"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import CartIcon from "../CartIcon/CartIcon"
import CartDropdown from "../Cart/CartDropdown"
import { selectCurrentUser } from "../../redux/user/userSelector"
import { selectCartHidden } from "../../redux/cart/CartSelectors"

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header)
