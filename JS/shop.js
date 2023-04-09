//PRICE RANGE FUNCTIONALITY
// Get range input element, output element, and list element
const priceRange = document.getElementById('priceRange');
const priceOutput = document.getElementById('priceOutput');
const priceList = document.getElementById('priceList');

// Add event listener for input changes
priceRange.addEventListener('input', function() {
  // Get range value
  var rangeValue = parseInt(priceRange.value);

  // Update output element
  priceOutput.innerHTML = 'Price: &#8369;300 - &#8369;' + rangeValue;

  // Get list items and loop through them
  var listItems = priceList.getElementsByTagName('li');
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
const plants = [
    {
      id: 1,
      img: "/images/shop/1.jpg",
      name: "bamboo palm",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 2,
      img: "/images/shop/2.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 3,
      img: "/images/shop/3.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 4,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 5,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 6,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 7,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 8,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 9,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 10,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 11,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 12,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 13,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 14,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 15,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 16,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 17,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 18,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
        {
      id: 19,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 20,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 21,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 22,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 23,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 24,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 25,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
    {
      id: 26,
      img: "/images/shop/1.jpg",
      price: "tropical",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab"],
    },
  ];
  