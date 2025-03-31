import { useState } from 'react'


const PostiveNegative = ()=>{
  const[number, setNumber] = useState(0)
 
       
   return(
        <div>
        <h2>Positive and Negative</h2>
        <p>Count: {number}</p>
      
       <p>{number>0 ? "The Number is Postive": number < 0 ?  "The Number is negative": ""}</p>
        <button onClick = {() =>setNumber(number + 1)}>Increment</button>
        <button onClick = {()=>setNumber(number - 1)}>Decrement</button>


        </div>
   )
}

//Program 2nd 

   const UserLogin = () =>{

    const[userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const[form, setForm] = useState(false)

   const formHandler = ()=>{
     event.preventDefault()
      if(userName && password){
           setForm(true)
          
      }
   }
        return(
              <div>
                <h2>User Login</h2>
            <form onSubmit = {formHandler}>
                <label>  Username</label><input onChange = {(event) => setUserName(event.target.value)} />
                <br/><br/>
                <label>Password: </label>
                <input type ='password' onChange = {(event) => setPassword(event.target.value)}/>
                <br/><br/>
                <button type ='submit'>Login</button>
            </form>
           {form &&  <h3>Welcome,{userName}!</h3>}
      
             </div>
        )
   }


   //Program 3rd 

   const TemperatureConverter =() =>{

    const[fahrenheit, setFahrenheit] = useState(32)
    const[celsius, setcelsius] = useState(0)

     const FahrenheitHandler = (event) =>{

         let f = parseFloat(event.target.value) 

           setFahrenheit(f)

           setcelsius((f - 32) * 5/9) 

        
     }

     const celsiusHandler = (event) =>{
        let c = parseFloat(event.target.value) 

        setcelsius(c)
        setFahrenheit(c * 9/5 + 32) 
         
        
          
     }

       return(
            <div>
              <h2>Temperature Converter </h2>
              <label>Celsius:</label>
              <input onChange = {celsiusHandler} value = {celsius}type ='number' />
              <br/><br/>
              <label>Fahrenheit:</label>
              <input onChange = {FahrenheitHandler} value = {fahrenheit} type = 'number' />

            </div>
       )

   }

  const ShoppingCart = () =>{
    const[selectProduct, setProduct] = useState([])
   
    // Product A 
     const addProductA = ()=>{
          setProduct([...selectProduct,{name:"Product A", price:10}])
     }
 
    // Product B
     const addProductB = () =>{
             setProduct([...selectProduct,{name:"Product B", price: 20}])
     }

     let totalPrice = selectProduct.reduce((acc, curr) => acc + curr.price, 0)
     return(
          <div>
           
            <h2>Shopping Cart</h2>
            <ul>
                 {selectProduct.map((item,index) =>(
                   <li key = {index}>{item.name}- ${item.price}</li>
                 ))}
            </ul>
            <p>Total Price: ${totalPrice} </p>
            <button onClick = {addProductA}>Add Product A</button><button onClick = {addProductB}>Add product B</button>


          </div>
     )

  }

  const QuizApp = () =>{
     const[question, setquestion] = useState([])
      const questionBook = ["What is the national bird of India?",
          "How many colors are there in Indian flag?",
        "What is the color of sky?"]

       
     return(
          <div>
            <h2>Quiz App</h2>



          </div>
     )
  }
export default function App(){
  return(
       <div>
        <PostiveNegative />
        < UserLogin/>
        < TemperatureConverter/>
        <ShoppingCart/>
        < QuizApp/>

      </div>
  )
}
