import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json()); // Permite recibir datos en formato JSON

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
