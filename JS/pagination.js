//PRICE RANGE FUNCTIONALITY

// Get range input element, output element, and list element
const priceRange = document.getElementById('priceRange');
const priceOutput = document.getElementById('priceOutput');
// Define number of products to display per page
const productsPerPage = 9;

// Get product list and pagination elements from HTML
const productList = document.getElementById('product-list');
const pagination = document.getElementById('pagination');

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



//PAGINATION

window.addEventListener("DOMContentLoaded", function() {
    displayProducts(products, 1);
    displayPagination(products, 1);
  });

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
  };

  

  