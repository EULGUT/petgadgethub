const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');

function renderProducts() {
  let filtered = [...products];
  const search = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const sort = sortFilter.value;

  if (search) {
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    );
  }

  if (category !== 'all') {
    filtered = filtered.filter(product => product.category === category);
  }

  if (sort === 'low-high') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'high-low') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name, 'nl'));
  }

  if (!filtered.length) {
    productGrid.innerHTML = '<div class="empty-state">Geen producten gevonden. Probeer een andere zoekterm of categorie.</div>';
    return;
  }

  productGrid.innerHTML = filtered.map(product => `
    <article class="card">
      <img src="${product.image}" alt="${product.name}">
      <div class="card-body">
        <span class="badge">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">€ ${product.price.toFixed(2).replace('.', ',')}</div>
        <div class="product-actions">
          <a class="btn btn-buy" href="${product.link}" target="_blank" rel="noopener noreferrer">Bekijk product</a>
          <button class="btn btn-light" onclick="alert('Hier kun je later een detailpagina of extra informatie openen.');">Info</button>
        </div>
      </div>
    </article>
  `).join('');
}

searchInput.addEventListener('input', renderProducts);
categoryFilter.addEventListener('change', renderProducts);
sortFilter.addEventListener('change', renderProducts);

renderProducts();
