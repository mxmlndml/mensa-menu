<svelte:head>
  <meta name="color-scheme" content="dark light" />
  <meta
    name="theme-color"
    media="(prefers-color-scheme: light)"
    content="#f2f2f6"
  />
  <meta
    name="theme-color"
    media="(prefers-color-scheme: dark)"
    content="black"
  />
  <link rel="stylesheet" href="global.css" />
  <title>Mensa-Menü</title>
</svelte:head>

<main>
  <slot />
</main>

<style>
  main {
    max-width: 800px;
    padding: 2rem 1rem;
    margin: 0 auto;
  }
</style>
