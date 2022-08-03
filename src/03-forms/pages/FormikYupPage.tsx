import { useFormik } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'

export const FormikYupPage = () => {

    const { handleSubmit, errors, touched, getFieldProps} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: async(values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
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

                
        })
    });

  return (
    <div>
        <h1>Formik Yup Tutorial</h1>

        <form noValidate onSubmit={ handleSubmit } >
            <label htmlFor="firstName">First Name</label>
            <input type="text"
                { ...getFieldProps('firstName')}
            />
           {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
            <label htmlFor="lastName">Last Name</label>
            <input type="text"
                { ...getFieldProps('lastName')}
            />
            { touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
            <label htmlFor="email">Email Address</label>
            <input type="email"
                { ...getFieldProps('email')}
            />
             { touched.email && errors.email && <span>{errors.email}</span>}
      
            <button type='submit' >Submit</button>

        </form>

    </div>
  )
}
