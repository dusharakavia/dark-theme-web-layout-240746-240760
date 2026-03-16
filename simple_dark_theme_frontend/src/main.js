import './style.css'

/**
 * Vite Vanilla JS app entry.
 * Renders a dark-theme UI skeleton (header + main content + card + buttons)
 * and relies on CSS design tokens for theming.
 */
function renderApp() {
  const app = document.querySelector('#app')
  if (!app) return

  app.innerHTML = `
    <div class="app-shell">
      <header class="app-header">
        <div class="header-inner">
          <div class="brand" aria-label="App name">
            <span class="brand-mark" aria-hidden="true"></span>
            <span class="brand-name">Dark UI Starter</span>
          </div>

          <nav class="header-actions" aria-label="Header actions">
            <a class="link" href="https://vite.dev" target="_blank" rel="noreferrer">Vite</a>
            <a class="link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">Vanilla JS</a>
          </nav>
        </div>
      </header>

      <main class="app-main" role="main">
        <section class="content">
          <div class="hero">
            <h1 class="title">Theme-ready dark mode UI</h1>
            <p class="subtitle">
              A simple layout with a header, main content, a card, and a small set of buttons—powered by CSS tokens.
            </p>

            <div class="button-row" role="group" aria-label="Primary actions">
              <button class="btn btn-primary" type="button" id="primaryAction">Primary</button>
              <button class="btn btn-secondary" type="button" id="secondaryAction">Secondary</button>
              <button class="btn btn-ghost" type="button" id="ghostAction">Ghost</button>
            </div>
          </div>

          <article class="card" aria-labelledby="cardTitle">
            <div class="card-header">
              <h2 class="card-title" id="cardTitle">Card</h2>
              <span class="badge" aria-label="Status badge">Dark</span>
            </div>

            <p class="card-body">
              This card uses elevated surface colors, subtle borders, and readable text contrast. Swap token values to
              theme globally.
            </p>

            <div class="card-footer">
              <button class="btn btn-small btn-secondary" type="button" id="cardAction">Card action</button>
              <button class="btn btn-small btn-ghost" type="button" id="cardDismiss">Dismiss</button>
            </div>
          </article>
        </section>
      </main>

      <footer class="app-footer">
        <p class="footer-text">
          Built with Vite · Tokenized CSS · Accessible structure
        </p>
      </footer>
    </div>
  `

  // Minimal behavior (no framework): demonstrate interactivity.
  const primary = document.querySelector('#primaryAction')
  const secondary = document.querySelector('#secondaryAction')
  const ghost = document.querySelector('#ghostAction')
  const cardAction = document.querySelector('#cardAction')
  const cardDismiss = document.querySelector('#cardDismiss')

  const toastHost = ensureToastHost()

  primary?.addEventListener('click', () => showToast(toastHost, 'Primary action clicked'))
  secondary?.addEventListener('click', () => showToast(toastHost, 'Secondary action clicked'))
  ghost?.addEventListener('click', () => showToast(toastHost, 'Ghost action clicked'))
  cardAction?.addEventListener('click', () => showToast(toastHost, 'Card action clicked'))
  cardDismiss?.addEventListener('click', () => showToast(toastHost, 'Dismissed'))
}

/**
 * Creates (or returns) a small toast host region for non-blocking UI feedback.
 * Kept intentionally tiny and dependency-free.
 */
function ensureToastHost() {
  let host = document.querySelector('[data-toast-host="true"]')
  if (host) return host

  host = document.createElement('div')
  host.setAttribute('data-toast-host', 'true')
  host.setAttribute('aria-live', 'polite')
  host.setAttribute('aria-relevant', 'additions')
  host.className = 'toast-host'
  document.body.appendChild(host)
  return host
}

/**
 * Displays a simple toast message (auto-dismiss).
 */
function showToast(host, message) {
  const toast = document.createElement('div')
  toast.className = 'toast'
  toast.textContent = message
  host.appendChild(toast)

  // Animate in on next frame
  globalThis.requestAnimationFrame(() => toast.classList.add('is-visible'))

  globalThis.setTimeout(() => {
    toast.classList.remove('is-visible')
    globalThis.setTimeout(() => toast.remove(), 180)
  }, 1600)
}

renderApp()
