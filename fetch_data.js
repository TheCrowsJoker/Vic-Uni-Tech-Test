async function fetchData(api) {
  const response = await fetch(api);
  const users = await response.json();

  users.results.forEach((user) => {
    addCard(user);
  });
}
