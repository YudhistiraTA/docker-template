import { configureStore } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
interface windowTemp extends Window {
	APP_CONFIG?: {
		VITE_BASE_URL?: string
	}
}
export const baseUrl = (window as windowTemp).APP_CONFIG?.VITE_BASE_URL
const baseQuery = fetchBaseQuery({
	baseUrl: `${baseUrl}`,
	prepareHeaders: () => {},
})
export const api = createApi({
	baseQuery,
	endpoints: (builder) => ({
		getUser: builder.query<
			{ id: number; name: string | null; email: string },
			void
		>({
			query: () => ``,
		}),
	}),
})
export const { useGetUserQuery } = api
export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
