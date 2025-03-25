import { useState } from 'react'

import './App.css'

const Feedback = () =>{
       const[feedback, setfeedback] = useState()
       const [newfeedback, setnewfeedback] = useState()

       const checkValue = (event)=>{
            setfeedback(event.target.value)
           
       }

  
        const buttonValue = () =>{
             setnewfeedback(feedback)
        }


      

   return(
        <div>
          <label htmlFor ="feedbackInput">Give your feedback </label>
          <textarea onChange = {checkValue} id = 'feedbackInput'></textarea>
          <button onClick = {buttonValue}>Submit</button>
          {newfeedback && <p>Your feedback: {newfeedback} </p>}


       </div>
   )
}

const MovieReview = () =>{

  const [review, setReview] = useState("")

  const [newReview, setNewReview] = useState("")


  const enterReview = (event) =>{
              setReview(event.target.value)
  }

  
  const submitReview = () =>{
          setNewReview(review)
  }

     
  return(
       <div>
         <label htmlFor = 'reviewInput'>Write your movie review</label>
        <textarea onChange = {enterReview} id = 'reviewInput'></textarea>
        <button onClick = {submitReview}> Submit Review</button>
        {newReview && <p>Your feedback: {newReview}</p>}

      </div>
  )
}


const EnterMessage = () =>{
      const[message, setMessage] = useState()
      const [newMessage, newSetMessage] = useState()


      const messageInput = (event) =>{
            setMessage(event.target.value)
      }


      const messageSubmit = () =>{

          const capitalize = message.split(" ").toUpperCase().join(" ")

          newSetMessage(capitalize)

          alert(`Message: ${capitalize}`)
           
           
      }



      return(
           <div>
             <label htmlFor = "inputText">Enter your message:</label>
            <input onChange = {messageInput} id = "inputText"/>
            <button onClick = {messageSubmit}>Display Message</button>
          


          </div>
      )
}

export default function App(){

     return(
          <div>
            <Feedback/>
            <br/>
            <MovieReview/>
            <EnterMessage/>


          </div>
     )

}