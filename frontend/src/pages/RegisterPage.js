import RegisterForm from '../containers/auth/RegisterForm';
import AuthTemplate from '../components/auth/AuthTemplate';

const RegisterPage = () => {
  return (
    <div>
      <AuthTemplate>
        <RegisterForm/>
      </AuthTemplate>
    </div>
  );
};

export default RegisterPage;
