import React from "react"
import { CustomButtonContainer } from "./CustomButtomStyles"

const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
}
export default CustomButton
