import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  // count =0
  //Modification lil count setCount(2) => count=2
  const Increment = () => {
    setCount(count + 1)
    //this.setState({count:this.state.count+1})
  }
  const Decrement = () => {
    count >= 1 &&
      setCount(count - 1)
  }
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // console.log(contact)
  // const handleName = (e) => {
  //   setName(e.target.value)
  // }
  // const handleEmail = (e) => {
  //   setEmail(e.target.value)
  // }
  // console.log(name)
  // console.log(email)

  const [contact, setContact] = useState({
    lastname: "",
    email: ""
  })
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
    //e.target.name : key  attribute name="" (input)
    //e.target.value : value
  }
  return (
    <>
      <button onClick={Decrement}>-</button>
      Count : {count}
      <button onClick={Increment}>+</button>
      <input type="text" placeholder="Yasmine" name="lastname" onChange={handleChange} />
      <input type="email" placeholder="exemple@gmail.com" name="email" onChange={handleChange} />
      Name:{contact.lastname}
      Email: {contact.email}
    </>
  );
}

export default App;