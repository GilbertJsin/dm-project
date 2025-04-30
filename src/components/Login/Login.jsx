import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ isLoading, error, onSubmit, onForgotPassword, onRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Only navigate if onSubmit is not provided
      console.log('Login attempted with:', formData);
      navigate('/char-creation');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        
        <div className="login-footer">
          {onForgotPassword && (
            <button type="button" className="text-button" onClick={onForgotPassword} disabled={isLoading}>
              Forgot Password?
            </button>
          )}
          {onRegister && (
            <button type="button" className="text-button" onClick={onRegister} disabled={isLoading}>
              Register
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;