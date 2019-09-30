import React from "react"
import "./CollectionsOverview.scss"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import PreviewCollection from "../PreviewCollection/PreviewCollection"
import { selectCollectionsForPreview } from "../../redux/Shop/shopSelector"

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, title, items }) => {
        return <PreviewCollection key={id} title={title} items={items} />
      })}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview)
