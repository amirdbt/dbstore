import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectIsCollectionFetching } from "../../redux/Shop/shopSelector"
import WithSpinner from "../WithSpinner/WithSpinner"
import CollectionsOverview from "./CollectionsOverview"
import { compose } from "redux"

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer
