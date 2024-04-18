<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let plan: [
    {
      date: string;
      closed: boolean;
    }
  ];

  export let date = plan[0].date;

  const dispatch = createEventDispatcher();

  const formatDate = (date: string, type: "number" | "initial") => {
    const formatter =
      type === "number"
        ? new Intl.DateTimeFormat("de-DE", {
            day: "numeric",
          })
        : new Intl.DateTimeFormat("de-DE", {
            weekday: "short",
          });

    return formatter.format(new Date(date));
  };
</script>

<!-- <header> -->
<nav>
  {#each plan as day}
    <div>
      <time datetime={day.date}>{formatDate(day.date, "initial")}</time>
      <button
        on:click={() => dispatch("change", day)}
        class:selected={date === day.date}
        class:closed={day.closed}>{formatDate(day.date, "number")}</button
      >
    </div>
  {/each}
</nav>

<!-- </header> -->
<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
    overflow-y: scroll;
  }

  div {
    margin-inline: 1rem;
  }

  time {
    display: block;
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
    border-radius: 1em;
    font-size: 1.2rem;
    color: var(--text);
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }

  button.selected {
    background-color: black;
    color: var(--bg);
    font-weight: 600;
    font-size: 1.15rem;
  }
  nav :first-child button {
    color: var(--theme);
  }
  nav :first-child button.selected {
    background-color: var(--theme);
    color: white;
  }

  @media screen and (prefers-color-scheme: dark) {
    button.selected {
      background-color: white;
    }
  }
</style>
