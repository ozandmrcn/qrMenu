import fetchMenu from "./api.js";
import { write } from "./details.js";
import { elements, renderCards } from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchMenu();

  renderCards(data);

  // Add event listener to each input
  elements.inputs.forEach((input) => {
    input.addEventListener("change", () => {
      const selected = input.id;

      // If all is selected render all cards
      if (selected === "all") {
        renderCards(data);
      } else {
        // Else render filtered cards
        const filtered = data.filter((item) => item.category == selected);
        renderCards(filtered);
      }
    });
  });
});

write();
