import React , {useEffect, useState} from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';

const EditItem = (props) => {
    const [itemdetails, setItemdetails] = useState({
        nickName:"",
        type:"",
        model:"",
        serialNumber:"",
        description:"",
        picture:""
    })

    const [errors, seterrors] = useState({})

    useEffect(()=>{
        Axios.get(`http://localhost:8000/api/items/${props.itemid}`)
            .then(response => {
                console.log("RESPONSE FROM API CALL", response)
                setItemdetails(response.data.results)
            })
            .catch()
    },[])
    console.log("********", props.itemid)

    const changeHandler = e =>{
        console.log("working on edits")
        setItemdetails({
            ...itemdetails,
            [e.target.name]:e.target.value
        })
    }

    const submithandler = e => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/items/update/${props.itemid}`, itemdetails)
            .then(response => {
                console.log("updating... here is the response", response)
                if (response.data.results){
                    navigate('/')
                }
                else{
                    seterrors(response.data.errors)
                }
            })
            .catch(err=> console.log("ERROR ON TRYIN TO UPDATE", err))
    }

    return (
        <div>
            <h3>Edit Item</h3>
            <form onSubmit= {submithandler}>
                <div>
                    <label htmlFor="">Nick Name</label>
                    <input type="text" name="nickName" value = {itemdetails.nickName} onChange={changeHandler} id=""/>
                    <span className = "text-danger">{errors.nickName? errors.nickName.message: ""}</span>
                </div>
                <div>
                    <label htmlFor="">Type</label>
                    <input type="text" name="type" value = {itemdetails.type} onChange={changeHandler} id=""/>
                    <span className = "text-danger">{errors.type? errors.type.message: ""}</span>

                </div>
                <div>
                    <label htmlFor="">Model</label>
                    <input type="text" name="model" value = {itemdetails.model} onChange={changeHandler}id=""/>
                    <span className = "text-danger">{errors.model? errors.model.message: ""}</span>
                </div>
                <div>
                    <label htmlFor="">Serial Number</label>
                    <input type="number" name="serialNumber" value = {itemdetails.serialNumber} onChange={changeHandler}id=""/>
                    <span className = "text-danger">{errors.serialNumber? errors.serialNumber.message: ""}</span>
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <input type="text" name="description" value = {itemdetails.description} onChange={changeHandler}id=""/>
                    <span className = "text-danger">{errors.description? errors.description.message: ""}</span>
                </div>

                <input type="submit" value="Update this Item!"/>
            </form>
        </div>
    );
};

export default EditItem;