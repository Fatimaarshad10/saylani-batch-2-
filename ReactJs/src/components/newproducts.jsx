import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { database } from "../config/firebase";
import { useNavigate } from "react-router-dom";
function NewProduct() {

  const icons = [
    {
      id: 1,
      image: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>

    },
    {
      id: 2,
      image: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T464-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T160-484q0 135 94.5 229.5T484-160Zm-20-305Z" /></svg>
    },
    {
      id: 3,
      image: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Zm60-364 20-12q2 24 19 40t41 16q25 0 42.5-17.5T680-540q0-15-7-28.5T654-590l26-15-20-35-140 80 20 36Zm-120 0 20-36-140-80-20 35 26 15q-12 8-19 21.5t-7 28.5q0 25 17.5 42.5T340-480q24 0 41-16t19-40l20 12Zm60 84q-71 0-125 45.5T279-280h402q-22-69-76-114.5T480-440Zm0-40Z" /></svg>

    },
  ]
  const [airData, setAirData] = useState('stays')


  const navigate = useNavigate()
  const productData = collection(database, 'products');
  // schema
  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  async function handle(data) {
    await addDoc(productData, data)
    alert('user create a new product');
    navigate('/all/product')
  }
  const handleStays = () => {
    setAirData('stays')
  }
  const handleExp = () => {
    console.log('experience')
    setAirData('experience')
  }
  return (
    <div>
      {airData === 'stays' ? <>
        <h1>check In </h1>
        <h1>check out </h1>
      </> : <>
        <h1>date </h1>

      </>}
      <button onClick={handleStays}>stays</button>
      <button onClick={handleExp}>experience</button>
      {icons.map((value, index) => (
        <div key={index}>
          {value.image}
        </div>
      ))}
      <h1>Product form</h1>
      {/* <form onSubmit={handleSubmit(handle)}>
        <input type="text" placeholder="title" {...register("title")} />
        <p style={{ color: "red" }}>{errors.title?.message}</p>
        <input type="submit" />
      </form> */}
    </div>
  );
}

export default NewProduct;
