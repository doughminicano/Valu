import React, { useState } from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';

const NewItem = () => {
    const [itemInfo, setItemInfo] = useState({
        nickName: "",
        type: "",
        model: "",
        serialNumber: "",
        description: "",
        picture:""
    })

    const [errors, seterrors] = useState({})

    const changeHandler = (e) => {
        console.log("typing on an input....", e.target.name)

        setItemInfo({
            ...itemInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log("submiting new item...")
        console.log(itemInfo)
        Axios.post("http://localhost:8000/api/items/create", itemInfo)
            .then(res => {
                console.log("response after submitting the axios post request", res)
                if (res.data.results) {
                    navigate("/")
                }
                else {
                    console.log("error submitting form")
                    seterrors(res.data.errors)
                }

            })
            .catch(err => console.log("errors that came up from posting", err))

    }



    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="">Nick Name</label>
                    <input type="text" name="nickName" onChange={changeHandler} id="" />
                    <span className="text-danger">{errors.nickName ? errors.nickName.message : ""}</span>
                </div>
                <div>
                    <label htmlFor="">Type</label>
                    <input type="text" name="type" onChange={changeHandler} id="" />
                    <span className="text-danger">{errors.type ? errors.type.message : ""}</span>
                </div>
                <div>
                    <label htmlFor="">Model</label>
                    <input type="text" name="model" onChange={changeHandler} id="" />
                    <span className="text-danger">{errors.model ? errors.model.message : ""}</span>
                </div>
                <div>
                    <label htmlFor="">Serial Number</label>
                    <input type="number" name="serialNumber" onChange={changeHandler} id="" />
                    <span className="text-danger">{errors.serialNumber ? errors.serialNumber.message : ""}</span>
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <input type="text" name="description" onChange={changeHandler} id="" />
                    <span className="text-danger">{errors.description ? errors.description.message : ""}</span>
                </div>
                <div>
                    <label htmlFor="">Upload Image</label>
                    <input type="file" name="picture" onChange={changeHandler} id="" />
                    <span className="text-danger">{errors.picture ? errors.picture.message : ""}</span>
                </div>


                <input type="submit" value="Add Item!" />
            </form>
        </div>
    );
};


export default NewItem;