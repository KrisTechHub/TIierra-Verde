//PRICE RANGE FUNCTIONALITY
// Get range input element, output element, and list element
const priceRange = document.getElementById('priceRange');
const priceOutput = document.getElementById('priceOutput');

// Add event listener for input changes
priceRange.addEventListener('input', function() {
  // Get range value
  var rangeValue = parseInt(priceRange.value);

  // Update output element
  priceOutput.innerHTML = 'Price: &#8369;300 - &#8369;' + rangeValue;

  // Get list items and loop through them
  var listItems = productList.getElementsByTagName('article');
  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];
    var price = parseInt(listItem.getAttribute('data-price'));
    
    // Check if price is within range
    if (price <= rangeValue) {
      listItem.style.display = '';
    } else {
      listItem.style.display = 'none';
    }
  }
});

// Trigger input event to set initial output and filter
priceRange.dispatchEvent(new Event('input'));

//END





//SHOPS FUNCTIONALITY

// Define number of products to display per page
const productsPerPage = 9;

// Get product list and pagination elements from HTML
const productList = document.getElementById('product-list');
const pagination = document.getElementById('pagination');

// Set up function to display products for current page
function displayProducts(products, page) {
  // Calculate starting and ending indexes for products on current page
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // Clear previous products from display
  productList.innerHTML = '';

  // Loop through products to display and add to HTML
  for (let i = startIndex; i < endIndex && i < products.length; i++) {
    const product = products[i];
    productList.innerHTML += `
    <article class="plant-item" id="plant" data-price=${product.price.replace(/,/g, "")};>
      <div class="img-container">
        <img src=${product.img} alt=${product.name} class="photo"/>
      </div>
      <div class="item-info">
          <p class="item-next">${product.name}</p>
          <p>&#8369;${product.price}</p>
      </div>  
    </article>
    `;
  }
}

// Set up function to display pagination links
function displayPagination(products, currentPage) {
  // Calculate total number of pages based on number of products and products per page
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Clear previous pagination links from display
  pagination.innerHTML = '';

  // Loop through pages and add pagination links to HTML
  for (let i = 1; i <= totalPages; i++) {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = i;
    link.classList.add('page-link');
    if (i === currentPage) {
      link.classList.add('active');
    }
    link.addEventListener('click', (event) => {
      event.preventDefault();
      displayProducts(products, i);
      displayPagination(products, i);
    });
    pagination.appendChild(link);
  }
}

