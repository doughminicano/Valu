import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from "@reach/router";


const Main = () => {
    //if i want it to run some function upon rendering of this component, i want to use useEffect
    const [allitems, setallitems] = useState([])

    const [deleteClicked, setDeleteClicked] = useState(false)


    useEffect(() => {
        Axios.get("http://localhost:8000/api/items")
            .then(response => {
                console.log("*************", response)

                // sort by value
                response.data.results.sort(function (a, b) {
                    return a.serialNumber - b.serialNumber;
                });

                setallitems(response.data.results)
            })
            .catch(err => console.log(err))
    }, [deleteClicked])

    const deleteClickHandler = (e, itemid) => {
        console.log("deleting item from system", itemid)
        Axios.delete(`http://localhost:8000/api/items/destroy/${itemid}`)
            .then(response => {
                console.log("item delted!", response)
                setDeleteClicked(!deleteClicked)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>

            <table className="table table-secondary col-8 mx-auto">
                <thead>
                    <tr>
                        <th>Nick Name</th>
                        <th>Type</th>
                        <th>Model</th>
                        <th>Serial Number</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allitems.map((item, i) => {
                            return <tr key={i}>

                                <td>{item.nickName}</td>
                                <td>{item.type}</td>
                                <td>{item.model}</td>
                                <td>{item.serialNumber}</td>
                                <td>{item.description}</td>
                                <td>
                                    <Link className="btn btn-info m-1" to={`/items/${item._id}`}>View Item</Link>
                                    <Link className="btn btn-info m-1" to={`/items/edit/${item._id}`}>Edit Item</Link>
                                    <button onClick={(e) => deleteClickHandler(e, item._id)} className="btn btn-info m-1" >Delete Item</button>
                                    {/* <button onClick={ (e) => onClickHandler(e, item) }>{ item }</button> */}



                                </td>

                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    );
};

export default Main;