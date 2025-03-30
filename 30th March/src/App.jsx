import { useState } from 'react'

import './App.css'

const ClothingSize = () =>{

    const[selectSize, setSize ] = useState("")

    const selectSizeHandler = (event) =>{
            setSize(event.target.value)
    }


    return(
          <div>
            <label>Select a clothing size:</label>
            <select onChange = {selectSizeHandler}>
                <option value = 'Medium- Fits chest size 38- 40 inches'>Medium</option>
                <option value = 'Large- Fits chest size 42- 44 inches'>Large</option>
                <option value = 'Small -Fits chest size 34-36 inches'>Small</option>


            </select>
             {selectSize && <p>Description:{selectSize}</p>}

        </div>
    )
}

const JobType = () =>{

     const [selectJob, setJob] = useState('')

       const selectJobHandler = (event) =>{
               setJob(event.target.value)
       }
      return(
            <div>
              <label>Select a job type:</label>
                <select id = 'selectJob' onChange = {selectJobHandler}>
                    <option value = 'Part-Time - Employment for less than a standard work week'>Part-Time</option>
                    <option value = 'Contract - Temporary employment for specific for specific project or period'>Contract</option>
                    <option value = 'Full-time -Employment for a standard 40- hour workweek'>Full-time</option>

                </select>
                {selectJob && <p>Description: {selectJob}</p>}
            </div>
      )
}

const SelectMeal = () =>{

     const [selectMeal, setMeal] = useState("")
       const selectHandler = (event) =>{
            setMeal(event.target.value)
       }
        return(
             <div>
               <label htmlFor = "selectMeal">Select a meal time:</label>
                <select id = 'selectMeal' onChange = {selectHandler}>
                  <option value = 'Lunch- Midday meal typically eaten around noon'>Lunch</option>
                  <option value = 'Dinner- Everything meal typically eaten at the end of day '>Dinner</option>
                  <option value = 'Breakfast- Morning meal typically eaten before starting the day '>Breakfast</option>



              </select>
               {selectMeal && <p>Description:{selectMeal}</p>}

            </div>
        )
}

const SkillLevel = () =>{

     const [selectSkill, setSkills] = useState("")

        const selectSkillHandler = (event) =>{
             setSkills(event.target.value)

        }
        return(
              <div>
                <label htmlFor = 'selectSkill'>Select your skill level:</label>
                 <select id = 'selectSkill' onChange = {selectSkillHandler}>
                    <option value = 'Intermediate- Some experience or knowledge, moderate skill level'>Intermediate</option>
                    <option value ='Beginner- Just starting out, limited experience or knowledge'>Beginner</option>
                    <option value ='Advanced- Extensice experience or knowledge, high skill level '>Advanced</option>

                </select>
                  {selectSkill && <p>Select your skill level:{selectSkill}</p>}
              </div>
        )
}

const TemperatureUnit = () =>{
     const[selectTemp, setTemperature] = useState("")

        const selectTempHandler = (event) =>{

              setTemperature(event.target.value)

        }
      return(
           <div>
             <label htmlFor ="selectTemp">Select a Temperature Unit: </label>
              <select id = 'selectTemp' onChange = {selectTempHandler}>
                  <option value = 'Fahrenheit - Temperature scale widely used in the the United States'>Fahrenheit</option>
                  <option value = 'Celsius - Temperature scale in which water freezes at 0 degree and boils at 100 degrees'>Celsius</option>
                  <option value = 'Kelvin- Absolute temperature scale with 0 representing absolute zero'>Kelvin</option>

              </select>
              {selectTemp && <p>Description:{selectTemp} </p>}
          </div>
      )
}
export default function App (){

  return(
       <div>
           <ClothingSize/>
           <JobType/>
           <SelectMeal/>
           <SkillLevel/>
           <TemperatureUnit/>

      </div>
  )

}
