
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthWrapper } from './style';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Checkbox } from '../../../../components/checkbox/checkbox';
import Heading from '../../../../components/heading/heading';
import { API } from '../../../../config/api';
import { login } from '../../../../redux/authentication/actionCreator';


function SignIn() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);
  const [form] = Form.useForm();
  const [state, setState] = useState({
    checked: null,
  });


  // const handleSubmit = useCallback(() => {
  //   dispatch(login());
  //   history.push('/admin');
  // }, [history, dispatch]);

  const handleSubmit = useCallback(async () => {
    try {
      const values = await form.validateFields();

      const response = await axios.post( `${API.auth.login}`, {
        email: values.email,
        password: values.password,
      });

      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        dispatch(login(response.data.token));
        history.push('/admin');
        message.success('Login successful!');
      } else {
        console.error('Authentication failed');
        message.error('Authentication failed. Please check your credentials.');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        const errorMessage = error.response.data.message;
        message.error(errorMessage);
      } else {
        message.error('Enter valid email or password. Please try again.');
      }
    }
  }, [form, history, dispatch]);

  const onChange = (checked) => {
    setState({ ...state, checked });
  };


  return (
    <AuthWrapper>
      <p className="auth-notice">
        Don&rsquo;t have an account? <NavLink to="/register">Sign up now</NavLink>
      </p>
      <div className="auth-contents">
        <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">
          <Heading as="h3">
            Sign in to <span className="color-secondary">Admin</span>
          </Heading>
          <Form.Item
            name="email"
            rules={[{ message: 'Please input your username or Email!', required: true }]}
            label="Username or Email Address"
          >
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input.Password placeholder="Password" />
          </Form.Item>
          <div className="auth-form-action">
            <Checkbox onChange={onChange} checked={state.checked}>
              Keep me logged in
            </Checkbox>
            <NavLink className="forgot-pass-link" to="/forgotPassword">
              Forgot password?
            </NavLink>
          </div>
          <Form.Item>
            <Button className="btn-signin" htmlType="submit" type="primary" size="large">
              {isLoading ? 'Loading...' : 'Sign In'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </AuthWrapper>
  );
}

export default SignIn;
