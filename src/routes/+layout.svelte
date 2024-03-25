<script>
    import { App } from "@mxmlndml/cupertino-components";
    import { browser, dev } from "$app/environment";

    const title = (dev ? "DEV | " : "") + "Mensa-Menü";

    if (browser) {
        const today = new Date();
        if (today.getMonth() == 2 && today.getDate() == 25) {
            alert("🎉 Happy Birthday notty!!! 🎉");
        }
    }
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
