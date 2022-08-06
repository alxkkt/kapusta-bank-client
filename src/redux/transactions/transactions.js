import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kapusta-backend-proj.herokuapp.com/api/transactions',
  }),
  tagTypes: ['transactions'],
  endpoints: builder => ({
    getTransactions: builder.query({
      query: () => '/',
      providesTags: ['transactions'],
    }),
    addTransaction: builder.mutation({
      query: data => ({
        url: '/',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['transactions'],
    }),
    deleteTransaction: builder.mutation({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['transactions'],
    }),
  }),
});

export const {
  useGetTransactionsQuery,
  useAddTransactionMutation,
  useDeleteTransactionMutation,
} = transactionsApi;
