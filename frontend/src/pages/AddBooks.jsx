import React, { useState } from 'react';
import "./AddBooks.css";
import axios from "axios";


const AddBooks = () => {
    const [data, setData ] = useState({
        bookname:"",
        description:"",
        image:"",
        price:"",
    });


    const handleChange = (e) => {
        e.preventDefault();
        const {name,value} = e.target;   //destructuring 
        setData({
             ...data, 
             [name]: value,
         });
    };
    
const submit = async() => {
    await axios.post("http://localhost:5000/bookapi/add",data)
    .then((res) => alert(res.data.message));


    setData({
        bookname:"",
        description:"",
        image:"",
        price:"",
    });
};

  return (
    <div className="room">

    <div className="heading1">
        <h1>Add Book</h1>
    </div>

    <input
        type="text"
        name="bookname"
        placeholder="Enter Book Name"
        value={data.bookname}
        onChange={handleChange}
    ></input>
    <input
        type="text"
        name="description"
        placeholder="Enter Description"
        value={data.description}
       onChange={handleChange}
    ></input>
       <input
        type="text"
        name="image"
        placeholder="enter the url of the Image"
        value={data.image}
       onChange={handleChange}
    ></input>
    <input
        type="text"
        name="price"
        placeholder="Enter the Price"
        value={data.price}
       onChange={handleChange}
    ></input>



   <div className="button" onClick={submit} LinkComponent>
    submit
  </div>
</div>
  );
}

export default AddBooks;