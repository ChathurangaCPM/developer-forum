import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import '../../scss/componets/AddQuestion/AddQuestion.min.css';


function AddQuestion() {
	return (
		<div className="addquestion_wrapper">
            <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
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
           <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />
           <Field type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
			<form >
                <input type="text" placeholder="How to .."/>
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
