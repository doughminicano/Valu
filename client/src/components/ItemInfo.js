import React, {useEffect, useState} from 'react';
import Axios from 'axios';

const ItemInfo = (props) => {
    console.log("LOGGING PROPS FROM ITEM INFO COMPONENT!!!", props)
    const [itemdetails, setItemdetails] = useState({
        nickName:"",
        type:"",
        model:"",
        serialNumber:"",
        description:"",
        picture:""
    })
    
    useEffect(()=>{
        Axios.get(`http://localhost:8000/api/items/${props.itemid}`)
            .then(response => {
                console.log("got back the response from api to find one item", response)
                setItemdetails(response.data.results)
            })
            .catch(err=> console.log("ERRORORRR", err))

    }, [])
    return (
        <>

        <div>
            <h3>Here is information about this item:</h3>
            <p>Id:{ props.itemid}</p>
            <p>Nick Name: {itemdetails.nickName}</p>
            <p>Type: {itemdetails.type}</p>
            <p>Model: {itemdetails.model}</p>
            <p>Serial Number: {itemdetails.serialNumber}</p>
            <p>Description: {itemdetails.description}</p>
        </div>
        <div>
            <h3>Picture</h3>
            {itemdetails.picture}
        </div>
        </>
    );

};

export default ItemInfo;