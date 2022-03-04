import React from 'react'
import Dashboard from '../components/Dashboard'
const URL = process.env.URL

export default function Home({todo}) {

  return (
    <Dashboard todo = {todo}  pageName="Dashboard" />
  )
}

export const getStaticProps = async () => {
  //let id = params.id
  const res = await fetch(`${URL}/api/todo/`)
  const data = await res.json()
  const dt = data.data;
   console.log({dt})
  if (!data.success) {
    return {
      notFound: true,
      revalidate: 10
    }
  }
  return {
    props: { todo: data.data }// will be passed to the page component as props
    
  }
}

