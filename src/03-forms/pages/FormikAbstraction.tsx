import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { MyCheckbox, MySelect, MyTextInput } from '../components'
import '../styles/styles.css'

export const FormikAbstraction = () => {
  return (
    <div>
        <h1>Formik Abstraction</h1>

        <Formik 
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit={ (values)  => {
                console.log(values)
            }}
            validationSchema={Yup.object({
                    firstName: Yup.string()
                                    .min(3, 'Minimo 3 caracteres')
                                    .max(15, 'Debe de tener 15 caracteres o menos' )
                                    .required('Campo requerido'),
                    lastName: Yup.string()
                                    .min(3, 'Minimo 3 caracteres')
                                    .max(10, 'Debe de tener 10 caracteres o menos' )
                                    .required('Campo requerido'),
                    email: Yup.string()
                                .email('Debe ser un email válido')
                                .required('Campo requerido'),     
                    terms: Yup.boolean()
                                .oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string()
                                    .notOneOf(['it-jr'], 'Esta opcion no es permitida')
                                    .required('Requerido')
                })
        }>

            { (formik) => (
                    <Form >
                        <MyTextInput 
                            label="First Name" 
                            name="firstName" 
                            placeholder='Ezequiel'
                        />
                        <MyTextInput 
                            label="Last Name" 
                            name="lastName" 
                            placeholder='Zapata'
                        />

                        <MyTextInput 
                            label="Email Address" 
                            name="email" 
                            placeholder='Zapata@asd.com'
                            type='email'
                        />


                        <MySelect label="Job Type" name="jobType" >
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designed</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Jr</option>
                        </MySelect>

                        <MyCheckbox label="Terms and conditions" name="terms" /> 

                        <button type='submit' >Submit</button>
            
                    </Form>
                )
            }

            
        </Formik>



    </div>
  )
}
