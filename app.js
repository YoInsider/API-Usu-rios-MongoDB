import express from 'express';
import main from './src/db/db.js';
import router from './src/routes/routes.js';

const app = express();
app.use(express.json());
app.use(router);
main();

app.listen(3000, function () {
    console.log("Servidor online!");
});