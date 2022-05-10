import React, { useState, useEffect } from 'react';
import { Field, Form, Formik, FormikProps } from 'formik';

import Axios from 'axios';

import '../../scss/componets/AddQuestion/AddQuestion.min.css';
const MyInput = ({ field, form, ...props }) => {
    return <input {...field} {...props} />;
};

function AddQuestion() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');

    const submitQuestion = (e) => {
        e.preventDefault();
        console.log(title);
        console.log(description);
        console.log(type);
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
