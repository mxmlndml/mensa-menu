<script>
  import { App } from "@mxmlndml/cupertino-components";
  import { dev } from "$app/environment";

  const title = (dev ? "DEV | " : "") + "Mensa-Menü";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<App dimmed>
  <slot />
</App>

<style>
  :global(*) {
    --theme: var(--red);
  }
</style>
