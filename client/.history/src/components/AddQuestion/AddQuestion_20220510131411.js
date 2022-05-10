import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import '../../scss/componets/AddQuestion/AddQuestion.min.css';


function AddQuestion() {
    return (
        <div className="addquestion_wrapper">
            <Formik
                initialValues={{ title: '', descriptions: '', selrct_cat: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.title) {
                        errors.title = 'Title is required';
                    } else if (
                        values.title.length < 5
                    ) {
                        errors.title = 'Title is too small';
                    }

                    if (!values.descriptions) {
                        errors.descriptions = 'Description is required';
                    } else if (values.descriptions.length < 150) {
                        errors.descriptions = 'Description should more than 150 characters';
                    }
                    if (!values.selrct_cat) {
                        errors.selrct_cat = 'Please select the type';
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="title" />
                        <ErrorMessage name="title" component="div" className="error_msg" />
                        <Field as="textarea" name="descriptions" />
                        <ErrorMessage name="descriptions" component="div" className="error_msg"/>

                        <div className="selrct_cat">
                            <Field as="select" name="selrct_cat" >
                                <option value="">-- Select --</option>
                                <option value="reactjs">React Js</option>
                                <option value="nodejs">Node Js</option>

                            </Field>
                            <button type="submit" disabled={isSubmitting}>Ask</button>
                        </div>
                        <ErrorMessage name="selrct_cat" component="div" className="error_msg" />
                    </Form>
                )}
            </Formik>

        </div>
    );
}

export default AddQuestion;
