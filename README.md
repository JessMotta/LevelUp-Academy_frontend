# LevelUp-Academy Front-end

## Descrição

📌 A LevelUp-Academy é uma solução inovadora voltada para professores e alunos do ensino fundamental e médio. Desenvolvida para combater o baixo engajamento estudantil, a plataforma transforma a experiência educacional ao integrar elementos de gamificação ao processo de aprendizado.
Com um sistema de pontuação e recompensas, os alunos são incentivados a participar ativamente das atividades escolares, conquistando pontos de experiência e pontos de prestígio que podem ser trocados por benefícios acadêmicos. Além disso, a progressão por patentes garante um senso de evolução e reconhecimento, tornando o aprendizado mais dinâmico e envolvente.

🎯 Principais Funcionalidades:
- ✅ Acesso a disciplinas e atividades escolares
- ✅ Sistema de pontuação baseado em experiência e prestígio
- ✅ Progressão por patentes com benefícios exclusivos
- ✅ Loja de benefícios para incentivar o engajamento
- ✅ Redução do uso de papel, contribuindo para a sustentabilidade

## Tecnologias
- Next.js
- React.js
- Chadcn
- Tailwild

## Arquitetura de Diretórios
```bash
LevelUp-Academy/
├── .next/                     # Diretório gerado pelo Next.js
├── .vscode/                   # Configurações do VS Code
├── api/                       # Lógica de API e chamadas HTTP
│   ├── requests/              # Requisições específicas para a API
│   └── api.ts                 # Configuração central da API
├── app/                       # Estrutura principal da aplicação
│   ├── (private)/             # Rotas e páginas privadas
│   ├── globals.css            # Estilos globais
│   ├── layout.tsx             # Layout principal do projeto
│   ├── middleware.js          # Middleware para manipulação de requisições
│   └── page.tsx               # Página principal
├── components/                # Componentes reutilizáveis do frontend
│   ├── page-templates/        # Templates de página estruturados
│   └── ui/                    # Componentes de interface (botões, inputs, etc.)
├── config/                    # Arquivos de configuração
├── node_modules/              # Dependências do projeto
├── providers/                 # Provedores de contexto e estados globais
├── public/                    # Arquivos estáticos (imagens, ícones, fontes)
├── services/                  # Serviços e integração com backend
├── types/                     # Definições de tipos TypeScript
├── utils/                     # Funções utilitárias auxiliares
├── .gitignore                 # Arquivo de configuração do Git
├── eslint.config.mjs          # Configuração do ESLint
├── next-env.d.ts              # Configuração de ambiente do Next.js com TypeScript
├── next.config.ts             # Configuração do Next.js
├── package-lock.json          # Lockfile do npm
├── package.json               # Gerenciador de dependências do projeto
├── postcss.config.mjs         # Configuração do PostCSS
├── README.md                  # Documentação do projeto
├── tailwind.config.ts         # Configuração do Tailwind CSS
└── tsconfig.json              # Configuração do TypeScript
```

## Rotas
| Caminhos | Descrição
|-------| ---------
| `/` | Página de login
| `/aluno` | Página com salas do aluno
| `/aluno/disciplina/{disciplinaId}` | Página da disciplina aberta
| `/aluno/disciplina/{disciplinaId}/atividade/{atividadeId}}` | Página da atividade aberta
| `/aluno/disciplina/{beneficiosId}/beneficions/loja` | Página da loja de benefícios


## Como executar

### Preparando o back-end
❗❗❗**ATENÇÃO**❗❗❗

Antes de executar o front-end certifique-se de ter o projeto back-end rodando em sua máquina, para isso acesse o repositório do back-end [clicando aqui](https://github.com/JessMotta/LevelUp-Academy_backend) e siga o passo-a-passo para executar o projeto

### Preparando o front-end
1. Clone o repositório em sua máquina
```bash
git clone https://github.com/JessMotta/LevelUp-Academy_frontend.git
```
2. Acesse o diretório
```bash
cd LevelUp-Academy_frontend
```
3. Instale as dependências do projeto
```bash
npm install
```
4. Execute o projeto
```bash
npm run dev
```
