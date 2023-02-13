<script lang="ts">
  import { page } from "$app/stores";
  import { getContext, setContext } from "svelte";

  export let plan: [
    {
      date: string;
      closed: boolean;
    }
  ];

  export let date = plan[0].date;

  const formatDate = (date: string, type: "number" | "initial") => {
    const formatter =
      type === "number"
        ? new Intl.DateTimeFormat("de-DE", {
            day: "numeric",
          })
        : new Intl.DateTimeFormat("de-DE", {
            weekday: "narrow",
          });

    return formatter.format(new Date(date));
  };
</script>

<nav>
  {#each plan as day}
    <div>
      <p>{formatDate(day.date, "initial")}</p>
      <button
        on:click={() => (date = day.date)}
        class:selected={date === day.date}
        class:closed={day.closed}>{formatDate(day.date, "number")}</button
      >
    </div>
  {/each}
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    padding: 0 1rem;
    /* align-content: center; */
  }

  p {
    font-size: 0.75rem;
    text-align: center;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    aspect-ratio: 1;
    padding: 0;
    background: none;
    border: none;
    border-radius: 0.75em;
    font-size: 1.25rem;
    color: var(--text);
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }

  button.selected {
    background-color: var(--text);
    color: var(--background-primary);
  }
  nav :first-child button {
    color: red;
  }
  nav :first-child button.selected {
    background-color: red;
    color: white;
  }
</style>
