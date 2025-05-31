# 📚 Biblioteca Digital

Projeto desenvolvido em **.NET Core 9** e **Angular 19**, com estilização via **Tailwind CSS**, para gerenciar uma biblioteca de livros com funcionalidades completas de CRUD, busca, paginação e layout responsivo.

---

## 🚀 Tecnologias Utilizadas

- ✅ **Backend**: ASP.NET Core 9 (API REST)
- ✅ **Frontend**: Angular 19
- ✅ **Estilo**: Tailwind CSS
- ✅ **Banco de Dados**: SQL Server (ou outro configurável)
- ✅ **ORM**: Entity Framework Core com Code First
- ✅ **Testes**: xUnit, FluentAssertions, Bogus
- ✅ **Mensageria e Logs** (em progresso): envio de e-mails e log via MongoDB

---

## 📂 Estrutura do Projeto

### Backend (API)

- `API/`: Camada de apresentação (controllers)
- `Domain/`: Entidades e regras de negócio (DDD)
- `Infra/`: Camada de persistência (EF Core, repositórios)
- `Tests/`: Testes unitários e de integração

### Frontend (Angular)

- `src/app/`: Componentes, serviços e rotas
  - `livros/`: Lista, Formulário, Detalhes
  - `components/`: Navbar, layout
- `tailwind.config.js`: Configuração do Tailwind CSS

---

## ✅ Funcionalidades

- 📚 Cadastro de livros (título, autor, ano, gênero)
- 🔍 Busca por título
- 📄 Listagem com paginação
- ✏️ Edição e exclusão
- 📱 Layout responsivo com Tailwind

---

## 🛠️ Como executar

### Backend

```bash
cd backend
dotnet restore
dotnet ef database update
dotnet run

👨‍💻 Autor
Wellington Americano de Oliveira
Desenvolvedor Full Stack .NET & Angular
[LinkedIn](https://www.linkedin.com/in/wellington-de-oliveira-8100b139/)
