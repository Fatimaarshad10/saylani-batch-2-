import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Step 1: Create a validation schema with yup
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  age: yup
    .number()
    .typeError('Age must be a number')
    .min(18, 'You must be at least 18 years old')
    .required('Age is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
  confirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

function Form() {
  // Step 2: Integrate yupResolver with react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name field */}
      <input type="text" placeholder="Name" {...register('name')} />
      <p>{errors.name?.message}</p> {/* Display validation error */}

      {/* Email field */}
      <input type="email" placeholder="Email" {...register('email')} />
      <p>{errors.email?.message}</p> {/* Display validation error */}

      {/* Age field */}
      <input type="text" placeholder="Age" {...register('age')} />
      <p>{errors.age?.message}</p> {/* Display validation error */}

      {/* Password field */}
      <input type="password" placeholder="Password" {...register('password')} />
      <p>{errors.password?.message}</p> {/* Display validation error */}

      {/* Confirm Password field */}
      <input type="password" placeholder="Confirm Password" {...register('confirm')} />
      <p>{errors.confirm?.message}</p> {/* Display validation error */}

      {/* Submit button */}
      <input type="submit" />
    </form>
  );
}

export default Form;
