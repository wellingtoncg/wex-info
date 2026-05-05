/**
 * prerender.mjs
 * Script de pré-renderização estática (SSG) para Vite + React.
 * Gera HTML pré-renderizado para cada rota, melhorando a indexação pelo Googlebot.
 *
 * Uso: executado automaticamente após `vite build` pelo script `build:ssg`.
 * Requer que o servidor SSR tenha sido buildado em dist/server/entry-server.js
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Rotas a serem pré-renderizadas
const routesToPrerender = ['/', '/aluguel-impressoras', '/politica-de-privacidade', '/empresas'];

async function prerender() {
  const distDir = path.resolve(__dirname, 'dist');
  const clientDir = path.resolve(distDir, 'client');
  const serverDir = path.resolve(distDir, 'server');

  // Lê o template HTML gerado pelo build do cliente
  const templatePath = path.resolve(clientDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('❌  dist/client/index.html não encontrado. Execute vite build primeiro.');
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, 'utf-8');

  // Importa o módulo SSR buildado usando URL file:// (compatível cross-platform)
  const serverEntryPath = path.resolve(serverDir, 'entry-server.js');
  if (!fs.existsSync(serverEntryPath)) {
    console.error('❌  dist/server/entry-server.js não encontrado. Execute vite build --ssr primeiro.');
    process.exit(1);
  }
  
  const serverEntryUrl = pathToFileURL(serverEntryPath);
  const { render } = await import(serverEntryUrl.href);

  for (const url of routesToPrerender) {
    try {
      const { html: appHtml } = render(url);

      // Injeta o HTML renderizado no template
      const finalHtml = template.replace('<!--app-html-->', appHtml);

      // Define o caminho de saída
      const routePath = url === '/' ? '/index.html' : `${url}/index.html`;
      const outPath = path.resolve(clientDir, routePath.slice(1));

      // Cria diretórios se necessário
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, finalHtml, 'utf-8');

      console.log(`✅  Pré-renderizado: ${url} → ${path.relative(distDir, outPath)}`);
    } catch (err) {
      console.error(`❌  Erro ao pré-renderizar ${url}:`, err);
    }
  }

  console.log('\n🎉  Pré-renderização concluída!');
}

prerender();
