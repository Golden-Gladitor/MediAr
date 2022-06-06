import React, { useState } from 'react';
import * as Yup from "yup";
import { Formik } from "formik";
import { styled, Box, Button, InputAdornment } from '@mui/material';
import PageLayout from '../components/layout/PageLayout';
import AuthLayout from '../components/layout/AuthLayout';
import TextField from '../components/core/TextField';
import PasswordField from '../components/core/PasswordField';
import { ReactComponent as UserNameIcon } from '../assets/svg/user-name.svg';
import { ReactComponent as EmailIcon } from '../assets/svg/email.svg';
import axios from 'axios';
import { green } from '@mui/material/colors';

const Heading = styled('div')(({ theme }) => ({
    margin: '0 auto',
    marginBottom: '24px',
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: '34px',
    lineHeight: '46px',
}))

const Formsuccess = styled('div')(({ theme }) => ({
   color:'green',
    fontFamily: 'Open Sans',
    fontWeight: '300',
    fontSize: '20px',
    
}))

const Formerror = styled('div')(({ theme }) => ({
    color:'green',
     fontFamily: 'Open Sans',
     fontWeight: '300',
     fontSize: '20px',
     
 }))

export default function SignIn({ getValue, errorMsg }) {
    const [success, setSuccess]= useState(null);
    const [error, setError]= useState(null);


    const onSubmit = async(values) => {
        const {confirmPassword, ... data} = values;
       
       const response = await axios
        .post("http://localhost:3001/SignUp",data)
            .catch((err) =>{
                if(err & err.response) {
                    setError(err.response.message);

                }
            });
            if(response && response.data){
                setSuccess(response.data.message);
                Formik.resetForm();
            }
            
          
      };

      const Regex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
   
   
   return <PageLayout>
        <AuthLayout>
            <Box
                display="flex"
                width="100%"
                height="100%"
                flexDirection="column"
                justifyContent="center"
            >
                <Heading>
                    Sign up
            </Heading>
                <Formik
                    initialValues={{
                        userName: '',
                        email: "",
                        password: "",
                        confirmPassword:"",
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email("Must be a valid email!")
                            .max(255)
                            .required("Email is required!"),
                        password: Yup.string()
                            .min(6, "Password must be of minimum 6 characters!")
                            .max(255)
                            .matches(Regex,"Please set the strong password")
                            .required("Password is required!"),
                        confirmPassword: Yup.string().when('password' ,{
                            is:val => (val&& val.length> 0 ? true:false),
                            then: Yup.string().oneOf([Yup.ref('password')], 'Passwords does not match'),
                        }),
                           
                    })}
                    onSubmit={onSubmit}
                >
                    {({
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        touched,
                        values,
                    }) => (
                            <form onSubmit={Formik.handleSubmit}>
                                <TextField
                                    error={Boolean(touched.userName && errors.userName)}
                                    fullWidth
                                    helperText={touched.userName && errors.userName}
                                    name="userName"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.userName}
                                    variant="outlined"
                                    placeholder="User Name"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start" >
                                            <UserNameIcon />
                                        </InputAdornment>,
                                    }}
                                />

                                <TextField
                                    error={Boolean(touched.email && errors.email)}
                                    fullWidth
                                    helperText={touched.email && errors.email}
                                    margin="normal"
                                    name="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    variant="outlined"
                                    placeholder="Email"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start" >
                                            <EmailIcon />
                                        </InputAdornment>,
                                    }}
                                />

                                <PasswordField
                                    error={Boolean(touched.password && errors.password)}
                                    fullWidth
                                    helperText={touched.password && errors.password}
                                    label="Password"
                                    margin="normal"
                                    name="password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                    variant="outlined"
                                    placeholder="Enter your password"
                                />
                                <br />
                                <br />
                                <PasswordField
                                    error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                                    fullWidth
                                    helperText={touched.confirmPassword && errors.confirmPassword}
                                    label="confirmPassword"
                                    margin="normal"
                                    name="confirmPassword"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.confirmPassword}
                                    variant="outlined"
                                    placeholder="Re-enter your password"
                                />
                                <Box>
                                    {errorMsg && (
                                        <div>
                                            <p style={{ color: "red" }}>{errorMsg}</p>
                                        </div>
                                    )}
                                </Box>

                                <Box mt="32px">
                                    <Button
                                        disableElevation
                                        disableRipple
                                        style={{
                                            borderRadius: '50px'
                                        }}
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        variant="contained"
                                        type="submit"
                                        fullWidth
                                    >
                                        Sign up
                                </Button>
                                </Box>
                            </form>
                        )}
                </Formik>
            </Box>
            <formSuccess> {success ?success:'' } </formSuccess>
            <Formerror> {error? error: ''}</Formerror>
        </AuthLayout>
    </PageLayout>;
};