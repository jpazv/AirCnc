// pages/RegisterPage.js
import React, { useState } from 'react';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    // Implementar lógica de registro aqui
  };

  
  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <label>
          Nome de usuário:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Senha:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Registrar" />
      </form>
    </div>
  );
}

export default RegisterPage;
