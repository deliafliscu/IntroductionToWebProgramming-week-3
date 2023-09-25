

const infoWeb =
  "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";

async function getJson() {
  const response = await fetch(infoWeb);
  const info = await response.json();

  const municipalities = info.dataset.dimension.Alue.category.label;
  const values = info.dataset.value;

  const table = document.getElementById("table");
  const tbody = document.getElementById("tbody");

  // Create rows for each municipality and populate with data
  for (const [municipalityKey, municipality] of Object.entries(
    municipalities
  )) {
    const population =
      values[Object.keys(municipalities).indexOf(municipalityKey)];

    const row = document.createElement("tr");
    const column1 = document.createElement("td");
    const column2 = document.createElement("td");

    column1.textContent = municipality;
    column2.textContent = population;

    row.appendChild(column1);
    row.appendChild(column2);

    tbody.appendChild(row);
  }

  table.appendChild(tbody);
}

getJson();
