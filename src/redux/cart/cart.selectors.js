import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart], //input
  (cart) => cart.cartItems //output function
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalator, cartItem) => accumalator + cartItem.quantity,
      0
    )
);
