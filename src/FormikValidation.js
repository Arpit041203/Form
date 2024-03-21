import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const validtion = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });
  

const FormikValidation = () => {
  return (
    <div>
       <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
       }}
       validationSchema={validtion}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
          Name:-
           <Field name="firstName" />
           {errors.firstName && touched.firstName ? (
             <div style={{color:'red'}}>{errors.firstName}</div>
           ) : null}
           <br></br>
           Surname:-
           <Field name="lastName" />
           {errors.lastName && touched.lastName ? (
             <div style={{color:'red'}}>{errors.lastName}</div>
           ) : null}
           <br></br>
           E-mail:-
           <Field name="email" type="email" />
           {errors.email && touched.email ? <div style={{color:'red'}}>{errors.email}</div> : null}
           <br></br>
           E-mail:-
           <Field name="email" type="email" />
           {errors.email && touched.email ? <div style={{color:'red'}}>{errors.email}</div> : null}
           <br></br>
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default FormikValidation
