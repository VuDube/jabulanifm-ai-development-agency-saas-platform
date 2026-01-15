# JabulaniFM Platform

[cloudflarebutton]

A modern full-stack web application built with React, TypeScript, Tailwind CSS, and Cloudflare Workers. This template provides a production-ready setup for building scalable apps with a beautiful UI powered by shadcn/ui components, API routes via Hono, and seamless Cloudflare deployment.

## Features

- **React 18** with TypeScript for type-safe frontend development
- **shadcn/ui** component library with Tailwind CSS and Radix UI primitives
- **Cloudflare Workers** backend with Hono routing for API endpoints
- **React Router** and **TanStack Query** for routing and data fetching
- **Dark/Light theme** support with automatic system preference detection
- **Responsive design** with mobile-first approach
- **Error boundaries** and client-side error reporting
- **Production-optimized** build with Vite bundling
- **Sidebar layout** ready with collapsible navigation
- **Sonner** toasts for user feedback
- **Immer** and **Zustand** for state management (pre-configured)

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React, TypeScript, Vite, Tailwind CSS, shadcn/ui, Lucide React |
| **Routing & Data** | React Router, TanStack Query |
| **Backend** | Cloudflare Workers, Hono |
| **UI Components** | Radix UI, Headless UI, Framer Motion |
| **Utilities** | clsx, tailwind-merge, date-fns, Zod, UUID |
| **Dev Tools** | ESLint, Bun |
| **Deployment** | Cloudflare Pages & Workers (Wrangler) |

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd jabulanifm-platform-af_ibk5inr7w8xldultha
   ```

2. **Install dependencies** (using Bun)
   ```bash
   bun install
   ```

3. **Start development server**
   ```bash
   bun run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or your configured port).

## Development

### Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start Vite dev server with hot reload |
| `bun run build` | Build for production |
| `bun run lint` | Run ESLint |
| `bun run preview` | Preview production build locally |
| `bun run deploy` | Build and deploy to Cloudflare |

### Project Structure

```
├── src/              # React app source
│   ├── components/   # UI components (shadcn/ui + custom)
│   ├── pages/        # Page components
│   ├── hooks/        # Custom React hooks
│   └── lib/          # Utilities and shared logic
├── worker/           # Cloudflare Workers API routes
├── tailwind.config.js # Tailwind configuration
├── vite.config.ts    # Vite configuration
└── wrangler.jsonc    # Cloudflare deployment config
```

### Adding API Routes

Edit `worker/userRoutes.ts` and add routes to the `userRoutes` function:

```typescript
app.get('/api/test', (c) => c.json({ success: true, data: { name: 'this works' }}));
```

The worker automatically loads these routes for `/api/*` paths.

### Frontend Customization

- Replace `src/pages/HomePage.tsx` with your pages
- Update routing in `src/main.tsx`
- Add components to `src/components/`
- Use `AppLayout` from `src/components/layout/AppLayout.tsx` for sidebar layouts

## Environment Setup

Configure Cloudflare bindings in `wrangler.jsonc` if needed (KV, D1, R2, etc.). Run `bun run cf-typegen` to generate types.

## Deployment

1. **Install Wrangler** (Cloudflare CLI)
   ```bash
   bun add -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Deploy**
   ```bash
   bun run deploy
   ```

   This builds the frontend and deploys the Worker + assets to Cloudflare Pages.

For one-click deployment:

[cloudflarebutton]

**Note**: Ensure your `wrangler.jsonc` has the correct project name and bindings.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.