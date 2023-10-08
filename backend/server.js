require('dotenv').config();
const app = require('./app');
const { db } = require('./Database/bd');

//AUTENTICACIÓN CON LA BASE DE DATOS
db.authenticate()
  .then(() =>
    console.log('Database Authenticated!')
  )
  .catch((error) => console.log(error));

//SINCRONIZACIÓN CON LA BASE DE DATOS
db.sync()
  .then(() => console.log('Database is synced!'))
  .catch((error) => console.log(error));

const port = +process.env.PORT || 3200;
app.listen(port, () => {
  console.log(`App Running on port ${port}`);
});
