import React from "react"
import "./CartDropdown.scss"
import CustomButton from "../CustomButton/CustomButton"
import CartItem from "../CartItem/CartItem"
import { connect } from "react-redux"
import { selectCartItems } from "../../redux/cart/CartSelectors"
const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => {
          return <CartItem key={cartItem.id} item={cartItem} />
        })}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropdown)
