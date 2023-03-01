<script lang="ts">
  import { browser } from "$app/environment";
  import { invalidate } from "$app/navigation";
  import { onDestroy } from "svelte";
  import { NavigationBar } from "@mxmlndml/cupertino-components";
  import DatePicker from "../components/DatePicker.svelte";

  export let data: {
    plan: [
      {
        date: string;
        closed: boolean;
        meals: [
          {
            name: string;
            category: string;
            notes: [string];
            prices: { students: number };
          }
        ];
      }
    ];
  };
  let date = data.plan[0].date;
  $: [menu] = data.plan.filter((day) => day.date === date);

  const updateMeals = () => {
    if (browser && document.visibilityState === "hidden") {
      return;
    }
    invalidate("meals");
  };

  if (browser) {
    document.addEventListener("visibilitychange", updateMeals);
  }

  const formatCurrency = (currency: number) => {
    const formatter = new Intl.NumberFormat("de-DE", {
      currency: "EUR",
      style: "currency",
    });

    return formatter.format(currency);
  };

  onDestroy(() => {
    if (browser) {
      document.removeEventListener("visibilitychange", updateMeals);
    }
  });
</script>

<NavigationBar>
  Mensa Academica
  <DatePicker plan={data.plan} bind:date slot="subheader" />
</NavigationBar>

{#if !menu.closed}
  <dl>
    {#each menu.meals as meal}
      <div class="box">
        <dt><h2>{meal.category}</h2></dt>
        <dd>
          <h3>{meal.name}</h3>
          <ul>
            {#each meal.notes as note}
              <li>{note}</li>
            {/each}
          </ul>
          {#if meal.prices.students}
            <p>{formatCurrency(meal.prices.students)}</p>
          {/if}
        </dd>
      </div>
    {/each}
  </dl>
{/if}

<style>
  div.box {
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: white;
    border-radius: 1rem;
  }

  h2 {
    font-size: 0.75rem;
    font-weight: 400;
  }
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
  }
  ul {
    margin: 0.25rem 0 0.5rem;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 0.5rem;
  }
  li {
    background-color: var(--bg);
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
    font-size: 0.7rem;
    list-style: none;
  }
  p {
    font-size: 1.5rem;
  }

  @media screen and (prefers-color-scheme: dark) {
    div.box,
    li {
      background-color: var(--fill-tertiary);
    }
  }
</style>
