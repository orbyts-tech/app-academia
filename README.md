# F Fit Academia — PWA Protótipo

App web instalável da **F Fit Academia** com todas as funcionalidades mockadas e interativas (sem backend).

## Funcionalidades (mock)

| Tela | O que funciona |
|------|----------------|
| **Splash / Onboarding** | Animação inicial → tour → login |
| **Login** | Entrar, Wellhub, TotalPass, recuperar senha (alert) |
| **Início** | Check-in simulado (QR lê em ~2,4s), atalhos para aulas/treino |
| **Aulas** | Agendar/cancelar aulas por dia da semana |
| **Treino** | Marcar exercícios, trocar treino A/B/C, iniciar treino |
| **Evolução** | Gráficos de frequência e cargas (dados fixos) |
| **Planos** | Ver plano atual, selecionar outros planos |
| **Perfil** | Stats, menu de configurações, logout |

Usuário demo: **Carlos Silva**

## Rodar no navegador

```bash
npm install
npm start
```

Abra: **http://localhost:3456**

### Atalhos

- `?demo=1` — pula splash/onboarding e vai direto ao login  
  Ex.: http://localhost:3456/?demo=1

## Visualização web (desktop)

Em telas ≥ 1024px o app se adapta automaticamente:

- Layout expandido (até 1280px)
- Navegação lateral em vez de barra inferior
- Banner indicando protótipo com dados fictícios
- Relógio real na barra superior

No mobile continua com aparência de app nativo em tela cheia.

## Publicar

Arraste a pasta inteira no [Netlify Drop](https://app.netlify.com/drop) ou use qualquer host estático com HTTPS.

## Estrutura

```
index.html          # entrada
app.js              # React bundle (protótipo)
web.css             # adaptação responsiva desktop
web.js              # banner demo, relógio, service worker
sw.js               # cache offline (PWA)
manifest.webmanifest
```
