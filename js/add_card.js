function addCard(user) {
  console.log(user);

  // Create the card
  const card = document.createElement("div");
  card.classList.add("user-card");

  // Add image
  const image = document.createElement("img");
  image.src = user.picture.large;
  image.classList.add("user-card-image");
  card.appendChild(image);

  // Add name
  const name = document.createElement("h1");
  name.textContent = `${user.name.first} ${user.name.last}`;
  name.classList.add("user-card-name");
  card.appendChild(name);

  // Add address
  const address = document.createElement("div");
  address.classList.add("user-card-address");

  // Add street
  const street = document.createElement("p");
  street.textContent = `${user.location.street.number} ${user.location.street.name}`;
  street.classList.add("user-card-address-street");
  address.appendChild(street);

  // Add city, state, and postcode
  const cityStatePostcode = document.createElement("p");
  cityStatePostcode.textContent = `${user.location.city}, ${user.location.state} ${user.location.postcode}`;
  cityStatePostcode.classList.add("user-card-address-city");
  address.appendChild(cityStatePostcode);

  // Add country
  const country = document.createElement("p");
  country.textContent = `${user.location.country}`;
  country.classList.add("user-card-address-country");
  address.appendChild(country);

  // Add the complete address
  card.appendChild(address);

  // Add phone number
  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = `\u260E ${user.phone}`;
  phoneNumber.classList.add("user-card-phone");
  card.appendChild(phoneNumber);

  // Add card to DOM
  document.body.appendChild(card);
}
