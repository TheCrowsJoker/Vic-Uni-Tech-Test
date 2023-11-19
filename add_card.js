function addCard(user) {
  console.log(user);

  // Create the card
  const card = document.createElement("div");
  card.classList.add("user-card");

  // Add name
  const name = document.createElement("p");
  name.textContent = `${user.name.first} ${user.name.last}`;
  card.appendChild(name);

  // Add image
  const image = document.createElement("img");
  image.src = user.picture.large;
  card.appendChild(image);

  // Add card to DOM
  document.body.appendChild(card);
}
