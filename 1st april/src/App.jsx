import { useState } from 'react'

import './App.css'



export default function App(){

  const[questionValue, setQuestion] = useState(0)
  //storing the user answer 

   const[userAnswer, setAnswer] = useState([])
  const[selectAnswer, setSelectedAnswer] = useState("")
  const [score, setScore] = useState(0)
  const[quizCompleted, setQuizScore] = useState(false)


  const questions = [
    {id:1,
     question:"What is  2 + 2?",
     options:["3", "4", "5"],
     correctAnswer: "4",
   
   },
   {
     id:2,
     question:"What is the capital of France?",
     options:["London","paris", "Berlin"],
     correctAnswer:"paris",
   },
   {
     id:3,
     question:' Who wrote "To Kill a Mockingbird"?',
     options:["Harper Lee","J.K. Rowling","Stephen King"],
     correctAnswer:"Harper Lee"
   }
 ]

 //I want as I click on button it should me the next question

  const nextQuestionHandler = () =>{

    //if the selectAnswer 
   if(selectAnswer === questions[questionValue].correctAnswer){
     setScore(prev => prev + 1)
   }
    setAnswer([...userAnswer, selectAnswer])
   
       if(questionValue < questions.length - 1){
               setQuestion(questionValue + 1)
               setSelectedAnswer("")// to reset the solution
       }
       else{
             setQuizScore(true)
       }
  }

 return(
       <div>
         <h2>Quiz App</h2>
       {!quizCompleted ? ( 
         <>
          <p>{`Question ${questionValue+1}`}</p>
        <p>{questions[questionValue].question}</p>
        
        <ul>
         {questions[questionValue].options.map((item,index)=>(
            
              <li key = {index}>
                <input type = 'radio' name = {`question-${questionValue}`} value = {item} checked = {selectAnswer === item} onChange = {() => setSelectedAnswer(item)}/>
                <label>{item}</label>
           
              </li>
                  
         ))}
        </ul>
        <button onClick = {nextQuestionHandler}> Next</button>
        </> 
        ):
         
         (
           <div>
           <h3>Your total score is :{score}/{questions.length}</h3>

            </div>

         ) }


    

    

     

      </div>
 )
}