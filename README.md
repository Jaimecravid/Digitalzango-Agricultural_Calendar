> 🚧 **Status**: Visual improvements and UI enhancements currently in progress
# Calendário Agrícola para Angola

Uma aplicação web progressiva (PWA) completa para planeamento e gestão agrícola, especialmente desenvolvida para agricultores angolanos.

## 🌟 Características Principais

### 📱 Multi-idioma
- **6 idiomas suportados**: Português, Inglês, Kimbundo, Umbundo, Kikongo, Kikonko
- Mudança de idioma em tempo real
- Interface adaptada para cada idioma

### 🗺️ Regionalização
- **6 regiões de Angola**: Luanda, Benguela, Huambo, Bié, Malanje, Uíge
- Calendário agrícola adaptado às condições climáticas locais
- Recomendações específicas por região

### 📅 Calendário Agrícola Inteligente
- Planeamento de actividades por mês e estação
- Alertas automáticos baseados na região e época
- Visualização clara de tarefas diárias
- Integração com condições meteorológicas

### 🌤️ Integração Meteorológica Completa
- Condições meteorológicas actuais
- Previsão de 7 dias
- Alertas meteorológicos
- Recomendações agrícolas baseadas no tempo
- Dados de temperatura, humidade, vento e precipitação

### 🌱 Gestão de Culturas
- Base de dados de culturas adaptadas a Angola
- Planeamento de plantio e colheita
- Rotação de culturas
- Variedades recomendadas por região
- Cálculo automático de datas de colheita

### 📦 Gestão de Recursos
- Inventário de sementes, fertilizantes e equipamentos
- Controlo de stock e alertas de reposição
- Gestão de custos e fornecedores
- Rastreamento de datas de validade

### 🐛 Sistema de Alertas de Pragas
- Base de dados completa de pragas e doenças
- Sintomas, prevenção e tratamentos
- Alertas regionais em tempo real
- Informações específicas por cultura

### 📝 Registo de Actividades
- Log completo de actividades agrícolas
- Controlo de custos e tempo
- Gestão de mão-de-obra e equipamentos
- Relatórios e estatísticas

### 👥 Funcionalidades Cooperativas
- Chat em tempo real entre agricultores
- Partilha de recursos e equipamentos
- Planeamento conjunto de actividades
- Rede de apoio entre membros

### 📱 PWA (Progressive Web App)
- Instalação como app nativa
- Funcionamento offline
- Notificações push
- Interface responsiva para mobile e desktop

## 🛠️ Tecnologias Utilizadas

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Estado**: React Context API
- **Armazenamento**: LocalStorage (compatível com V0dev)
- **PWA**: Service Workers, Web App Manifest
- **Ícones**: Lucide React

## 🚀 Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos de Instalação

1. **Clone o repositório**
\`\`\`bash
git clone https://github.com/seu-usuario/calendario-agricola-angola.git
cd calendario-agricola-angola
\`\`\`

2. **Instale as dependências**
\`\`\`bash
npm install
# ou
yarn install
\`\`\`

3. **Configure as variáveis de ambiente**
\`\`\`bash
cp .env.example .env.local
\`\`\`

Edite o arquivo `.env.local` com suas configurações:
\`\`\`env
# API de Meteorologia (opcional - usa dados simulados se não configurado)
WEATHER_API_KEY=sua_chave_api
WEATHER_API_URL=https://api.openweathermap.org/data/2.5

# Configurações da aplicação
NEXT_PUBLIC_APP_URL=http://localhost:3000
\`\`\`

4. **Execute em modo de desenvolvimento**
\`\`\`bash
npm run dev
# ou
yarn dev
\`\`\`

5. **Acesse a aplicação**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📱 Instalação como PWA

### No Desktop (Chrome/Edge)
1. Abra a aplicação no navegador
2. Clique no ícone de instalação na barra de endereços
3. Confirme a instalação

### No Mobile (Android/iOS)
1. Abra a aplicação no navegador
2. Toque no menu do navegador
3. Seleccione "Adicionar ao ecrã inicial"
4. Confirme a instalação

## 🏗️ Estrutura do Projecto

\`\`\`
calendario-agricola-angola/
├── app/
│   ├── components/          # Componentes React
│   │   ├── calendar-view.tsx
│   │   ├── weather-widget.tsx
│   │   ├── crop-planner.tsx
│   │   ├── resource-manager.tsx
│   │   ├── pest-alerts.tsx
│   │   ├── activity-logger.tsx
│   │   └── cooperative-features.tsx
│   ├── contexts/           # Contextos React
│   │   ├── language-context.tsx
│   │   ├── region-context.tsx
│   │   └── weather-context.tsx
│   ├── globals.css         # Estilos globais
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx           # Página inicial
│   └── manifest.json      # Manifesto PWA
├── public/                # Arquivos estáticos
│   ├── icons/            # Ícones da PWA
│   └── images/           # Imagens
├── components/ui/         # Componentes shadcn/ui
├── lib/                  # Utilitários
├── README.md
├── package.json
└── tailwind.config.js
\`\`\`

## 🔧 Desenvolvimento

### Comandos Disponíveis

\`\`\`bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm run start

# Linting
npm run lint

# Verificação de tipos
npm run type-check
\`\`\`

### Adicionando Novas Funcionalidades

1. **Novos Componentes**
   - Crie em `app/components/`
   - Siga o padrão de nomenclatura kebab-case
   - Use TypeScript e interfaces bem definidas

2. **Novos Contextos**
   - Adicione em `app/contexts/`
   - Implemente provider e hook personalizado
   - Mantenha estado no localStorage quando necessário

3. **Novas Traduções**
   - Edite `app/contexts/language-context.tsx`
   - Adicione chaves para todos os idiomas suportados
   - Use a função `t()` nos componentes

## 🌍 Internacionalização

### Idiomas Suportados
- **pt**: Português (padrão)
- **en**: Inglês
- **kmb**: Kimbundo
- **umb**: Umbundo
- **kg**: Kikongo
- **kik**: Kikonko

### Adicionando Novas Traduções
1. Edite `language-context.tsx`
2. Adicione as traduções no objecto `translations`
3. Use a função `t('chave')` nos componentes

## 🗺️ Regiões Suportadas

- **Luanda**: Clima semi-árido, época chuvosa Out-Abr
- **Benguela**: Clima semi-árido, época chuvosa Nov-Mar
- **Huambo**: Clima tropical de altitude, época chuvosa Out-Abr
- **Bié**: Clima tropical de altitude, época chuvosa Out-Abr
- **Malanje**: Clima tropical húmido, época chuvosa Set-Mai
- **Uíge**: Clima tropical húmido, época chuvosa Set-Mai

## 📊 Base de Dados

### Culturas Suportadas
- Milho (variedades: Branco, Amarelo, Híbrido)
- Feijão (variedades: Comum, Frade, Manteiga)
- Mandioca (variedades: Doce
