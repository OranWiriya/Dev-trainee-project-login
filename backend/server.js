const express = require('express');
const cors = require('cors');
const db = require('./models');
const app = express();
const userRoutes = require('./routes/User')

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use("/users",userRoutes)

db.sequelize.sync({ force: false }).then(() => {
  app.listen(8000, () => {
    console.log('Server is running at port 8000');
  });
});
