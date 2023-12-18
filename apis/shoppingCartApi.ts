import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LINK_API } from "./config";

const shoppingCartApi = createApi({
  reducerPath: "shoppingCartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: LINK_API,
  }),
  tagTypes: ["ShoppingCart"],
  endpoints: (builder) => ({
    getShoppingCartByUserId: builder.query({
      query: (userId) => ({
        url: `shoppingcart`,
        method: "GET",
        params: {
          userId: userId,
        },
      }),
      providesTags: ["ShoppingCart"],
    }),
    updateShoppingCart: builder.mutation({
      query: ({ menuItemId, updateQuantityBy, userId }) => ({
        url: `shoppingcart`,
        method: "POST",
        params: {
          menuItemId,
          updateQuantityBy,
          userId
        },
      }),
      invalidatesTags: ["ShoppingCart"],
    }),
  }),
});

export const { useGetShoppingCartByUserIdQuery, useUpdateShoppingCartMutation } = shoppingCartApi;
export default shoppingCartApi;
