import React,{useState} from 'react';
import * as Yup from "yup";
import { Formik } from "formik";
import { styled, Box, Button, InputAdornment } from '@mui/material';
import PageLayout from '../components/layout/PageLayout';
import AuthLayout from '../components/layout/AuthLayout';
import TextField from '../components/core/TextField';
import PasswordField from '../components/core/PasswordField';
import { ReactComponent as EmailIcon } from '../assets/svg/email.svg';
import axios from 'axios';

const Heading = styled('div')(({ theme }) => ({
    margin: '0 auto',
    marginBottom: '24px',
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: '34px',
    lineHeight: '46px',
}))

export default function SignIn({ getValue, errorMsg }) {
    const [success, setSuccess]= useState(null);
    const [error, setError]= useState(null);
    
    const onSubmit = async(values) => {
        const {email,password} = values;
       
       const response = await axios
        .post("http://localhost:3001/SignIn",values)
            .catch((err) =>{
                if(err & err.response) 
                    setError(err.response.data.message);
                    alert(err)
                })
                if(response){
                    alert("Welcome");
                }
            };

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
                    Log in
            </Heading>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email("Must be a valid email!")
                            .max(255)
                            .required("Email is required!"),
                        password: Yup.string()
                            .min(6, "Password must be of minimum 6 characters!")
                            .max(255)
                            .required("Password is required!"),
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
                            <form onSubmit={handleSubmit}>
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
                                        Log in
                                </Button>
                                </Box>
                            </form>
                        )}
                </Formik>
            </Box>
        </AuthLayout>
    </PageLayout>;
};