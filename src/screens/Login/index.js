import React from 'react';
import LoginComponent from '../../components/LoginComponent'
const Login = () => {
  const [value, setValue] = React.useState('');
  return (
    <LoginComponent/>
  );
};
export default Login;
