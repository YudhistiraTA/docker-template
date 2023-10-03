import { baseUrl, useGetUserQuery } from '@/api'

export function LandingPage() {
	const { data, error } = useGetUserQuery()
  console.log(data)
  console.log(error)
  console.log('base: ', baseUrl)
	return <div>halo {JSON.stringify(data)}</div>
}
