import{useState} from 'react'
import './App.css'
const ToggleTheme = () =>{
  const [theme,setTheme] = useState("Light")
  return (
       <div>
         <p>Current Theme: {theme}</p>
        <button onClick = {() => setTheme(theme === 'Light' ? 'Dark': 'Light')}>Toggle Theme</button>
      </div>

   )

}

const PasswordVisibility = () =>{
  const [visibility,setVisibility] = useState(true)

  return(
        <div>
           <hr/>
          <p>{visibility ? "Password: myPassword123": "Password: ************"}</p>
            <button onClick ={() => setVisibility(!visibility) }>Show/Hide Password</button>
     


      </div>
  )
   
}

const HideText = () =>{
  const [expanded,setExpanded] = useState(false)
  const text = "This is a longer text that is typically hidden unless expanded."

  return(
      <div>
        <hr/>
        
         <p>{expanded ? text : `${text.substring(0,20)}...`}</p>
       <button onClick = {() => setExpanded(!expanded)}>{expanded ? "Collapse" : "Expand"}</button> 


    </div>
  )
}


const IncreaseText = () =>{

  const [fontSize, setFontSize] = useState(14)

  return(
    <div>
    <p style = {{fontSize: `${fontSize}px`}}>Adjust my font size </p>
  <button onClick = {() => setFontSize(fontSize + 20)}>Increase Size</button>
  <button onClick = {() => setFontSize(fontSize - 20)}>Decrease Size</button>
 </div>
  )
  

  



}

const ShowAll = ()=>{
  const [activeTab, setActiveTab] = useState("Home")
  return(
     <div>
        <hr/>
       <button onClick = {() => setActiveTab("Home")}>Home</button>
       <button onClick = {() => setActiveTab("Profile")}>Profile</button>
       <button onClick = {() => setActiveTab('Message')}>Message</button>
       <p>Content of {activeTab}</p>
     
      
       </div>
  )

}
const App = () =>{

 
 
  
  
 return(
       <main>
          <ToggleTheme/>
          < PasswordVisibility/>
          <HideText/>
          <IncreaseText/>
          <ShowAll/>
   
          <hr/>

        

      
      

      </main>
 )

}


 

export default App
