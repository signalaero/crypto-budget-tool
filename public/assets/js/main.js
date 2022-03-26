// DOM elements
const npcForm = document.getElementById("npcForm");
const npcListContainer = document.getElementById("user-list-container");
const npcList = document.getElementById("user-list");
const npcTemplate = document.getElementById("user-template");
const logger = document.getElementById("log");

// API helper class.
const api = new Api({
  baseUrl: "http://localhost:3003",
});

// Write to log
const log = (msg) => {
  logger.prepend(`↳ ${msg}` + "\n");
};

// Clear log button
document.getElementById("clear-log-btn").addEventListener("click", () => {
  logger.innerHTML = "";
});

// Create a single table row populated with user data.
const createUserTableRow = (user) => {
 
  const tr = npcTemplate.content.cloneNode(true);
  const td = tr.querySelectorAll("td");

  // Set the first cell to the user ID (truncated down to 4 characters).
  td[0].textContent = `${user.id.slice(0, 4)}...`;
  // Show the full user ID on mouse hover.
  td[0].title = user.id;
  
  td[1].textContent = user.firstName;
  td[2].textContent = user.lastName;
  td[3].textContent = user.age;
  td[4].textContent = user.hairColor;
  td[5].textContent = user.eyeColor;
  td[6].textContent = user.complexion;
  td[7].textContent = user.favColorOne;
  td[8].textContent = user.favColorTwo;
  td[9].textContent = user.hairStyle;
  td[10].textContent = user.npcHeight;
  td[11].textContent = user.npcWeight;
  td[12].textContent = user.npcClass;
  td[13].textContent = user.primaryAttack;
  td[14].textContent = user.secondaryAttack;
  td[15].textContent = user.specialAbility;
  td[16].textContent = user.email;

  // Add the user ID as the delete button's ID for convenience later on.
  td[17].querySelector("button").id = user.id;

  return tr;
};

// Create several table rows with a collection of user data.
const createUserTableRows = (users) => {

  const fragment = new DocumentFragment();

  // Iterate over the provided users argument.
  users.forEach((user) => {
    // Create a row will all the user's data.
    const tr = createUserTableRow(user);
    // Add the user table row to the fragment.
    fragment.appendChild(tr);
  });

  return fragment;
};

// Fetch user data from API and update the user list in the DOM.
const updateNpcList = () => {
  api.get("/users").then((response) => {
    const users = response.data;
    const hasUsers = users.length > 0;

    // Only create user table rows if there are users.
    if (hasUsers) {
      // Get a DocumentFragment containing table rows of user data.
      const tr = createUserTableRows(users);
      // Replace all the children of the tbody element with our new user rows.
      npcList.replaceChildren(tr);
    }

    log(`Fetched ${users.length} users.`);
    // Set the class that determines if the "no users" message is displayed or not.
    npcListContainer.classList.toggle("has-users", hasUsers);
  });
};

// Click listener for deleting users.

npcList.addEventListener("click", (event) => {
  const target = event.target;
  if (target.className === "delete-btn") {
    const resource = `/users/${target.id}`;
    api.delete(resource).then((response) => console.log(response));
    log(`Delete user with ID: ${target.id}`);
    updateNpcList();
  }
});

// Listener for creating new users.
npcForm.addEventListener("submit", (event) => {
  // Prevent reload on submit
  event.preventDefault();

  // Get the value of the fields.
  const firstName = event.target.elements["firstName"].value;
  const lastName = event.target.elements["lastName"].value;
  const age = event.target.elements["age"].value;
  const hairColor = event.target.elements["hairColor"].value;
  const eyeColor = event.target.elements["eyeColor"].value;
  const complexion = event.target.elements["complexion"].value;
  const favColorOne = event.target.elements["favColorOne"].value;
  const favColorTwo = event.target.elements["favColorTwo"].value;
  const hairStyle = event.target.elements["hairStyle"].value;
  const npcHeight = event.target.elements["npcHeight"].value;
  const npcWeight = event.target.elements["npcWeight"].value;
  const npcClass = event.target.elements["npcClass"].value;
  const primaryAttack = event.target.elements["primaryAttack"].value;
  const secondaryAttack = event.target.elements["secondaryAttack"].value;
  const specialAbility = event.target.elements["specialAbility"].value;
  const email = event.target.elements["email"].value;


  // Send a POST request with the data to the API.
  api.post("/users", { firstName , lastName, age, hairColor, eyeColor, complexion, favColorOne, favColorTwo, hairStyle, npcHeight, npcWeight, npcClass, primaryAttack, secondaryAttack, specialAbility, email }).then((response) => {
    log(`Create new user: ${response.firstName}`);
    // Update the list of NPCs now that it has changed.
    updateNpcList();
  });
  // Clear out the input field of its previous value.
  npcForm.reset();
});

// Populate the user list on page load.
updateNpcList();