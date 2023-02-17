import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
  const fetchPlan = async () => {
    const canteenId = 187;
    const url = `https://openmensa.org/api/v2/canteens/${canteenId}/meals`;

    const response = await fetch(url);
    const plan = await response.json();
    return plan;
  };

  return {
    plan: fetchPlan(),
  };
}) satisfies PageLoad;
