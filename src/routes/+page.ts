import type { PageLoad } from "./$types";

export const load = (async ({ fetch, depends }) => {
  const fetchPlan = async () => {
    const url = "https://mensa-api.mxmlndml.com/api/v1/canteens/187/meals";

    const response = await fetch(url);
    const plan = await response.json();

    depends("meals");
    return plan;
  };

  return {
    plan: fetchPlan(),
  };
}) satisfies PageLoad;
