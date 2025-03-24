import { Field, Form } from 'formik';

const LoginForm = () => {
  return (
    <div>
      <h2>Log in</h2>
      <p>Welcome! Please enter your credentials to login to the platform:</p>
      <Form>
        <Field name="email"></Field>
        <Field name="password"></Field>
        <button type="submit">Log in</button>
      </Form>
      Don&apos;t have an account? Register
    </div>
  );
};

export default LoginForm;
