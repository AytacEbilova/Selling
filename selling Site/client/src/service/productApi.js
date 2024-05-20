import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => `products`,
    }),
    getOneProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
    postProduct: builder.mutation({
      query: (newProducts) => ({
        url: "products",
        method: "POST",
        body: newProducts,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    deleteProducts: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductQuery,
  usePostProductMutation,
  useDeleteProductsMutation,
  useGetOneProductQuery
} = productApi;
