import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { database } from "../config/firebase";
function NewProduct() {
  const productData = collection(database , 'products');
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
    await addDoc(productData , data)
  }
  return (
    <div>
      <h1>Product form</h1>
      <form onSubmit={handleSubmit(handle)}>
        <input type="text" placeholder="title" {...register("title")} />
        <p style={{ color: "red" }}>{errors.title?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewProduct;
