const books = [
  { title:"Where the Crawdads Sing", author:"Delia Owens", rating:"4.46", year:"2018", genre:"Mystery", description:"A quiet marsh girl becomes the prime suspect in a murder, while the natural world and a vanished community shape her coming of age.", color:"#81908a", cover:"#4f6660" },
  { title:"The Midnight Library", author:"Matt Haig", rating:"3.99", year:"2020", genre:"Fantasy", description:"A woman discovers a library between life and death containing infinite versions of the life she might have lived.", color:"#9e9ab4", cover:"#625b7d" },
  { title:"Dune", author:"Frank Herbert", rating:"4.27", year:"1965", genre:"Science fiction", description:"On a desert planet rich in a precious resource, a young heir confronts prophecy, empire, ecology, and war.", color:"#c9a66c", cover:"#80602f" },
  { title:"The Silent Patient", author:"Alex Michaelides", rating:"4.19", year:"2019", genre:"Thriller", description:"A therapist becomes obsessed with uncovering why a celebrated painter stopped speaking after murdering her husband.", color:"#9da6aa", cover:"#59676d" },
  { title:"It Ends with Us", author:"Colleen Hoover", rating:"4.44", year:"2016", genre:"Romance", description:"A florist revisits the cycle of abuse as past trauma collides with a promising new relationship.", color:"#c79a91", cover:"#9b6258" },
  { title:"The Seven Husbands of Evelyn Hugo", author:"Taylor Jenkins Reid", rating:"4.39", year:"2017", genre:"Historical fiction", description:"A glamorous Hollywood icon reveals the secrets, ambition, and forbidden love behind a legendary public life.", color:"#8f837e", cover:"#4e4947" },
  { title:"Atomic Habits", author:"James Clear", rating:"4.34", year:"2018", genre:"Self-development", description:"A practical guide to building good habits, breaking bad ones, and making gradual improvements through better systems.", color:"#d1b47c", cover:"#9b7740" },
  { title:"The Alchemist", author:"Paulo Coelho", rating:"3.90", year:"1988", genre:"Fable", description:"A Spanish shepherd follows signs across the desert in search of treasure and ultimately discovers his own destiny.", color:"#c59c55", cover:"#825b22" },
  { title:"Normal People", author:"Sally Rooney", rating:"3.84", year:"2018", genre:"Literary fiction", description:"Two classmates move in and out of each other's lives, negotiating intimacy, class, and emotional vulnerability.", color:"#a7b0a2", cover:"#626d60" },
  { title:"The Book Thief", author:"Marcus Zusak", rating:"4.39", year:"2005", genre:"Historical fiction", description:"A foster girl in Nazi Germany steals books and shares stories while death quietly observes a world at war.", color:"#9b9b82", cover:"#5d5d49" },
  { title:"The Great Gatsby", author:"F. Scott Fitzgerald", rating:"3.93", year:"1925", genre:"Classic", description:"A mysterious millionaire pursues an idealized love in 1920s New York, exposing beauty, excess, and moral decay.", color:"#b7a274", cover:"#7d6945" },
  { title:"Pride and Prejudice", author:"Jane Austen", rating:"4.30", year:"1813", genre:"Classic romance", description:"Elizabeth Bennet challenges first impressions and social expectations in a witty story of family, class, and love.", color:"#91a5a8", cover:"#60777c" },
  { title:"To Kill a Mockingbird", author:"Harper Lee", rating:"4.26", year:"1960", genre:"Classic", description:"A young girl in Depression-era Alabama learns about prejudice and courage through her father's defense of an innocent man.", color:"#c0a675", cover:"#806d42" },
  { title:"1984", author:"George Orwell", rating:"4.20", year:"1949", genre:"Dystopian", description:"A government clerk rebels against an all-seeing state that controls history, language, and even personal thought.", color:"#a77a70", cover:"#67443d" },
  { title:"Harry Potter and the Sorcerer's Stone", author:"J.K. Rowling", rating:"4.47", year:"1997", genre:"Fantasy", description:"An orphan discovers he is a wizard and begins a year of friendship and danger at Hogwarts School of Witchcraft and Wizardry.", color:"#aa8a55", cover:"#72552f" },
  { title:"The Hobbit", author:"J.R.R. Tolkien", rating:"4.29", year:"1937", genre:"Fantasy", description:"A reluctant hobbit joins dwarves and a wizard on an adventure involving trolls, dragons, and a hidden fortune.", color:"#8da16f", cover:"#596d40" },
  { title:"The Hunger Games", author:"Suzanne Collins", rating:"4.34", year:"2008", genre:"Dystopian", description:"A teenage girl volunteers for a televised battle that could save her sister and spark rebellion against tyranny.", color:"#a5a18a", cover:"#69664f" },
  { title:"The Catcher in the Rye", author:"J.D. Salinger", rating:"3.81", year:"1951", genre:"Classic", description:"Alienated teenager Holden Caulfield wanders New York while questioning adulthood, loss, and social hypocrisy.", color:"#bd9b74", cover:"#7c5d3d" },
  { title:"Jane Eyre", author:"Charlotte Brontë", rating:"4.15", year:"1847", genre:"Gothic classic", description:"An independent governess confronts her past and discovers unsettling secrets at the home of mysterious Mr. Rochester.", color:"#a39b89", cover:"#6f6859" },
  { title:"Little Women", author:"Louisa May Alcott", rating:"4.16", year:"1868", genre:"Classic", description:"Four sisters grow toward adulthood, balancing ambition, family duty, hardship, and different visions of happiness.", color:"#bf9b82", cover:"#855f49" },
  { title:"The Fault in Our Stars", author:"John Green", rating:"4.15", year:"2012", genre:"Young adult", description:"Two teenagers with cancer fall in love, finding humor and meaning as they seek a vanished author's answers.", color:"#92aeb3", cover:"#56777d" },
  { title:"A Game of Thrones", author:"George R.R. Martin", rating:"4.44", year:"1996", genre:"Fantasy", description:"Noble families battle for a throne while ancient threats gather beyond the northern wall of a divided kingdom.", color:"#7e857e", cover:"#414943" },
  { title:"The Da Vinci Code", author:"Dan Brown", rating:"3.88", year:"2003", genre:"Mystery thriller", description:"A symbolist and cryptologist race through Europe uncovering a dangerous trail hidden in art and religious history.", color:"#a99b80", cover:"#625940" },
  { title:"Gone Girl", author:"Gillian Flynn", rating:"4.13", year:"2012", genre:"Thriller", description:"When his wife disappears, a husband's secrets and an unreliable record of their marriage turn suspicion inward.", color:"#839092", cover:"#4a5557" },
  { title:"The Shining", author:"Stephen King", rating:"4.27", year:"1977", genre:"Horror", description:"A winter caretaker and his family are isolated in a haunted hotel with a sinister history and a growing darkness.", color:"#9e8d88", cover:"#67534f" },
  { title:"The Outsiders", author:"S.E. Hinton", rating:"4.12", year:"1967", genre:"Young adult", description:"A teenager and his working-class gang navigate loyalty and violence amid divisions between rival social groups.", color:"#b39a7e", cover:"#755d43" },
  { title:"Of Mice and Men", author:"John Steinbeck", rating:"3.88", year:"1937", genre:"Classic", description:"Two migrant workers cling to friendship and a shared dream while economic hardship closes in around them.", color:"#9ba074", cover:"#64683f" },
  { title:"The Giver", author:"Lois Lowry", rating:"4.13", year:"1993", genre:"Dystopian", description:"A boy selected to hold a society's memories discovers the painful truths concealed behind its perfect order.", color:"#8e9e9a", cover:"#596c67" },
  { title:"The Name of the Wind", author:"Patrick Rothfuss", rating:"4.54", year:"2007", genre:"Fantasy", description:"A legendary magician tells the story of his childhood, education, and desperate search for the forces that destroyed his family.", color:"#927e67", cover:"#584832" },
  { title:"Sapiens", author:"Yuval Noah Harari", rating:"4.38", year:"2011", genre:"Nonfiction", description:"An expansive overview of human history examines how biology, culture, cooperation, and belief transformed our species.", color:"#9d9a83", cover:"#64614d" },
  { title:"Educated", author:"Tara Westover", rating:"4.48", year:"2018", genre:"Memoir", description:"A woman raised in an isolated survivalist family struggles to pursue education and reshape her understanding of loyalty and selfhood.", color:"#9ca9a7", cover:"#5e6c69" },
  { title:"Becoming", author:"Michelle Obama", rating:"4.45", year:"2018", genre:"Memoir", description:"The former First Lady reflects on her roots, professional life, marriage, public service, and evolving identity.", color:"#a99ba7", cover:"#6c5d69" },
  { title:"The Kite Runner", author:"Khaled Hosseini", rating:"4.34", year:"2003", genre:"Historical fiction", description:"A writer returns to Afghanistan to confront a childhood betrayal and seek a difficult path toward redemption.", color:"#b18e6e", cover:"#79583f" },
  { title:"Life of Pi", author:"Yann Martel", rating:"3.95", year:"2001", genre:"Adventure", description:"A teenage boy survives a shipwreck with a Bengal tiger, transforming an ordeal at sea into a story about faith and truth.", color:"#91aba1", cover:"#58756a" },
  { title:"The Road", author:"Cormac McCarthy", rating:"4.01", year:"2006", genre:"Post-apocalyptic", description:"A father and son cross a burned and dangerous America, holding to love and humanity when civilization has collapsed.", color:"#9b8f80", cover:"#5f5549" },
  { title:"Rebecca", author:"Daphne du Maurier", rating:"4.24", year:"1938", genre:"Gothic mystery", description:"A young bride enters an imposing mansion haunted by memories of her husband's first wife and a housekeeper's devotion.", color:"#6e7d70", cover:"#39473d" },
  { title:"The Color Purple", author:"Alice Walker", rating:"4.24", year:"1982", genre:"Literary fiction", description:"A poor Black woman's letters trace her abuse, resilience, family bonds, and hard-won independence in the American South.", color:"#a08b9c", cover:"#685368" },
  { title:"Beloved", author:"Toni Morrison", rating:"4.14", year:"1987", genre:"Historical fiction", description:"A formerly enslaved woman is haunted by trauma and by the mysterious daughter whose return unsettles a family.", color:"#8a7d74", cover:"#51473f" },
  { title:"Circe", author:"Madeline Miller", rating:"4.25", year:"2018", genre:"Fantasy", description:"The banished daughter of Helios discovers witchcraft and confronts gods and mortals across a changing mythological world.", color:"#b5a064", cover:"#77623c" },
  { title:"The Night Circus", author:"Erin Morgenstern", rating:"4.03", year:"2011", genre:"Fantasy romance", description:"Two young magicians are bound to a lifelong contest staged inside a mysterious black-and-white circus that appears at night.", color:"#77756f", cover:"#373631" },
  { title:"Ready Player One", author:"Ernest Cline", rating:"4.25", year:"2011", genre:"Science fiction", description:"A teenage gamer searches a vast virtual world for an eccentric creator's fortune while fighting a ruthless corporation.", color:"#80949a", cover:"#49636a" },
  { title:"The Martian", author:"Andy Weir", rating:"4.41", year:"2011", genre:"Science fiction", description:"An astronaut stranded on Mars uses ingenuity and humor to survive while scientists on Earth race to rescue him.", color:"#b28167", cover:"#764d3b" },
  { title:"Ender's Game", author:"Orson Scott Card", rating:"4.31", year:"1985", genre:"Science fiction", description:"A brilliant child is trained through increasingly intense war games for humanity's conflict with an alien species.", color:"#7f96a1", cover:"#4b626d" },
  { title:"The Handmaid's Tale", author:"Margaret Atwood", rating:"4.12", year:"1985", genre:"Dystopian", description:"A woman in a theocratic regime is forced into reproductive servitude and quietly searches for ways to resist.", color:"#a75e55", cover:"#74362f" },
  { title:"Brave New World", author:"Aldous Huxley", rating:"3.99", year:"1932", genre:"Dystopian classic", description:"A scientifically engineered society offers comfort and pleasure at the cost of freedom, individuality, and meaning.", color:"#9d9280", cover:"#62594b" },
  { title:"The Odyssey", author:"Homer", rating:"3.79", year:"c. 8th century BCE", genre:"Epic poem", description:"A hero returns home after the Trojan War, surviving monsters, gods, temptation, and years of hardship.", color:"#a5a26f", cover:"#777841" },
  { title:"Frankenstein", author:"Mary Shelley", rating:"3.82", year:"1818", genre:"Gothic classic", description:"A scientist gives life to a creature and abandons it, provoking a tragic conflict over responsibility and belonging.", color:"#7c8b80", cover:"#48584d" },
  { title:"One Hundred Years of Solitude", author:"Gabriel García Márquez", rating:"4.11", year:"1967", genre:"Magical realism", description:"Multiple generations of the Buendía family repeat a cycle of passion, isolation, and fate in an invented Colombian town.", color:"#a9a06f", cover:"#6c663f" },
  { title:"The Chronicles of Narnia", author:"C.S. Lewis", rating:"4.26", year:"1950", genre:"Fantasy", description:"A group of children enters a magical kingdom through a wardrobe and becomes involved in an ancient battle for its future.", color:"#95a28a", cover:"#5a6950" },
  { title:"A Thousand Splendid Suns", author:"Khaled Hosseini", rating:"4.48", year:"2007", genre:"Historical fiction", description:"Two women from different generations form a powerful bond within a marriage shaped by war and oppression in Afghanistan.", color:"#b17f74", cover:"#7d5147" }
];

