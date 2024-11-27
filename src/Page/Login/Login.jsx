import React, { useState } from 'react';
import './Login.css';

const Login = ({ isOpen, onClose, children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); 

    if (email === '' && password === '') {
      alert('Вход успешен!');
      onClose();
    } else {
      setError('Неверный логин или пароль!');
    }

    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <h2>Вход в систему</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Электронная почта</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit" disabled={loading}>
            {loading ? 'Загрузка...' : 'Войти'}
          </button>
        </form>
        <button className="close-button" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};

export default Login;