// Set up sample products data
const products = [
    {
        id: 1,
        img: "/images/shop/plants/1.jpg",
        name: "bamboo palm",
        price: "1,500",
        categories: ["all plants", "indoor plants", "tall", "pet"],
      },
      {
        id: 2,
        img: "/images/shop/plants/2.jpg",
        name: "baston fern",
        price: "500",
        categories: ["all plants", "indoor plants", "table", "medium", "pet"],
      },
      {
        id: 3,
        img: "/images/shop/plants/3.jpg",
        name: "breath easy bundle",
        price: "650",
        categories: ["all plants", "indoor plants", "specials", "table", "sets"],
      },
      {
        id: 4,
        img: "/images/shop/plants/4.jpg",
        name: "brighten your day bundle",
        price: "750",
        categories: ["all plants", "indoor plants", "specials", "table", "sets"],
      },
      {
        id: 5,
        img: "/images/shop/plants/5.jpg",
        name: "butterfly palm",
        price: "1,200",
        categories: ["all plants", "indoor plants", "tall", "pet"],
      },
      {
        id: 6,
        img: "/images/shop/plants/19.jpg",
        name: "cactus",
        price: "800",
        categories: ["all plants", "medium"],
      },
      {
        id: 7,
        img: "/images/shop/plants/6.jpg",
        name: "dracaena anita",
        price: "1,200",
        categories: ["all plants", "indoor plants", "tall"],
      },
      {
        id: 8,
        img: "/images/shop/plants/7.jpg",
        name: "dwarf sansevieria | snake plant",
        price: "300",
        categories: ["all plants", "indoor plants", "specials", "table"],
      },
      {
        id: 9,
        img: "/images/shop/plants/20.jpg",
        name: "fiddle-leaf fig",
        price: "1,500",
        categories: ["all plants", "medium", "tall"],
      },
      {
        id: 10,
        img: "/images/shop/plants/8.jpg",
        name: "golden pothos",
        price: "300",
        categories: ["all plants", "indoor plants", "table"],
      },
      {
        id: 11,
        img: "/images/shop/plants/17.jpg",
        name: "heartleaf philodendron",
        price: "500",
        categories: ["all plants", "table"],
      },
      {
        id: 12,
        img: "/images/shop/plants/9.jpg",
        name: "heartleaf philodendron | special pot",
        price: "400",
        categories: ["all plants", "indoor plants", "specials", "table"],
      },
      {
        id: 13,
        img: "/images/shop/plants/25.jpg",
        name: "licuala grandis",
        price: "1,500",
        categories: ["all plants", "tall", "pet"],
      },
      {
        id: 14,
        img: "/images/shop/plants/21.jpg",
        name: "livistona",
        price: "1,200",
        categories: ["all plants", "indoor plants", "medium", "tall", "pet", "outdoor"],
      },
      {
        id: 15,
        img: "/images/shop/plants/26.jpg",
        name: "macArthur palm",
        price: "1,500",
        categories: ["all plants", "tall"],
      },
      {
        id: 16,
        img: "/images/shop/plants/11.jpg",
        name: "moonshine sansevieria | snake plant",
        price: "400",
        categories: ["all plants", "indoor plants", "specials", "table"],
      },
      {
        id: 17,
        img: "/images/shop/plants/12.jpg",
        name: "peace lily",
        price: "1,300;",
        categories: ["all plants", "indoor plants", "medium"],
      },
      {
        id: 18,
        img: "/images/shop/plants/18.jpg",
        name: "peperomia obtusifolia",
        price: "500",
        categories: ["all plants", "table", "pet"],
      },
          {
        id: 19,
        img: "/images/shop/plants/22.jpg",
        name: "philodendron giganteum",
        price: "1,500",
        categories: ["all plants", "indoor plants", "medium"],
      },
      {
        id: 20,
        img: "/images/shop/plants/23.jpg",
        name: "philodendron selloum",
        price: "1,000",
        categories: ["all plants", "indoor plants", "medium"],
      },
      {
        id: 21,
        img: "/images/shop/plants/27.jpg",
        name: "podocarpus macrophyllus 'Maki'",
        price: "1,000",
        categories: ["all plants", "tall", "outdoor"],
      },
      {
        id: 22,
        img: "/images/shop/plants/13.jpg",
        name: "potted plants collection",
        price: "500",
        categories: ["all plants", "indoor plants", "specials", "table", "gifts"],
      },
      {
        id: 23,
        img: "/images/shop/plants/24.jpg",
        name: "rhapis excelsa",
        price: "1,000",
        categories: ["all plants", "indoor plants", "medium", "pet"],
      },
      {
        id: 24,
        img: "/images/shop/plants/14.jpg",
        name: "snake plant bundle",
        price: "650",
        categories: ["all plants", "indoor plants", "specials", "table", "sets"],
      },
      {
        id: 25,
        img: "/images/shop/plants/15.jpg",
        name: "two hearts bundle",
        price: "750",
        categories: ["all plants", "indoor plants", "specials", "table", "sets"],
      },
      {
        id: 26,
        img: "/images/shop/plants/28.jpg",
        name: "various hebrs",
        price: "450",
        categories: ["all plants", "herbs"],
      },
  // add more products...
];

// Display initial products and pagination on page load
displayProducts(products, 1);
displayPagination(products, 1);

//PRODUCTS PAGINATION


