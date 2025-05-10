import express from 'express';
import tableRoutes from './routes/tableRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/tables', tableRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});