/* Sample case data */

let cases = [
{
number: "DC-101",
title: "Property Dispute",
judge: "Justice Sharma",
date: "2026-10-10",
status: "Pending"
},
{
number: "DC-102",
title: "Contract Dispute",
judge: "Justice Mehta",
date: "2026-10-15",
status: "Pending"
},
{
number: "DC-103",
title: "Civil Appeal",
judge: "Justice Patil",
date: "2026-09-20",
status: "Completed"
}
];

/* Login */

document.getElementById("loginForm").addEventListener("submit", function(event) {

```
event.preventDefault();

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if (username === "admin" && password === "admin123") {

    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("dashboardPage").classList.remove("hidden");

    updateDashboard();
    displayCases();

} else {

    document.getElementById("loginMessage").textContent =
        "Invalid username or password.";

}
```

});

/* Logout */

function logout() {

```
document.getElementById("dashboardPage").classList.add("hidden");
document.getElementById("loginPage").classList.remove("hidden");

document.getElementById("username").value = "";
document.getElementById("password").value = "";
```

}

/* Show Sections */

function showSection(sectionName) {

```
let sections = document.querySelectorAll(".section");

sections.forEach(function(section) {
    section.classList.add("hidden");
});

document.getElementById(sectionName).classList.remove("hidden");

if (sectionName === "cases") {
    displayCases();
}

if (sectionName === "dashboard") {
    updateDashboard();
}
```

}

/* Display Cases */

function displayCases(caseList = cases) {

```
let tableBody = document.getElementById("caseTableBody");

tableBody.innerHTML = "";

caseList.forEach(function(caseItem) {

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${caseItem.number}</td>
        <td>${caseItem.title}</td>
        <td>${caseItem.judge}</td>
        <td>${caseItem.date}</td>
        <td>${caseItem.status}</td>
    `;

    tableBody.appendChild(row);

});
```

}

/* Search Cases */

function searchCases() {

```
let searchText =
    document.getElementById("searchCase").value.toLowerCase();

let filteredCases = cases.filter(function(caseItem) {

    return (
        caseItem.number.toLowerCase().includes(searchText) ||
        caseItem.title.toLowerCase().includes(searchText)
    );

});

displayCases(filteredCases);
```

}

/* Add New Case */

document.getElementById("caseForm").addEventListener("submit", function(event) {

```
event.preventDefault();

let newCase = {

    number: document.getElementById("caseNumber").value,
    title: document.getElementById("caseTitle").value,
    judge: document.getElementById("judgeName").value,
    date: document.getElementById("hearingDate").value,
    status: document.getElementById("caseStatus").value

};

cases.push(newCase);

document.getElementById("caseMessage").textContent =
    "Case registered successfully.";

document.getElementById("caseForm").reset();

displayCases();
updateDashboard();
```

});

/* Update Dashboard */

function updateDashboard() {

```
let total = cases.length;

let pending = cases.filter(function(caseItem) {
    return caseItem.status === "Pending";
}).length;

let completed = cases.filter(function(caseItem) {
    return caseItem.status === "Completed";
}).length;

document.getElementById("totalCases").textContent = total;
document.getElementById("pendingCases").textContent = pending;
document.getElementById("completedCases").textContent = completed;
```

}
