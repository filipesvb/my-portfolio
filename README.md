# Filipe Vilas Bôas - Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![i18next](https://img.shields.io/badge/i18next-25.6-26A69A?style=for-the-badge&logo=i18next&logoColor=white)

[English](#english) | [Português](#português)

</div>

---

## English

### About

A modern, responsive personal portfolio website built with React and Vite. Features a clean, professional design with smooth animations and full internationalization support (English and Portuguese).

### Features

- **Modern Tech Stack** - Built with React 19, Vite 7, and Tailwind CSS 4
- **Internationalization** - Full support for English and Portuguese using i18next
- **Responsive Design** - Optimized for all screen sizes and devices
- **Fast Performance** - Lightning-fast development and production builds with Vite
- **Clean Architecture** - Well-organized component structure for easy maintenance

### Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI Framework |
| Vite 7 | Build Tool & Dev Server |
| Tailwind CSS 4 | Styling |
| React Router 7 | Navigation |
| i18next | Internationalization |

### Project Structure

```
├── public/
│   └── locales/           # Translation files
│       ├── en/
│       │   └── translation.json
│       └── pt/
│           └── translation.json
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header/
│   │   ├── LanguageSelect/
│   │   ├── Wrapper/
│   │   └── icons/
│   ├── pages/             # Page components
│   │   └── Home/
│   ├── i18n.js           # i18next configuration
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
├── index.html
├── package.json
└── vite.config.js
```

### Getting Started

#### Prerequisites

- Node.js 18+ 
- npm or yarn

#### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at `http://localhost:5000`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

### Adding Translations

To add or modify translations, edit the JSON files in `public/locales/`:

- `public/locales/en/translation.json` - English translations
- `public/locales/pt/translation.json` - Portuguese translations

---

## Português

### Sobre

Um site de portfólio pessoal moderno e responsivo, construído com React e Vite. Apresenta um design limpo e profissional com animações suaves e suporte completo à internacionalização (Inglês e Português).

### Funcionalidades

- **Stack Moderna** - Construído com React 19, Vite 7 e Tailwind CSS 4
- **Internacionalização** - Suporte completo para Inglês e Português usando i18next
- **Design Responsivo** - Otimizado para todos os tamanhos de tela e dispositivos
- **Alta Performance** - Builds de desenvolvimento e produção ultra-rápidos com Vite
- **Arquitetura Limpa** - Estrutura de componentes bem organizada para fácil manutenção

### Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| React 19 | Framework UI |
| Vite 7 | Ferramenta de Build e Servidor Dev |
| Tailwind CSS 4 | Estilização |
| React Router 7 | Navegação |
| i18next | Internacionalização |

### Estrutura do Projeto

```
├── public/
│   └── locales/           # Arquivos de tradução
│       ├── en/
│       │   └── translation.json
│       └── pt/
│           └── translation.json
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Header/
│   │   ├── LanguageSelect/
│   │   ├── Wrapper/
│   │   └── icons/
│   ├── pages/             # Componentes de página
│   │   └── Home/
│   ├── i18n.js           # Configuração do i18next
│   ├── index.css         # Estilos globais
│   └── main.jsx          # Ponto de entrada da aplicação
├── index.html
├── package.json
└── vite.config.js
```

### Como Começar

#### Pré-requisitos

- Node.js 18+
- npm ou yarn

#### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador em `http://localhost:5000`

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build para produção |
| `npm run preview` | Pré-visualiza build de produção |
| `npm run lint` | Executa o ESLint |

### Adicionando Traduções

Para adicionar ou modificar traduções, edite os arquivos JSON em `public/locales/`:

- `public/locales/en/translation.json` - Traduções em Inglês
- `public/locales/pt/translation.json` - Traduções em Português

---

<div align="center">

### License / Licença

MIT License - Feel free to use this project as a template for your own portfolio.

MIT License - Sinta-se à vontade para usar este projeto como template para seu próprio portfólio.

---

Made with ❤️ by Filipe Vilas Bôas

</div>
