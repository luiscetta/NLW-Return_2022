import { routes } from './routes';
import cors from 'cors';
import express from 'express';

const app = express();

// GET = Buscar informações
// POST = Cadastrar informações
// PUT = Atualizando informações de uma entidade
// PATCH = Atualizando informa de uma única entidade
// DELETE = Deletar uma informação

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('HTTP server running!')
});