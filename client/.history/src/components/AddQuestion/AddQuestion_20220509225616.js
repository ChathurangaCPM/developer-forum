import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import '../../scss/componets/AddQuestion/AddQuestion.min.css';


function AddQuestion() {
    return (
        <div className="addquestion_wrapper">
            <Formik
                initialValues={{ title: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.title) {
                        errors.title = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.title)
                    ) {
                        errors.email = 'Invalid email address';
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
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
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