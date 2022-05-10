import React, {useState, useEffect} from 'react';
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

    const submitQuestion = ()=>{
        console.log(title);
        console.log(description);
        console.log(type);
    }

    return (
        <div className="addquestion_wrapper">
            <Formik
       initialValues={{ email: '', color: 'red', firstName: '', lastName: '' }}
       onSubmit={(values, actions) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
       }}
     >
       {(props: FormikProps<any>) => (
         <Form>
           <Field type="email" name="email" placeholder="Email" />
           <Field as="select" name="color">
             <option value="red">Red</option>
             <option value="green">Green</option>
             <option value="blue">Blue</option>
           </Field>
 
           <Field name="lastName">
             {({
               field, // { name, value, onChange, onBlur }
               form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
               meta,
             }) => (
               <div>
                 <input type="text" placeholder="Email" {...field} />
                 {meta.touched && meta.error && (
                   <div className="error">{meta.error}</div>
                 )}
               </div>
             )}
           </Field>
           <Field name="lastName" placeholder="Doe" component={MyInput} />
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>

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
                onSubmit={(values, { submitQuestion }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        submitQuestion(false);
                    }, 400);

                }}>
                {({ isSubmitting }) => (
                    <Form >
                        <div className="wrap_input">
                            <Field type="text" name="title"  onChange={(e)=>{
                                setTitle(e.target.value)
                            }}/>
                            <ErrorMessage name="title" component="div" className="error_msg" />
                        </div>
                        <Field as="textarea" name="descriptions" onChange={(e)=>{
                                setDescription(e.target.value)
                            }} />
                        <ErrorMessage name="descriptions" component="div" className="error_msg"/>

                        <div className="selrct_cat">
                            <Field as="select" name="selrct_cat"  onChange={(e)=>{
                                setType(e.target.value)
                            }} >
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
