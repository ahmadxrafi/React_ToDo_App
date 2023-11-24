import React, { useState } from 'react';


const ToDo = () => {

const [list, setList] = useState([]);
const [item, setItem] = useState("");

const AddToList = () => {
    list.push(item);
    setList([...list]);
    }
    
    const RemoveItem = (index) => {
        list.splice(index, 1);
        setList([...list]);
    }
    return (
        <div id='todomain'>
            <h1 id='title'>ToDo App</h1>
            <table>
                <tbody>
                    {
                        list.length !== 0 ? (
                            list.map((element, index) => {
                        return(
                            <tr>
                                <td>{element}</td>
                                <td><button onClick={()=> { RemoveItem(index) }}>Remove</button></td>
                            </tr>
                        )

                    })): ( <tr></tr> )

                    }

                </tbody>
            </table>
            <input onChange={(e)=>setItem(e.target.value)} type="text" placeholder='Enter Item' />
            <button onClick={AddToList}>Add Item</button>
        </div>
    );
};

export default ToDo;