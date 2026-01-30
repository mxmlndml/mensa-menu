<script>
    import { App } from "@mxmlndml/cupertino-components";
    import { browser, dev } from "$app/environment";

    const title = (dev ? "DEV | " : "") + "Mensa-Menü";

    if (browser) {
        const today = new Date();
        if (today.getMonth() === 2 && today.getDate() === 25) {
            alert("🎉 Happy Birthday notty!!! 🎉");
        }
        if (today.getMonth() === 3 && today.getDate() === 1) {
            alert("April April 🤣\n(Die Latenz wird nie repariert werden muhahahahha)")
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
