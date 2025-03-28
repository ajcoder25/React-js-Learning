import { useState } from 'react'

import './App.css'


const EducationLevel = () =>{

  const [selectEducation, setEducation] = useState("")

   const radioHandler = (event) =>{

        setEducation(event.target.value)

   }

  return(
        <div>
          <form onChange = {radioHandler}>
           <label>Choose Your highest education level:</label>
           <br/>
           <input type = 'radio' value = 'High School' name = 'education'/>High School
           <br/>
           <input type = 'radio' value = "Bachelor's Degree" name = 'education'/>Bachelor's Degree
           <br/>
           <input type = 'radio' value = "Master's Degree" name = 'education'/>Master's Degree
           <br/>
           <input type = 'radio' value = "Ph.D." name = 'education'/>Ph.D
          </form>
          <p>Select Education level: {selectEducation}</p>
      </div>
  )

}

const MusicGenre = () =>{

    const[selectedMusic, setMusic] = useState("")

    const radioHandler = (event) =>{
       setMusic(event.target.value)

    }
       return(
         <form onChange = {radioHandler}>
            <div>
              <label>Choose your favorite music genre:</label>
              <br/>
              <input type = 'radio' name = 'music' value = 'Pop'/>Pop
              <br/>
              <input type = 'radio' name = 'music' value = 'Rock'/>Rock
              <br/>
              <input type = 'radio' name = 'music' value = 'Hip Hop'/>Hip Hop
              <br/>
              <input type = 'radio' name = 'music' value = 'Classical'/>Classical

            </div>
            <p>selected Music: {selectedMusic}</p>
        </form>
      
       )
     
}

const PaymentMethod = () =>{

  const[selectPayment, setPayment] = useState("")

  const paymentHandler = (event) =>{
          setPayment(event.target.value)
  }
    

    return(
         <div>
        <form onChange = {paymentHandler}>
           <label>Select your preferred payment method:</label>
           <br/>
             <input type = 'radio' name = 'payment' value = 'Credit Card'/>Credit Card
             <br/>
             <input type = 'radio' name = 'payment' value = 'PayPal'/>PayPal
             <br/>
             <input type = 'radio' name = 'payment' value = 'Bitcoin'/>Bitcoin
         </form>
         <p>Selected Payment: {selectPayment}</p>
          </div>
    )

}

const PreferredWeather = () =>{

  const[selectWeather, setWeather] = useState("")
     
     const weatherHandler = (event) =>{

          setWeather(event.target.value)

     }
     return(
          <div>
            <form onChange = {weatherHandler}>
              <label>Choose your preferred weather:</label>
               <br/>
               <input type = 'radio' value = 'Sunny' name ='weather'/>Sunny
               <br/>
               <input type = 'radio' value = 'Rainy' name ='weather'/>Rainy
               <br/>
               <input type = 'radio' value = 'Cloudy' name ='weather'/>Cloudy
               <br/>
               <input type = 'radio' value = 'Snowy' name ='weather'/>Snowy
           </form>
           <p>select weather: {selectWeather}</p>
          </div>
     )
}

const Occupation = () =>{

      const[occupation, setOccupation] = useState(" ")

        const selectHandler = (event) =>{
            setOccupation(event.target.value)

        }
     return(
          <div>
             <form onChange = {selectHandler}>
              <input type = 'radio' name = 'selectOcc' value = 'Student'/>Student
              <br/>
              <input type = 'radio' name = 'selectOcc' value = 'Teacher'/>Teacher
              <br/>
              <input type = 'radio' name = 'selectOcc' value = 'Engineer'/>Engineer
              <br/>
              <input type = 'radio' name = 'selectOcc' value = 'Doctor'/>Doctor
           </form>
           <p>Selected Occupation: {occupation}</p>

          </div>
     )
}
export default function App(){

  return(
       <div>
         < EducationLevel/>
         < MusicGenre/>
         <PaymentMethod/>
         <PreferredWeather/>
         <Occupation/>

        </div>
  )

}