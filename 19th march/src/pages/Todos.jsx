
import {Link} from 'react-router-dom'
const Todos = () =>{
  const todos = [
    {id:1,
      title:"Buy Bread",
      description:"Description of Todo 1",
      date: "24-02-24"
    },
    {
       id:2,
       title: "Go for a walk",
       description: "Description fo Todo 2",
       date: "24-02-24"
    },
    {
      id:3,
      title: "Attend Painting Class",
      description: "Description fo Todo 3",
      date: "24-02-24"

    },
    {
      id:4,
      title: "Buy flowers",
      description: "Description fo Todo 4",
      date: "24-02-24"

    },
    {
      id:5,
      title: "Buy flowers",
      description: "Description fo Todo 5",
      date: "24-02-24"

    },
    {
      id:6,
      title: "Write Journal",
      description: "Description fo Todo 6",
      date: "24-02-24"

    },

    {
      id:7,
      title: "Write Journal",
      description: "Description fo Todo 7",
      date: "24-02-24"

    },

    {
      id:8,
      title: "Write Journal",
      description: "Description fo Todo 8",
      date: "24-02-24"

    },
    {
      id:9,
      title: "Buy Gifts for Holi",
      description: "Description fo Todo 9",
      date: "24-02-24"

    },

]
   
  return(
<ul class="list-group">
  {todos.map((todo) =>{
   <li key = {todo.id} className = "list-group-item">

     <Link to = {`todo/${todo.id}`}>{todo.title} </Link>
   </li>
  })}
  
  
</ul>
  )
}

export default Todos;