import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LINK_API } from "./config";

const menuItemApi = createApi({
  reducerPath: "menuItemApi",
  baseQuery: fetchBaseQuery({
    baseUrl: LINK_API,
  }),
  tagTypes: ["MenuItem"],
  endpoints: (builder) => ({
    getMenuItems: builder.query({
      query: () => ({
        url: 'menuitem',
        method: "GET"
      }),
      providesTags: ["MenuItem"],
    }),
    getMenuItemById: builder.query({
      query: (id) => ({
        url: `menuitem/${id}`,
        method: "GET"
      }),
      providesTags: ["MenuItem"],
    }),
  }),
});

export const { useGetMenuItemsQuery, useGetMenuItemByIdQuery } = menuItemApi;
export default menuItemApi;
