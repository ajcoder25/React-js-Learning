import { useState } from 'react'

import './App.css'

const FoodSurveyApp = ()=>{
  const [selectCuisine,  setCuisine] = useState("")
  const [selectOption, setOption] = useState([])

  const selecctPreferredCusine = () =>{
            
  }
  const questions = [
    {
       question:"which type of cuisine do you prefer?",
       options:{
         Asian:["Chinese","Japanese", "Indian"],
         European:["Italian", "French", "Spanish"],
         American:["Burgers", "Pizza", "BBQ"]
       }
    }
  ]

  // Try to put the selected option inside the array 

  
  return(
    <div>
       <h2>Food Survey App</h2>
       <label>Select Your Preferred Cuising:</label>
        <select onChange = {(event) => setCuisine(event.target.value)}>
          {Object.keys(questions[0].options).map((continent,index) =>(
            <option key = {index} value = {continent}>{continent}</option>
          ))} 
        </select>
        {selectCuisine &&(
            <div>
              <p>Select Your Preferred Options:</p>
               {questions[0].options[selectCuisine].map((cuisine, index) =>(
              <label key = {index}>
               

                <input type = 'radio' id = {`cusine-${index}`} onChange = {selecctPreferredCusine}/>{cuisine}
                <br/>

                </label>
               ))
               }




            </div>
        )}
  </div>
  )

}



export default function App(){
  return(
       <div>
         <FoodSurveyApp />


        </div>
  )
}
