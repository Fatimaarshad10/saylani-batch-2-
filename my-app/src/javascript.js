import React , {useState } from "react";

function App() {
  // javascript 

  // three way we can create a variable
  // const , let , var 
  // var userName = 'fatima'
  // var userName = 'noor'
  // let age = 10 
  //  age = 20 
  // console.log(age)

  // const age = 10 

  // primitive or non primtive 
  // string , number , boolean , undefine , null 

  // const data = hello ${age}
  // console.log(data)
  // let no = null;
  // console.log(no)

  // array 
  // const data = [1,2,3,4,5,6]
  // console.log(data.length)
  // console.log(data[2]) // 3
  // data.push(6) // [1,2,3,4,5,6]
  // console.log(data)
  // data.pop() // [1,2,3,4,5]
  // console.log(data)

  // data.shift() // [2,3,4,5]
  // console.log(data)

  // data.unshift('7') // ['7',2,3,4,5]
  // console.log(data)

  // data.splice(1,1, 'hello') // [2,3,4]
  // console.log(data)
  // const str = 'hello'
  // const str1 = str.split('')
  // console.log(str1)
  // const data1 = data.slice(1,3)
  // console.log(data1)


  // data.map((data , index)=>{
  //   console.log('data', data)
  //   console.log('index' , index)
  // })

  // const first = 5 

  // const check = (first === 5) ? 'true' : 'false'
  // console.log(check)

  // const filtered = data.filter((data) => data %2 !== 0)
  // console.log(filtered)

  //  object 

  // const person = {
  //   name : 'noor',
  //   age : 10,
  //   color : 'red'
  // }
  // console.log(person['name'])
  // const check = Object.entries(person)
  // console.log(check)
  const [userName, setUserName] = useState('')
  function handle (e){
      setUserName(e.target.value)
  }

  return (
    <>
    <div>
        <input type="text" onChange={(e)=> handle(e)} />
        <h1>{userName}</h1>
    </div>
   
    </>
  );
}

export default App;