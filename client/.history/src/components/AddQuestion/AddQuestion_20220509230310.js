import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import '../../scss/componets/AddQuestion/AddQuestion.min.css';


function AddQuestion() {
    return (
        <div className="addquestion_wrapper">
            <Formik
                initialValues={{ title: '', descriptions: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.title) {
                        errors.title = 'Required';
                    } else if (
                        values.title.length < 5
                    ) {
                        errors.title = 'Title is too small';
                    }

                    if(!values.descriptions){
                        errors.descriptions = 'Required';
                    }else if(values.title.length < 150){
                        errors.title = 'Description should more than 150 characters';
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="title" />
                        <ErrorMessage name="title" component="div" />
                        <Field type="textarea" name="descriptions" />
                        <ErrorMessage name="descriptions" component="div" />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
            <form >
                <input type="text" placeholder="How to .." />
                <textarea placeholder="Describe.."></textarea>
                <div className="selrct_cat">
                    <select>
                        <option>-- Select --</option>
                        <option value="reactjs">React Js</option>
                        <option value="reactjs">Node Js</option>
                    </select>
                    <button type="submit">Ask</button>
                </div>
            </form>
        </div>
    );
}

export default AddQuestion;