const popularTitles = new Set([
  "Where the Crawdads Sing","The Midnight Library","Dune","The Silent Patient","It Ends with Us",
  "The Seven Husbands of Evelyn Hugo","Atomic Habits","The Alchemist","The Book Thief","The Great Gatsby",
  "Pride and Prejudice","To Kill a Mockingbird","1984","Harry Potter and the Sorcerer's Stone",
  "The Hobbit","The Hunger Games","A Game of Thrones","The Da Vinci Code","Gone Girl","Sapiens"
].map((title) => title.toLowerCase()));

const hiddenGemTitles = new Set([
  "The Name of the Wind","The Night Circus","Circe","The Martian","The Road","Rebecca",
  "The Outsiders","The Giver","Life of Pi","The Chronicles of Narnia","The Color Purple",
  "One Hundred Years of Solitude","Beloved","Frankenstein","Educated","A Thousand Splendid Suns"
].map((title) => title.toLowerCase()));

const grid = document.querySelector("#bookGrid");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const modal = document.querySelector("#bookModal");
const genreFilter = document.querySelector("#genreFilter");
const collectionFilter = document.querySelector("#collectionFilter");
const catalogueStatus = document.querySelector("#catalogueStatus");
const palettes = [
  ["#81908a","#4f6660"],["#9e9ab4","#625b7d"],["#c9a66c","#80602f"],
  ["#9da6aa","#59676d"],["#c79a91","#9b6258"],["#91a5a8","#60777c"]
];

