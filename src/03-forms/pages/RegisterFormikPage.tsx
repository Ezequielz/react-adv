
import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import { MyTextInput } from '../components';

import '../styles/styles.css'


export const RegisterFormikPage = () => {
  return (
    <div>
        <h1>Register Formik page</h1>

        <Formik 
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: '',
            }} 
            onSubmit={ (values)  => {
                console.log(values)
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                         .min(3,'Minimo 3 caracteres')
                         .max(15,'Minimo 15 caracteres')
                         .required('Requerido')
                ,
                email: Yup.string()
                        .email('Email no válido')
                        .required('Requerido')
                ,
                password1: Yup.string()
                              .required('Requerido')
                              .min(6,'Minimo 6 caracteres')
                
                ,
                password2: Yup.string()
                                .required('Requerido')
                                .oneOf([Yup.ref('password1')], 'Passwords no coinciden')
                ,
            })

            
        }>
            {
                ({ handleReset }) => (

                    <Form>
                        <MyTextInput 
                            label="" 
                            name="name" 
                            placeholder='Name'
                        />
                        <MyTextInput 
                            label="" 
                            name="email" 
                            type='email'
                            placeholder='Email'
                        />
                        <MyTextInput 
                            label="" 
                            name="password1" 
                            type='password'
                            placeholder='Password'
                        />
                        <MyTextInput 
                            label="" 
                            name="password2" 
                            type='password'
                            placeholder='Repita Password'
                        />

                        <button  type="submit"> Create </button>
                        <button  type="button" onClick={ handleReset }> Reset Form </button>

                        
                    </Form>
                )

            }

        </Formik>
    </div>
  )
}
