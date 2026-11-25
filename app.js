const books = [
  { id: 1, title: "The Secret Garden", author: "Frances Hodgson Burnett", available: true, color: "#789079", cover: "#46614e" },
  { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald", available: true, color: "#b7a274", cover: "#7d6945" },
  { id: 3, title: "Pride and Prejudice", author: "Jane Austen", available: false, color: "#8fa1a5", cover: "#60777c" },
  { id: 4, title: "Jane Eyre", author: "Charlotte Brontë", available: true, color: "#a39b89", cover: "#6f6859" },
  { id: 5, title: "The Bell Jar", author: "Sylvia Plath", available: true, color: "#c8b0bd", cover: "#9a7585" },
  { id: 6, title: "Rebecca", author: "Daphne du Maurier", available: false, color: "#6e7d70", cover: "#39473d" },
  { id: 7, title: "Little Women", author: "Louisa May Alcott", available: true, color: "#bf9b82", cover: "#855f49" },
  { id: 8, title: "The Odyssey", author: "Homer", available: true, color: "#a5a26f", cover: "#777841" }
];

const savedLoans = JSON.parse(localStorage.getItem("northwood-loan-status") || "{}");

for (const book of books) {
  if (typeof savedLoans[book.id] === "boolean") book.available = savedLoans[book.id];
}

let activeFilter = "all";
const grid = document.querySelector("#bookGrid");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const loanCount = document.querySelector("#loanCount");

function render() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query);
    const matchesFilter = activeFilter === "all" || (activeFilter === "available" ? book.available : !book.available);
    return matchesSearch && matchesFilter;
  });

  grid.innerHTML = filtered.map((book) => `
    <article class="book-card">
      <div class="cover" style="background:${book.color}">
        <div class="cover-inner" style="background:${book.cover}">
          <div class="cover-title">${book.title}</div>
          <div class="cover-author">${book.author}</div>
        </div>
      </div>
      <div class="book-details">
        <h3 title="${book.title}">${book.title}</h3>
        <p class="author">${book.author}</p>
        <div class="card-footer">
          <span class="status ${book.available ? "" : "loan"}">${book.available ? "Available" : "On loan"}</span>
          <button class="loan-button ${book.available ? "" : "on-loan"}" type="button" data-id="${book.id}" aria-label="${book.available ? "Mark on loan" : "Mark returned"}: ${book.title}">
            ${book.available ? "Mark on loan" : "Mark returned"}
          </button>
        </div>
      </div>
    </article>
  `).join("");

  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "book" : "books"}`;
  emptyState.hidden = filtered.length !== 0;
  grid.hidden = filtered.length === 0;
  loanCount.textContent = books.filter((book) => !book.available).length;
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    render();
  });
});

searchInput.addEventListener("input", render);

grid.addEventListener("click", (event) => {
  const button = event.target.closest(".loan-button");
  if (!button) return;
  const book = books.find((item) => item.id === Number(button.dataset.id));
  if (book) {
    book.available = !book.available;
    const statusById = Object.fromEntries(books.map((item) => [item.id, item.available]));
    localStorage.setItem("northwood-loan-status", JSON.stringify(statusById));
    render();
  }
});

render();
