import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import '../../scss/componets/AddQuestion/AddQuestion.min.css';


function AddQuestion() {
    (formProps.errors, 'selrct_cat')
    return (
        <div className="addquestion_wrapper">
            <Formik
                initialValues={{ title: '', descriptions: '', selrct_cat: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.title) {
                        errors.title = 'Required';
                    } else if (
                        values.title.length < 5
                    ) {
                        errors.title = 'Title is too small';
                    }

                    if (!values.descriptions) {
                        errors.descriptions = 'Required';
                    } else if (values.descriptions.length < 150) {
                        errors.descriptions = 'Description should more than 150 characters';
                    }
                    if (!values.selrct_cat) {
                        errors.selrct_cat = 'Required';
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
                        <ErrorMessage name="title" component="div" className="error_class" />
                        <Field as="textarea" name="descriptions" />
                        <ErrorMessage name="descriptions" component="div" />

                        <div className="selrct_cat">
                            <Field as="select" name="selrct_cat" >
                                <option value="">-- Select --</option>
                                <option value="reactjs">React Js</option>
                                <option value="nodejs">Node Js</option>

                            </Field>
                            <button type="submit" disabled={isSubmitting}>Ask</button>
                        </div>
                        <ErrorMessage name="selrct_cat" component="div" />
                    </Form>
                )}
            </Formik>

        </div>
    );
}

export default AddQuestion;
