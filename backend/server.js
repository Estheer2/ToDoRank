const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Lista de tarefas (em memória)
let tasks = [];

/* ---------------------- ROTAS ---------------------- */

// Criar nova tarefa
app.post("/tasks", (req, res) => {
  const task = {
    id: Date.now(),
    name: req.body.name,
    priority: req.body.priority,
    completed: false
  };
  tasks.push(task);
  res.json({ success: true, task });
});

// Listar tarefas
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Atualizar tarefa (concluir)
app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  tasks = tasks.map(t =>
    t.id === id
      ? { ...t, ...req.body }  
      : t
  );

  res.json({ updated: true });
});

// Excluir tarefa
app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.json({ deleted: true });
});

/* ---------------------- RANKING ---------------------- */

// Ranking sem duplicação e ordenado por prioridade
app.get("/rank", (req, res) => {

  // remove duplicatas pelo ID
  const unique = [];
  tasks.forEach(t => {
    if (!unique.some(u => u.id === t.id)) {
      unique.push(t);
    }
  });

  // ordenação decrescente pela prioridade
  const sorted = unique.sort((a, b) => Number(b.priority) - Number(a.priority));

  res.json(sorted);
});

/* ---------------------- START SERVER ---------------------- */

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

