import React from "react"
import "./CartDropdown.scss"
import CustomButton from "../CustomButton/CustomButton"
import CartItem from "../CartItem/CartItem"
import { connect } from "react-redux"
import { selectCartItems } from "../../redux/cart/CartSelectors"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"
import { toggleCartHidden } from "../../redux/cart/CartAction"

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => {
            return <CartItem key={cartItem.id} item={cartItem} />
          })
        ) : (
          <span className="empty-message">Nothing in your cart</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout")
          dispatch(toggleCartHidden())
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown))
