<svelte:head>
  <meta name="color-scheme" content="dark light" />
  <link rel="stylesheet" href="global.css" />
  <title>Mensa Menu</title>
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
