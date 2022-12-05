import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartReducer from "../featuers/cart/cartSlice";
// import authReducer from "../featuers/auth/authSlice";
import productReducer from "../featuers/products/productSlice";
import sidebarReducer from "../featuers/sidebar/sidebarSlice";
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    products: productReducer,
    cart: cartReducer,
    // auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
