import React, { useState } from 'react';
console.log('Register outside');
const Register = () => {
  console.log('Register inside');
  // hooks
  const [email, setEmail] = useState('');
  // functions
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        className='form-control'
        autoFocus
        required
        value={email}
        onChange={handleChange}
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
