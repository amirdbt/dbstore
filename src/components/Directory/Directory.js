import React from "react"
import MenuItem from "../Menu-item/Menu-item"
import "./directory.scss"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectDirectorySections } from "../../redux/Directory/directorySelectors"

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />
      })}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
