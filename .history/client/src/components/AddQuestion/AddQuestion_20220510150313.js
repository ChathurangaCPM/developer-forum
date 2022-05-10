import React, { useState, useEffect } from 'react';

import Axios from 'axios';

import '../../scss/componets/AddQuestion/AddQuestion.min.css';


function AddQuestion() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');

    const submitQuestion = (e) => {
        e.preventDefault();
        if(title != "" && description != '' && type != ''){
            Axios.post('http://localhost:3001/api/insert', {title, description, type}).then((response) => {
                console.log(response);
            });
        }else{
            alert('Some content are missing');
        }
    }

    return (
        <div className="addquestion_wrapper">
            <form onSubmit={submitQuestion}>

                <input type="text" name="title" onChange={(e) => {
                    setTitle(e.target.value)
                }} />
                <textarea name="descriptions" onChange={(e) => {
                    setDescription(e.target.value)
                }}></textarea>

                <div className="selrct_cat">
                    <select name="selrct_cat" onChange={(e) => {
                        setType(e.target.value)
                    }} >
                        <option value="">-- Select --</option>
                        <option value="reactjs">React Js</option>
                        <option value="nodejs">Node Js</option>

                    </select>
                    <button type="submit" >Ask</button>
                </div>
            </form>


        </div>
    );
}

export default AddQuestion;
