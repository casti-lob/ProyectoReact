import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    login: '',
    password: ''
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users'); // Reemplaza 'URL_DE_TU_API' con la URL real de tu API
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users', newUser); // Reemplaza 'URL_DE_TU_API' con la URL real de tu API
      setUsers([...users, response.data]);
      setNewUser({
        name: '',
        email: '',
        login: '',
        password: ''
      });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={newUser.name} onChange={handleInputChange} placeholder="Nombre" />
        <input type="email" name="email" value={newUser.email} onChange={handleInputChange} placeholder="Email" />
        <input type="text" name="login" value={newUser.login} onChange={handleInputChange} placeholder="Login" />
        <input type="password" name="password" value={newUser.password} onChange={handleInputChange} placeholder="Contraseña" />
        <button type="submit">Agregar Usuario</button>
      </form>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.login}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;