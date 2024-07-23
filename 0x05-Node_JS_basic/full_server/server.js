import express from 'express';
import mapRoute from './routes';

const app = express();
const port = 1245;

mapRoute(app);
app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});

export default app;
module.exports = app;
