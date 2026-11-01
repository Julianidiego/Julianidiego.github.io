# Portfolio y blog de Diego Juliani

Sitio personal estático construido con Next.js y exportado para GitHub Pages.

## Desarrollo local

```bash
npm ci
npm run dev
```

Para generar la versión estática:

```bash
npm run build
```

El proyecto publica el resultado de `out/`. El contenido exportado del sitio
también se mantiene en la raíz del repositorio porque GitHub Pages está
configurado para servir mediante GitHub Actions.

## Publicar una entrada

Las entradas viven en `content/blog/*.json`. Después de editar o crear una:

1. Crea o edita una entrada desde `/admin/`.
2. El CMS crea un commit en `content/blog/`.
3. GitHub Actions ejecuta el build y publica automáticamente GitHub Pages.

También existe un panel en `/admin/` basado en Decap CMS. Para que pueda
autenticarse con GitHub en producción hay que configurar un proveedor OAuth
seguro; nunca se debe colocar un token personal dentro del sitio público.