let allBooks = [...books];
let activeGenre = "all";
let activeCollection = "all";
let visibleLimit = 200;

function normalizeGenre(subjects = []) {
  const text = subjects.join(" ").toLowerCase();
  const genres = [
    ["Science fiction","science fiction|science-fiction|space exploration"],
    ["Fantasy","fantasy|magic|dragons"],["Mystery","detective|mystery|crime"],
    ["Romance","romance|love stories"],["Thriller","thriller|suspense"],
    ["Horror","horror|ghost|vampire"],["Biography","biography|autobiography"],
    ["History","history|historical"],["Science","science|biology|physics|astronomy"],
    ["Poetry","poetry|poems"],["Philosophy","philosophy"],
    ["Young Adult","young adult|juvenile fiction"],["Literary Fiction","fiction|literature"]
  ];
  for (const [name, pattern] of genres) {
    if (new RegExp(pattern).test(text)) return name;
  }
  return subjects[0] ? subjects[0].slice(0, 24) : "General";
}

async function loadExpandedCatalogue() {
  const target = 1000;
  const seen = new Set(allBooks.map((book) => book.title.toLowerCase()));

  try {
    for (let page = 1; page <= 10 && allBooks.length < target; page++) {
      catalogueStatus.textContent = `Loading collection… ${allBooks.length} of ${target}`;
      const url = `https://openlibrary.org/search.json?q=fiction&limit=100&page=${page}&fields=key,title,author_name,first_publish_year,subject,ratings_average,ratings_count,first_sentence,cover_i`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Open Library request failed");
      const data = await response.json();

      for (const item of data.docs || []) {
        if (allBooks.length >= target) break;
        const title = item.title?.trim();
        if (!title || seen.has(title.toLowerCase())) continue;
        seen.add(title.toLowerCase());
        const subjects = item.subject || [];
        const genre = normalizeGenre(subjects);
        const rating = Number(item.ratings_average);
        const ratingCount = Number(item.ratings_count || 0);
        const year = item.first_publish_year ? String(item.first_publish_year) : "Unknown";
        const firstSentence = Array.isArray(item.first_sentence) ? item.first_sentence[0] : item.first_sentence;
        const palette = palettes[allBooks.length % palettes.length];

        allBooks.push({
          title,
          author: item.author_name?.[0] || "Unknown author",
          rating: Number.isFinite(rating) ? rating.toFixed(2) : "Not rated",
          ratingCount,
          year,
          genre,
          description: firstSentence || `${title} is a notable work by ${item.author_name?.[0] || "an acclaimed author"}. Explore this title to discover its story and literary themes.`,
          key: item.key,
          coverId: item.cover_i,
          color: palette[0],
          cover: palette[1]
        });
      }
    }
  } catch (error) {
    console.error(error);
  }

  populateGenreFilter();
  catalogueStatus.hidden = true;
  render();
}

