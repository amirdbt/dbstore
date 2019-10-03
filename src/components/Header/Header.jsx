import React from "react"
import "./Header.scss"
import { ReactComponent as Logo } from "../assets/crown.svg"
import { auth } from "../../firebase/firebase.utils"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import CartIcon from "../CartIcon/CartIcon"
import CartDropdown from "../Cart/CartDropdown"
import { selectCurrentUser } from "../../redux/user/userSelector"
import { selectCartHidden } from "../../redux/cart/CartSelectors"
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink
} from "./HeaderStyles"

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/contact">Contact</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  )
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header)
