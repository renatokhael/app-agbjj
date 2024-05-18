# AGBJJ-APP - Brazilian Jiu-Jitsu Gym

This is a fullstack web project for scheduling private jiu jitsu classes for the AG Jiu-Jitsu academy, consisting of a frontend in React and a backend in Node.js. For more information visit: https://agjiujitsu.com.br/login

<center><img src="./images//mockup.png" width="600px" /></center>

## Application home screens

<table>
  <tr>
    <td><img src="./images/01.png" alt="Tela 1"></td>
    <td><img src="./images/02.png" alt="Tela 1"></td>
    <td><img src="./images/03.png" alt="Tela 1"></td>
 
  </tr>
</table>

## Functionalities

- Instructors can register days and times available to teach classes.
- Instructors can register the amount charged per hour of class.
- Users can register and log in to access the system.
- Users can view the list of available instructors.
- Users can book and cancel classes.


## Technologies Used

### Frontend

- React
- React Router
- TypeScript
- CSS3
- Axios (para comunicação com o backend)

### Backend

- Node.js
- TypeScript
- Express.js (for creating the API)
- SQLite3 (for data storage)
- Knex (SQL query builder)
- JWT (for user authentication)
- Bcrypt (for password encryption)

## Installation

This project is using node v16.20.0, please use NVM to change between versions.

1. Clone this repository:

```
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Install frontend dependencies:

```
cd frontend
yarn install
```

3. Install backend dependencies:

```
cd ../backend
yarn install
```

4. Configure environment variables in the backend. You will need to create a `.env` file in the `backend` folder with the following variables:

```
PORT=3001
JWT_SECRET=your-secret-key-to-jwt
```

5. Start the backend server:

```
yarn start
```

6. Start the frontend server:

```
cd ../frontend
npm start
```

## Contributing

Contributions are welcome! Feel free to open an issue or send a pull request with improvements, bug fixes or new features.



