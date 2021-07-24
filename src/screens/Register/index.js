import axios from 'axios';
import React from 'react';
import {View, Text} from 'react-native';
import RegisterComponent from '../../components/RegisterComponent';
import envs from '../../config/env'
import axiosInstance from '../../helpers/axiosInterceptors';
function Register() {
  const [form, setform] = React.useState({});
  const [errors, setErrors] = React.useState({});
 
  React.useEffect(()=>{
   axiosInstance.get('/contacts').catch(err=>{
     console.log('err',err.response)
   });
   },[])
 
   const onChange = ({name, value}) => {
    seform({...form, [name]: value});
    if (value !== '') {
      if (value === 'password') {
        if (value.length < 6) {
          setErrors(prevs => {
            return {...prevs, [name]: 'this fleid needs 6 characters'};
          });
        }
      } else {
        setErrors(prevs => {
          return {...prevs, [name]: null};
        });
      }
    } else {
      setErrors(prevs => {
        return {...prevs, [name]: 'this fleid is required'};
      });
    }
  };

  const onSubmit = () => {
    // validations
    console.log('form >>> ', form);
    if (!form.username) {
      setErrors(prev => {
        return {...prev, username: 'please add a username'};
      });
    }

    if (!form.firstname) {
      setErrors(prev => {
        return {...prev, firstname: 'please add a firstname'};
      });
    }
    if (!form.lastname) {
      setErrors(prev => {
        return {...prev, lastname: 'please add a lasttname'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'please add a email'};
      });
    }

    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'please add a password'};
      });
    }
  };
  return (
    <RegisterComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      errors={errors}
    />
  );
}
export default Register;
