# 📸 Photo Gallery

## 📝 Sobre o Projeto
O **Photo Gallery** é uma aplicação fullstack desenvolvida para gerenciar um álbum de fotos. Permite adicionar, visualizar, editar e deletar fotos. Desenvolvida com Node.js, Express, Sequelize, MySQL e interface com Handlebars, Bootstrap e CSS.


## 💻 Interface do Usuário
A interface foi projetada para ser simples e amigável. Ao acessar o site, o usuário será apresentado à página principal, onde as fotos serão exibidas como cards, com título e botões para editar ou excluir. Há também um botão "Adicionar Foto", que direciona o usuário para um formulário para adicionar novas imagens. O layout é limpo, com navegação fácil e responsiva, permitindo que o usuário acesse as funcionalidades de forma rápida e sem complicação.


## ⚙️ Funcionalidades
1. Listar fotos existentes.
2. Adicionar novas fotos com título e imagem.
3. Editar título e/ou imagem de fotos já cadastradas.
4. Excluir fotos do banco de dados e remover os arquivos correspondentes do servidor.


## 🛠️ Tecnologias Utilizadas
- **Backend:** Node.js com Express
- **Banco de Dados:** MySQL
- **Frontend:** Handlebars
- **Estilo:** Bootstrap e CSS customizado
- **Upload de Arquivos:** Multer


## 🌐 Endpoints
- GET /photos – Exibe todas as fotos.
- GET /photos/add – Exibe o formulário para adicionar uma nova foto.
- POST /photos/add – Adiciona uma nova foto ao banco de dados.
- GET /photos/edit/:id – Exibe o formulário para editar uma foto existente.
- POST /photos/edit/:id – Atualiza as informações de uma foto.
- GET /photos/delete/:id – Remove uma foto do banco de dados e do sistema de arquivos.


## ⚙️ Configuração e Instalação
1. Clone este repositório:
   ```bash
   git clone https://github.com/grasieletinoco/photo-gallery-app.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   NODE_ENV=development
   DB_NAME=photogallery
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_HOST=localhost
   DB_DIALECT=mysql
   DB_PORT=3306
   ```

4. Execute o servidor:
   ```bash
   npm start
   ```

5. Acesse a aplicação em `http://localhost:3000`.


## 🚀 Uso
- **Adicionar Fotos:** Clique no botão "Adicionar Foto", preencha o formulário e envie.
- **Editar Fotos:** Use o botão "Editar" em um card para alterar título ou imagem.
- **Excluir Fotos:** Clique no botão "Excluir" em um card para removê-lo.


## 👥 Público-Alvo
- **Fotógrafos:** Profissionais ou amadores que desejam gerenciar suas coleções de fotos de maneira organizada.
- **Usuários comuns:** Pessoas que querem manter uma galeria pessoal de fotos, com a opção de editar e excluir imagens quando necessário.
- **Empresas de design ou marketing:** Que precisam de uma plataforma simples para gerenciar suas imagens de maneira eficiente.
