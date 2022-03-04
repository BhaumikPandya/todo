import React from 'react'
import AddToDo from '../../components/AddEditToDo'
const URL = process.env.URL

function Edit({todo}) {
 console.log('In Edit..',todo)

  return (
  
    <AddToDo edit={true} data={todo} pageName="addTodo" />
    
     )
}

export default Edit;

export const getStaticProps = async ({params}) => {
    let id = params.id
    const res = await fetch(`${URL}/api/todo/${id}`)
    const data = await res.json()
     console.log({data})
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

export async function getStaticPaths() {
    // const posts = await getPosts();
    return {
      paths: [],
      fallback: true,
    };
  }