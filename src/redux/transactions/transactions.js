import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://kapusta-backend-proj.herokuapp.com/api/transactions',
    baseUrl: 'http://localhost:3030/api/transactions',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['transactions'],
  endpoints: builder => ({
    getTransactions: builder.query({
      query: () => '/',
      providesTags: ['transactions'],
    }),
    getSummaryByMonth: builder.query({
      query: type => `/summary/${type}`,
      providesTags: ['transactions'],
    }),
    postTransaction: builder.mutation({
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
  useGetSummaryByMonthQuery,
  usePostTransactionMutation,
  useDeleteTransactionMutation,
} = transactionsApi;
