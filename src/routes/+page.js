/** @type {import('./$types').PageLoad} */
export async function load({fetch}) {
  const fetchPlan = async () => {
    const canteenId = 187;
    const url = `https://openmensa.org/api/v2/canteens/${canteenId}/meals`;

    const response = await fetch(url);
    const plan = await response.json();
    return plan;
  }

  return {
    plan: fetchPlan()
  }
}