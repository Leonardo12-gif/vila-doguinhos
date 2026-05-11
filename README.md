# Vila Doguinho's — Link da Bio

Link da bio profissional da Vila Doguinho's (creche e hotel pet na Mooca, SP), construído com **TanStack Start + React 19 + Vite 7 + Tailwind CSS v4**.

## Desenvolvimento local

```bash
bun install      # ou: npm install
bun run dev      # sobe em http://localhost:8080
```

Build de produção:

```bash
bun run build
```

## Subir para o GitHub

A forma mais rápida é usar a integração nativa do Lovable:

1. No editor, clique em **+ (Plus) → GitHub → Connect project**.
2. Autorize o app do Lovable e escolha a conta/organização.
3. Clique em **Create Repository** — o Lovable cria o repositório e mantém um sync bidirecional automático.

Se preferir manualmente, baixe o código (Code Editor → **Download codebase**) e faça push para um repo novo:

```bash
git init
git remote add origin https://github.com/<seu-usuario>/<repo>.git
git add .
git commit -m "first commit"
git push -u origin main
```

## Deploy

> **Importante:** este projeto está configurado para rodar em **Cloudflare Workers** (ver `wrangler.jsonc` e o preset `@lovable.dev/vite-tanstack-config`). Os caminhos abaixo cobrem as opções recomendadas.

### Opção 1 — Publicar pelo Lovable (mais simples)

Clique em **Publish** no canto superior direito do editor. Sua app vai ao ar em `https://<seu-projeto>.lovable.app` e você pode conectar um domínio próprio em **Project Settings → Domains**.

### Opção 2 — Cloudflare Workers (a partir do GitHub)

1. Conecte o repositório em [Cloudflare → Workers & Pages → Create → Connect to Git](https://dash.cloudflare.com/).
2. Framework preset: **None** (o `wrangler.jsonc` já cuida da config).
3. Build command: `bun run build`
4. Deploy command: `bunx wrangler deploy`

### Opção 3 — Vercel

A Vercel detecta projetos Vite automaticamente, mas como este projeto usa SSR via TanStack Start no runtime Cloudflare, o caminho indicado é gerar um build estático ou seguir as opções 1/2 acima. Se mesmo assim quiser publicar na Vercel:

1. Importe o repositório em [vercel.com/new](https://vercel.com/new).
2. Framework Preset: **Vite**.
3. Build Command: `bun run build`
4. Output Directory: `dist`
5. Install Command: `bun install`

Variáveis de ambiente (se houver) devem ser cadastradas em **Project Settings → Environment Variables** na Vercel.

## Stack

- TanStack Start v1 (file-based routing em `src/routes/`)
- React 19 + TypeScript
- Tailwind CSS v4 (tokens em `src/styles.css`)
- shadcn/ui + lucide-react
- Vite 7

## Estrutura

```
src/
  assets/         # logo e imagens
  components/ui/  # componentes shadcn
  routes/         # rotas (index.tsx é a home)
  styles.css      # tokens de design (light + dark)
```

---

Desenvolvido por [Frezza Marketing](https://www.frezamarketing.com.br).
