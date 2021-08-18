import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

console.log('RegisterComplete outside');
const RegisterComplete = ({ history }) => {
  console.log('RegisterComplete inside');
  // hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    console.log('RegisterComplete inside useEffect');
    setEmail(window.localStorage.getItem('emailForRegistration'));
  }, []);
  // functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Email and password are required.');
      return;
    }
    if (password.length < 6) {
      toast.error('Password must have at least 6 characters.');
      return;
    }
    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      window.localStorage.removeItem('emailForRegistration');
      if (result.user.emailVerified) {
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
        toast.success(`Sign up success.`);
        history.push('/');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  // components
  const registrationCompleteForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        className='form-control'
        value={email}
        disabled
        style={{ marginBottom: '10px' }}
      />
      <input
        type='password'
        className='form-control'
        autoFocus
        required
        value={password}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />
      <button type='submit' className='btn btn-raised'>
        Complete Registration
      </button>
    </form>
  );
  return (
    <div className='container p-5'>
      {console.log('RegisterComplete inside return')}
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h4>Register Complete</h4>
          {registrationCompleteForm()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
