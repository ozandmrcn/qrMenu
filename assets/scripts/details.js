import fetchMenu from "./api.js";
import { renderDetails, elements, renderNotFound } from "./ui.js";

function write() {}

const params = new URLSearchParams(window.location.search);

const id = +params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchMenu();

  const product = data.find((item) => item.id == id);

  if (!product) {
    renderNotFound(elements.detailContainer);
  } else {
    renderDetails(product, elements.detailContainer);
  }
});

export { write };
