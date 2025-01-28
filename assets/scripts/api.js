const fetchMenu = async () => {
  // Send a request to API
  const res = await fetch("../db.json");

  // Convert the data from API to a JavaScript object.
  const data = await res.json();

  // Return the menu array inside the data.
  return data.menu;
};

export default fetchMenu;
