import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../context/Auth';

import {
  SignUpDiv,
  InputFormSignUp,
  DivSectionForm,
  Button
} from '../styles/FormStyle';

const FormHook = () => {
  const auth = useContext(AuthContext);

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handlechange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();

    setForm(form);
    console.log(form);

    auth.login();
    history.push('/dashboard');
  };

  return (
    <>
      <SignUpDiv>
        <form onSubmit={handleSubmit}>
          <h4>Register</h4>
          <DivSectionForm>
            <label>Name: </label>
            <InputFormSignUp
              type="text"
              placeholder="name"
              name="name"
              onChange={handlechange}
              value={form.name}
            />
          </DivSectionForm>
          <DivSectionForm>
            <label>Email: </label>
            <InputFormSignUp
              type="email"
              placeholder="email"
              name="email"
              onChange={handlechange}
              value={form.email}
            />
          </DivSectionForm>
          <DivSectionForm>
            <label>Password: </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handlechange}
              value={form.password}
            />
          </DivSectionForm>
          <Button type="submit">Submit</Button>
        </form>
        <form form={form} />
      </SignUpDiv>
    </>
  );
};

export default FormHook;
