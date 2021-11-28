import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

// import ClipLoader from 'react-spinners/ClipLoader';

import './styles.css';

import logo from '../../assets/logo.svg';
import api from '../../services/api';

interface FormData {
  email: string;
  password: string;
}

function SignIn() {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      await api.post('/sessions', formData);

      history.push('/create-point');
    } catch (err) {
      alert('Erro ao fazer o login, cheque suas credenciais');
    }
  }

  return (
    <div id="page-sign-in">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>

        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleInputChange}
            />
          </div>

          <button type="submit">
            {/* {loading ? (
            <ClipLoader
              color="#fff"
              loading={loading}
              css={{ display: 'flex' }}
              size={32}
            />
          ) : (
            <>Sign in</>
          )} */}
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