function populateGenreFilter() {
  const genres = [...new Set(allBooks.map((book) => book.genre))].filter(Boolean).sort();
  genreFilter.innerHTML = '<option value="all">All genres</option>' + genres.map((genre) => `<option value="${genre}">${genre}</option>`).join("");
}

function matchesCollection(book) {
  const year = Number.parseInt(book.year, 10);
  const rating = Number.parseFloat(book.rating);
  const normalizedTitle = book.title.toLowerCase();
  switch (activeCollection) {
    case "popular": return popularTitles.has(normalizedTitle) || (book.ratingCount || 0) >= 10000;
    case "hidden": return hiddenGemTitles.has(normalizedTitle) || ((book.ratingCount || 0) >= 20 && (book.ratingCount || 0) < 3000 && rating >= 3.8);
    case "classic": return Number.isFinite(year) && year <= 1980;
    case "recent": return Number.isFinite(year) && year >= 2015;
    case "rated": return Number.isFinite(rating) && rating >= 4.2;
    default: return true;
  }
}

function render() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = allBooks.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query);
    const matchesGenre = activeGenre === "all" || book.genre === activeGenre;
    return matchesSearch && matchesGenre && matchesCollection(book);
  });

  grid.innerHTML = filtered.slice(0, visibleLimit).map((book) => {
    const index = allBooks.indexOf(book);
    return `
      <button class="book-card" type="button" data-index="${index}" aria-label="View details for ${book.title}">
        <span class="cover" style="background:${book.color}">
          <span class="cover-inner" style="background:${book.cover}">
            <img class="book-cover-image" src="${getCoverUrl(book)}" alt="Cover of ${book.title}" loading="lazy" onerror="this.style.display='none'" />
            <span class="fallback-cover"><span class="cover-title">${book.title}</span><span class="cover-author">${book.author}</span></span>
          </span>
        </span>
        <span class="book-details">
          <strong class="book-name">${book.title}</strong>
          <span class="author">${book.author}</span>
          <span class="card-link">View book <span aria-hidden="true">→</span></span>
        </span>
      </button>`;
  }).join("");

  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "book" : "books"}`;
  emptyState.hidden = filtered.length !== 0;
  grid.hidden = filtered.length === 0;
  catalogueStatus.hidden = true;

  const loadMoreButton = document.querySelector("#loadMore");
  const remaining = filtered.length - visibleLimit;
  loadMoreButton.hidden = remaining <= 0;
  if (remaining > 0) {
    loadMoreButton.textContent = `Load ${Math.min(200, remaining)} more books`;
  }
}

async function openBook(index) {
  const book = allBooks[index];
  const modalCover = document.querySelector("#modalCover");
  modalCover.src = getCoverUrl(book);
  modalCover.alt = `Cover of ${book.title}`;
  modalCover.style.display = "block";
  modalCover.onerror = () => { modalCover.style.display = "none"; };
  modalCover.parentElement.style.background = book.color;
  document.querySelector("#modalTitle").textContent = book.title;
  document.querySelector("#modalAuthor").textContent = book.author;
  document.querySelector("#modalDescription").textContent = book.description;
  document.querySelector("#modalRating").textContent = book.rating;
  document.querySelector("#modalMeta").textContent = `${book.year} · ${book.genre}`;
  document.querySelector("#ratingLabel").textContent = book.key ? "Open Library rating" : "Goodreads rating";
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();

  if (book.key) {
    try {
      const response = await fetch(`https://openlibrary.org${book.key}.json`);
      if (response.ok) {
        const details = await response.json();
        const description = typeof details.description === "string" ? details.description : details.description?.value;
        if (description) document.querySelector("#modalDescription").textContent = description;
      }
    } catch (error) {}
  }
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

document.querySelector("#loadMore").addEventListener("click", () => {
  visibleLimit += 200;
  render();
});

searchInput.addEventListener("input", () => { visibleLimit = 200; render(); });

genreFilter.addEventListener("change", () => { activeGenre = genreFilter.value; visibleLimit = 200; render(); });
collectionFilter.addEventListener("change", () => {
  activeCollection = collectionFilter.value;
  visibleLimit = 200;
  document.querySelector("#catalogueTitle").textContent = collectionFilter.options[collectionFilter.selectedIndex].text;
  render();
});

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".book-card");
  if (card) openBook(Number(card.dataset.index));
});

modal.querySelector(".modal-close").addEventListener("click", closeModal);
modal.querySelector(".modal-backdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeModal();
});

function getCoverUrl(book) {
  if (book.coverId) return `https://covers.openlibrary.org/b/id/${book.coverId}-L.jpg`;
  return `https://covers.openlibrary.org/b/title/${encodeURIComponent(book.title)}-L.jpg`;
}

render();
loadExpandedCatalogue();
