<script>
  import { App } from "@mxmlndml/cupertino-components";
</script>

<App dimmed>
  <slot />
</App>

<style>
  :global(*) {
    --theme: var(--red);
  }
</style>
