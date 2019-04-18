# youa.dev

> A network hub for developers. From developers.

---

### Setup:

> You will have to install Postgres on your system and run a local database, which you will have to link within the `.env` file.

> PostgreSQL Download: [https://www.postgresql.org/download/](https://www.postgresql.org/download/)

> Also, you will need to install all the necessary Node modules via NPM.

> You can run `npm run prep` to avoid having to change directories to install the modules for the client separately.

---

### Environmental Variables:

> The `.env.example` file provides all the necessary variables required for running the application.

> You are required to create your own `.env` file in the root directory and provide your own information.

---

### Scripts:

- `npm start` - Runs both the Node and React server concurrently.

- `npm run client` - Runs the React development server.

- `npm run server` - Runs the Node server.

- `npm run prep` - Installs dependencies for the server and React.
