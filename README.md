# 📌 ToDoRank – Aplicação Web de Lista de Tarefas com Ranking por Prioridade

Este projeto foi desenvolvido para a disciplina **Algoritmos e Complexidade em Aplicações Web/Mobile**, seguindo o roteiro oficial do professor.  
A aplicação permite **cadastrar tarefas, marcá-las como concluídas, excluir e visualizar um ranking ordenado pela prioridade**.

---

# 🌐 Links do Projeto

### 🔗 **Site (Frontend) — hospedado no Netlify**
👉 https://todorank-frontend.netlify.app/

Esse é o link que deve ser usado para **apresentação e demonstração**.

### 🔗 **Backend (API) — hospedado no Render**
👉 https://todorank.onrender.com

O frontend já está configurado para consumir automaticamente essa API.

---

# 📂 1. Tecnologias Utilizadas

### **Frontend**
- HTML5  
- CSS3  
- JavaScript (DOM, eventos, Fetch API)

### **Backend**
- Node.js  
- Express.js  
- CORS

### **Banco de Dados**
- Estrutura em **array de objetos (em memória)**

---

# 🧠 2. Estruturas de Dados Utilizadas

A aplicação utiliza principalmente:

### ✔ **Array**

```js
let tasks = [];
Cada tarefa possui o formato:

js
Copiar código
{
  id: Number,
  name: String,
  priority: Number,
  completed: Boolean
}
Por que Array?

Inserção O(1)

Filtragem simples

Fácil ordenação

Fácil manipulação

🧮 3. Análise de Algoritmos e Complexidade
3.1 Inserção de tarefas
js
Copiar código
tasks.push(task);
Melhor caso: O(1)

Médio: O(1)

Pior: O(1)
Inserção sempre no final da lista.

3.2 Exclusão de tarefas
js
Copiar código
tasks = tasks.filter(t => t.id !== id);
Melhor caso: O(n)

Médio: O(n)

Pior: O(n)
A filtragem percorre toda a lista.

3.3 Marcar tarefa como concluída
js
Copiar código
tasks.map(...)
Todos os casos: O(n)

3.4 Geração do Ranking
js
Copiar código
unique.sort((a, b) => b.priority - a.priority);
O JavaScript usa TimSort:

Melhor: O(n)

Médio: O(n log n)

Pior: O(n log n)

3.5 Remoção de duplicatas
js
Copiar código
unique.some(...)
Complexidade total: O(n²)
(Como são poucas tarefas, não afeta o desempenho.)

📊 4. Endpoints da API
Método	Rota	Descrição
POST	/tasks	Adiciona tarefa
GET	/tasks	Lista todas as tarefas
PUT	/tasks/:id	Marca como concluída
DELETE	/tasks/:id	Exclui tarefa
GET	/rank	Retorna ranking por prioridade

🛠 5. Como Rodar o Projeto Localmente
✔ Passo 1 — Baixar o projeto
Certifique-se de que tem as pastas:

bash
Copiar código
/backend
/frontend
✔ Passo 2 — Instalar dependências
No terminal:

bash
Copiar código
cd backend
npm install
✔ Passo 3 — Rodar o backend
bash
Copiar código
node server.js
O servidor iniciará em:

👉 http://localhost:3000

✔ Passo 4 — Rodar o frontend
Abra o arquivo:

bash
Copiar código
frontend/index.html
no navegador.

🟣 6. Funcionalidades
✔ Adicionar tarefas
✔ Listar tarefas
✔ Concluir tarefa (tarefa riscada)
✔ Excluir tarefa
✔ Ranking de prioridades
✔ Remoção automática de duplicatas
✔ Layout violeta estilizado

💜 7. Frase motivacional
“Organizar suas tarefas é o primeiro passo para organizar sua vida.”

