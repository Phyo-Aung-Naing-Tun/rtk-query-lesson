import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["blogApi"],
  endpoints: (builder) => ({
    blogs: builder.query({
      query: () => "/blogs",
      providesTags: ["blogApi"],
    }),
    oneblog: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: ["blogApi"],
    }),
    editProduct: builder.mutation({
      query: (updataData) => ({
        url: `/blogs/${updataData.id}`,
        method: "PATCH",
        body: updataData,
      }),
      invalidatesTags: ["blogApi"],
    }),
    addProduct: builder.mutation({
      query: (addData) => ({
        url: `/blogs`,
        method: "POST",
        body: addData,
      }),
      invalidatesTags: ["blogApi"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogApi"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useBlogsQuery,
  useOneblogQuery,
  useEditProductMutation,
  useDeleteProductMutation,
} = blogApi;
