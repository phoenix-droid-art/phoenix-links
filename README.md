# Phoenix - Escola de Inglês | Site de Links

Um site elegante e profissional tipo "linktree" para a Phoenix Escola de Inglês, com design moderno, formulário de matrícula e seção de patrocinadores.

## 🎨 Características

- **Design Elegante**: Fundo preto com degradê sutil e cor secundária #A70240
- **Logo Personalizada**: Logo SVG da Phoenix em destaque
- **Redes Sociais**: 5 plataformas (Instagram, Facebook, TikTok, LinkedIn, YouTube) com ícones redondos elegantes
- **Hover Phoenix**: Todos os ícones usam a cor #A70240 no hover com efeitos visuais sofisticados
- **Botão de Matrícula**: Modal interativo com formulário completo
- **15 Patrocinadores**: Seção otimizada para múltiplos patrocinadores
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Transições e efeitos modernos
- **UI Profissional**: Design clean e sofisticado

## 🚀 Como Usar

### 1. Instalar Dependências

```bash
npm install
```

### 2. Executar em Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

### 3. Build para Produção

```bash
npm run build
```

## 📝 Personalização

### Alterar Links das Redes Sociais

Edite o arquivo `src/App.jsx` na seção `socialLinks`:

```javascript
const socialLinks = [
  { 
    name: 'Instagram', 
    url: 'https://instagram.com/seuperfil', // ← Altere aqui
    icon: Instagram,
    color: 'hover:bg-phoenix-red' // Cor #A70240 no hover
  },
  { 
    name: 'TikTok', 
    url: 'https://tiktok.com/@seuusuario', // ← TikTok incluído
    icon: TikTok,
    color: 'hover:bg-phoenix-red'
  },
  // ... outras redes sociais
]
```

### Adicionar/Editar Patrocinadores

Edite a seção `sponsors` (agora com 15 patrocinadores por padrão):

```javascript
const sponsors = [
  { 
    name: 'Nome do Patrocinador', 
    logo: 'URL_DA_LOGO_AQUI' // ← Cole a URL ou caminho da logo
  },
  // Adicione mais patrocinadores aqui
]
```

### Adicionar Logo da Phoenix

1. Coloque a logo na pasta `public/` (exemplo: `public/phoenix-logo.png`)
2. No `src/App.jsx`, procure a seção do logo e substitua o ícone:

```javascript
{/* Substitua o ícone GraduationCap por: */}
<img src="/phoenix-logo.png" alt="Phoenix" className="w-20 h-20" />
```

## 🔧 Configuração do Formulário

Por padrão, o formulário simula o envio. Para conectar com um backend real:

1. Abra `src/App.jsx`
2. Procure a função `handleSubmit`
3. Substitua a simulação por uma chamada API real:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    // Sua chamada API aqui
    const response = await fetch('SUA_API_URL', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      setIsSuccess(true)
    }
  } catch (error) {
    console.error('Erro ao enviar:', error)
  } finally {
    setIsSubmitting(false)
  }
}
```

## 🎨 Cores

- **Primária (Fundo)**: Preto com degradê (#000000)
- **Secundária**: #A70240 (Vermelho Phoenix)
- **Acentos**: Cinzas escuros (#zinc-900, #zinc-800)

## 📱 Tecnologias Utilizadas

- **React 18**: Framework JavaScript
- **Vite**: Build tool rápido
- **Tailwind CSS**: Estilização utility-first
- **Lucide React**: Ícones modernos
- **Framer Motion**: Animações (opcional)

## 📄 Estrutura de Arquivos

```
phoenix-links/
├── public/              # Arquivos estáticos
├── src/
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Entry point
│   └── index.css       # Estilos globais
├── index.html          # HTML base
├── package.json        # Dependências
├── tailwind.config.js  # Configuração Tailwind
└── vite.config.js      # Configuração Vite
```

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Faça upload da pasta 'dist'
```

---

**Phoenix - Escola de Inglês** | Transformando vidas através da educação 🎓
