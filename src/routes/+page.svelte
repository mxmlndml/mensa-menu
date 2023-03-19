<script lang="ts">
  import { browser } from "$app/environment";
  import { invalidate } from "$app/navigation";
  import { onDestroy } from "svelte";
  import { NavigationBar, Carousel } from "@mxmlndml/cupertino-components";
  import DatePicker from "../components/DatePicker.svelte";
  import Menu from "../components/Menu.svelte";

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
  let carousel: Carousel;
  let index = 0;

  const onDatePickerChange = (event: CustomEvent) => {
    carousel.scrollTo(data.plan.indexOf(event.detail.plan));
    setTimeout(() => {
      scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  const updateMeals = () => {
    if (browser && document.visibilityState === "hidden") {
      return;
    }
    invalidate("meals");
  };

  if (browser) {
    document.addEventListener("visibilitychange", updateMeals);
  }

  onDestroy(() => {
    if (browser) {
      document.removeEventListener("visibilitychange", updateMeals);
    }
  });
</script>

<NavigationBar>
  Mensa Academica
  <DatePicker
    plan={data.plan}
    bind:date={data.plan[index].date}
    on:change={onDatePickerChange}
    slot="subheader"
  />
</NavigationBar>

<Carousel bind:index bind:this={carousel}>
  {#each data.plan as menu}
    <Menu {menu} />
  {/each}
</Carousel>

<style>
  :global(.container) {
    gap: var(--safe-area-inline);
  }
</style>
