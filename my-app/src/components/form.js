import React from "react"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
function Form() {
  // schema 
  const schema = yup.object().shape({
    username: yup.string().required('A valid username is required'),
    password: yup.string().required('A valid password is required'),
  })

  function handle(data) {
    console.log(data)
  }

  const { register, handleSubmit , formState : {errors} } = useForm({
    resolver: yupResolver(schema)
  })
  return (
    <div>
      <h1>Register form </h1>
      <form onSubmit={handleSubmit(handle)}>
        <input type="text" placeholder="username" {...register('username')} /><br></br>
        <p style={{color : 'red'}}>{errors.username?.message}</p>
        <input type="password" placeholder="password" {...register('password')} /><br></br>
        <input type="password" placeholder="cpassword" {...register('cpassword')} /><br></br>
        <input type="text" placeholder="firstname" {...register('firstname')} /><br></br>
        <input type="text" placeholder="lastname" {...register('lastname')} /><br></br>
        <input type="email" placeholder="email" {...register('email')} /><br></br>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form