// DOM elements
const budgetForm = document.getElementById("budgetForm");
const userListContainer = document.getElementById("user-list-container");
const userList = document.getElementById("user-list");
const userTemplate = document.getElementById("user-template");
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
 
  const tr = userTemplate.content.cloneNode(true);
  const td = tr.querySelectorAll("td");

  // Set the first cell to the user ID (truncated down to 4 characters).
  td[0].textContent = `${user.id.slice(0, 4)}...`;
  // Show the full user ID on mouse hover.
  td[0].title = user.id;
  
  td[1].textContent = user.firstLastName;
  td[2].textContent = user.percentBudgetCrypto;
  td[3].textContent = user.numPaychecks;
  td[4].textContent = user.favCrypto;
  td[5].textContent = user.favCryptoTwo;
  td[6].textContent = user.netPayPerPaycheck;
  td[7].textContent = user.rent;
  td[8].textContent = user.utilities;
  td[9].textContent = user.groceries;
  td[10].textContent = user.transportation;
  td[11].textContent = user.insurance;
  td[12].textContent = user.healthcare;
  td[13].textContent = user.savingInvestingDebt;
  td[14].textContent = user.personalSpending;
  td[15].textContent = user.misc;
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
const updateUserList = () => {
  api.get("/users").then((response) => {
    const users = response.data;
    const hasUsers = users.length > 0;

    // Only create user table rows if there are users.
    if (hasUsers) {
      // Get a DocumentFragment containing table rows of user data.
      const tr = createUserTableRows(users);
      // Replace all the children of the tbody element with our new user rows.
      userList.replaceChildren(tr);
    }

    log(`Fetched ${users.length} submissions.`);
    // Set the class that determines if the "no users" message is displayed or not.
    userListContainer.classList.toggle("has-users", hasUsers);
  });
};

// Click listener for deleting users.

userList.addEventListener("click", (event) => {
  const target = event.target;
  if (target.className === "delete-btn") {
    const resource = `/users/${target.id}`;
    api.delete(resource).then((response) => console.log(response));
    log(`Delete user with ID: ${target.id}`);
    updateUserList();
  }
});

// Listener for creating new users.
budgetForm.addEventListener("submit", (event) => {
  // Prevent reload on submit
  event.preventDefault();

  // Get the value of the fields.
  const firstLastName = event.target.elements["firstLastName"].value;
  const percentBudgetCrypto = event.target.elements["percentBudgetCrypto"].value;
  const numPaychecks = event.target.elements["numPaychecks"].value;
  const favCrypto = event.target.elements["favCrypto"].value;
  const favCryptoTwo = event.target.elements["favCryptoTwo"].value;
  const netPayPerPaycheck = event.target.elements["netPayPerPaycheck"].value;
  const rent = event.target.elements["rent"].value;
  const utilities = event.target.elements["utilities"].value;
  const groceries = event.target.elements["groceries"].value;
  const transportation = event.target.elements["transportation"].value;
  const insurance = event.target.elements["insurance"].value;
  const healthcare = event.target.elements["healthcare"].value;
  const savingInvestingDebt = event.target.elements["savingInvestingDebt"].value;
  const personalSpending = event.target.elements["personalSpending"].value;
  const misc = event.target.elements["misc"].value;
  const email = event.target.elements["email"].value;

  // Net Pay Per Month Calculation
  const netPayPerMonth = numPaychecks * netPayPerPaycheck;
  
  // Budgeted Amount for Crypto
  const budgetCryptoAmount = netPayPerMonth * percentBudgetCrypto * .01;

  // Total Expenditures
  const expenditures = +rent + +groceries + +transportation + +insurance + +healthcare + +savingInvestingDebt + +personalSpending + +misc;

  // Total Costs
  const totalCost = +expenditures + +budgetCryptoAmount;

  // Display of Calculations - Local Storage
  const netPayPerMonthDisplay = document.getElementById("netPayPerMonthDisplay");
  netPayPerMonthDisplay.textContent = "Net Pay Per Month = $" + (netPayPerMonth);
  const budgetCryptoAmountDisplay = document.getElementById("dollarAmountForCryptoDisplay");
  budgetCryptoAmountDisplay.textContent = "Budgeted Amount Crypto = $" + (budgetCryptoAmount)
  const expendituresDisplay = document.getElementById("expendituresDisplay");
  expendituresDisplay.textContent = "Total Expenditures = $" + (expenditures);
  const totalCostDisplay = document.getElementById("totalCostDisplay");
  totalCostDisplay.textContent = "Total Cost of Crypto & Expenditures = $" + (totalCost)


  // Send a POST request with the data to the API.
  api.post("/users", { firstLastName , percentBudgetCrypto, numPaychecks, favCrypto, favCryptoTwo, netPayPerPaycheck, rent, utilities, groceries, transportation, insurance, healthcare, savingInvestingDebt, personalSpending, misc, email }).then((response) => {
    log(`Create new user: ${response.firstLastName}`);
    // Update the list of users now that it has changed.
    updateUserList();
  });
  // Clear out the input field of its previous value.
  budgetForm.reset();
});

// Populate the user list on page load.
updateUserList();