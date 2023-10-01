// app/UsersList.tsx
import groq from 'groq'
import { User } from 'sanity'

import { ListView, ListPagination } from '~/ui'

export const usersQuery = groq`{
  "list": *[_type == "user" && _id > $lastId] | order(_id) [0...20],
  "total": count(*[_type == "user"]),
}`

export interface UsersResponse {
  list: User[]
  total: number
}

export interface UsersListProps {
  data: UsersResponse
  lastId: string
}

export function UsersList(props: UsersListProps) {
  const { data, lastId } = props

  return (
    <>
      {data.list} 
     {data.total} lastId={lastId} 
    </>
  )
}