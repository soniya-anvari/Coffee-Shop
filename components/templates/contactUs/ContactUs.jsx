import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } 

  return errors;
};

const ContactUs = () => {
  
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      submitHandler(values)
    },
  });
  const submitHandler=()=>{
    
  }
  return (
    <div className='backdrop-blur-lg bg-[url(/images/contact.jpg)] h-[100vh] bg-contain'>

    <form className='w-11/12 m-auto flex flex-col gap-6' onSubmit={formik.handleSubmit}>
    <div>
     <label htmlFor="firstName" className='text-white'>First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        className='border border-gray-400  outline-none mt-1 text-white bg-none p-4 rounded-xl w-full'
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      {formik.errors.firstName ? <div className='text-red-400 text-[12px] mt-1'>{formik.errors.firstName}</div> : null}
</div> 
      <div> <label htmlFor="lastName" className='text-white'>Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        className='border border-gray-400  outline-none mt-1 text-white bg-none p-4 rounded-xl w-full'
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName ? <div className='text-red-400 text-[12px] mt-1'>{formik.errors.lastName}</div> : null}
    </div> 
      <div> <label htmlFor="email" className='text-white'>Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        className='border border-gray-400 outline-none mt-1 text-white bg-none p-4 rounded-xl w-full'

        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div className='text-red-400 text-[12px] mt-1'>{formik.errors.email}</div> : null}
      </div> 
      <button className='bg-[var(--orange-accent)]  p-4 rounded-xl w-full py-4 text-white' type="submit">Submit</button>
    </form>
    </div>

  );
};
export default ContactUs;