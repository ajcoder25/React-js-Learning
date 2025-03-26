import { useState } from 'react'

import './App.css'

const LanguageForm = () =>{

  const[selectedLanguages, setSelectedLanguages] = useState([])

  const handleLanguageCheckbox = (event) =>{

    const {value,checked} = event.target
    if(checked) {
      setSelectedLanguages((prevValue) => [...prevValue, value])
    }
    else{
      //if it not checked or unchecked the checkbox
      setSelectedLanguages((prevValue) => prevValue.filter(lang => lang != value))

    }

  }


  return(
        <div>
            <input type = 'checkbox' value = "Javascript" onChange = {handleLanguageCheckbox}/>Javascript
            <input type = 'checkbox' value = "Python" onChange = {handleLanguageCheckbox}/>Python
            <input type = 'checkbox' value = "Java" onChange = {handleLanguageCheckbox}/>Java
            <p>Selected Languages: {selectedLanguages.join(",")}</p>

        </div>
  )
}


const MusicGenre = () =>{
   const [selectMusic, setselectedMusic] = useState("")

   const handleMusicCheckbox = (event) =>{
       
       const {value ,checked} = event.target

      if(checked){
        setselectedMusic((selected) =>[...selected, value])
      }
      else{
        setselectedMusic((selected) => selected.filter(music => music != value))
      }

   }
  return(
       <div>
          <input type = "checkbox" value = "Rock" onChange = {handleMusicCheckbox}/>Rock
          <input type = "checkbox" value = "Jaz" onChange = {handleMusicCheckbox}/>Jaz
          <input type = 'checkbox' value = "Pop" onChange = {handleMusicCheckbox}/>Pop
          <p>Selected Music: {selectMusic.join(", ")}</p>
         


      </div>
  )

}

export default function App(){

     return(
         <div>
           <LanguageForm/>
           < MusicGenre/>
          


        </div>
     )

}
