import React, { useState } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

console.log('Register outside');
const Register = () => {
  console.log('Register inside');
  // hooks
  const [email, setEmail] = useState('');
  // functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
        handleCodeInApp: true,
      };
      await auth.sendSignInLinkToEmail(email, config);
      toast.success(
        `Email is send to ${email}. Click the link to complete registration.`
      );
      window.localStorage.setItem('emailForRegistration', email);
      setEmail('');
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  // components
  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        className='form-control'
        autoFocus
        required
        value={email}
        onChange={handleChange}
        placeholder='Your email'
        style={{ marginBottom: '5px' }}
      />
      <button type='submit' className='btn btn-raised'>
        Register
      </button>
    </form>
  );
  return (
    <div className='container p-5'>
      {console.log('Register inside return')}
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h4>Register</h4>
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
