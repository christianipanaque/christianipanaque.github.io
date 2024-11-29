// Table state management
let rows = [];
let currentPage = 1;
const rowsPerPage = 100;
let searchQuery = "";

// Data generation function
const sections = ["A", "B", "C", "D"];
const categories = ["X", "Y", "Z"];
const subCategories = ["1", "2", "3", "4"];
const generateRandomText = () => Math.random().toString(36).substring(2, 15);

function generateData() {
  rows = []; // Clear existing data
  for (let i = 0; i < 100000; i++) {
    rows.push([
      sections[Math.floor(Math.random() * sections.length)],
      categories[Math.floor(Math.random() * categories.length)],
      subCategories[Math.floor(Math.random() * subCategories.length)],
      generateRandomText()
    ]);
  }
}

// Render the table with pagination and search functionality
function renderTable(page) {
  const tableBody = document.querySelector("#largeTable tbody");
  tableBody.innerHTML = ""; // Clear existing rows

  const filteredRows = filterRows(searchQuery);
  const paginatedRows = filteredRows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  paginatedRows.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });

  document.getElementById(
    "pageInfo"
  ).textContent = `Page ${currentPage} of ${Math.ceil(
    filteredRows.length / rowsPerPage
  )}`;
}

// Filter rows based on search query
function filterRows(query) {
  if (!query) return rows;
  return rows.filter((row) =>
    row.some((cell) => cell.toLowerCase().includes(query.toLowerCase()))
  );
}

// Search function
function searchTable() {
  searchQuery = document.getElementById("searchInput").value;
  currentPage = 1; // Reset to the first page when searching
  renderTable(currentPage);
}

// Reset search and show all data
function resetSearch() {
  document.getElementById("searchInput").value = "";
  searchQuery = "";
  currentPage = 1; // Reset to first page
  renderTable(currentPage);
}

// Sort table by column
function sortTable(columnIndex) {
  rows.sort((a, b) => {
    if (a[columnIndex] < b[columnIndex]) return -1;
    if (a[columnIndex] > b[columnIndex]) return 1;
    return 0;
  });
  renderTable(currentPage);
}

// Pagination functions
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderTable(currentPage);
  }
}

function nextPage() {
  const filteredRows = filterRows(searchQuery);
  if (currentPage < Math.ceil(filteredRows.length / rowsPerPage)) {
    currentPage++;
    renderTable(currentPage);
  }
}

// Initialize the table
function initializeTable() {
  generateData(); // Generate data
  renderTable(currentPage); // Render initial table
}

// Expose the functions to the global window object
window.initializeTable = initializeTable;
window.searchTable = searchTable;
window.resetSearch = resetSearch;
window.sortTable = sortTable;
window.prevPage = prevPage;
window.nextPage = nextPage;
