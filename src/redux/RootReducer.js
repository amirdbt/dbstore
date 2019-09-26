import { combineReducers } from "redux"
import userReducer from "./user/UserReducer"
import cartReducer from "./cart/CartReducer"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import directoryReducer from "./Directory/directoryReducer"
import shopReducer from "./Shop/shopReducer"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
}
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
})
export default persistReducer(persistConfig, rootReducer)
