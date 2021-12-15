import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddService.css";


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
     console.log(data);
     axios.post('http://localhost:5000/services', data)
     .then(res => {
         if(res.data.insertedId){
             alert('Added succesfully');
             reset();
         }
     })
    }
    return (
        <div className="add-service">
            <h1>Please add service</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true , maxLength: 20 })} placeholder='name' />
      <input {...register("description" )} placeholder='description' />
      <input type="number" {...register("price")} placeholder='Price' />
      <input {...register("img" )} placeholder='Photo Url' />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;