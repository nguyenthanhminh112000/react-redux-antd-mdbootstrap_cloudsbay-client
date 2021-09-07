import React, { useState } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
console.log('ForgotPassword outside');
const ForgotPassword = ({ history }) => {
  console.log('ForgotPassword inside');
  // hooks
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  // functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const config = {
      url: process.env.REACT_APP_LOGIN_REDIRECT_URL,
      handleCodeInApp: true,
    };
    try {
      await auth.sendPasswordResetEmail(email, config);
      // Password reset email sent!
      toast.success(`Reset email is send to ${email}.`);
      history.push('/login');
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  // components

  return (
    <div className='container col-md-6 offset-md-3 p-5'>
      {console.log('ForgotPassword inside return')}
      {!loading ? (
        <h4>Forgot Password</h4>
      ) : (
        <h4 style={{ color: 'red' }}>Loading...</h4>
      )}
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
        <button
          onClick={handleSubmit}
          disabled={!email}
          className='btn btn-raised'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
