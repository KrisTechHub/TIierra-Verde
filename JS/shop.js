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
      price: "&#8369;1,500",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 2,
      img: "/images/shop/2.jpg",
      name: "baston fern",
      price: "&#8369;500",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 3,
      img: "/images/shop/3.jpg",
      name: "breath easy bundle",
      price: "&#8369;650",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 4,
      img: "/images/shop/4.jpg",
      name: "brightem your day bundle",
      price: "&#8369;750",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 5,
      img: "/images/shop/5.jpg",
      name: "butterfly palm",
      price: "&#8369;1,200",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 6,
      img: "/images/shop/19.jpg",
      name: "cactus",
      price: "&#8369;800",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 7,
      img: "/images/shop/6.jpg",
      name: "dracaena anita",
      price: "&#8369;1,200",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 8,
      img: "/images/shop/7.jpg",
      name: "dwarf sansevieria | snake plant",
      price: "&#8369;300",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 9,
      img: "/images/shop/20.jpg",
      name: "fiddle-leaf fig",
      price: "&#8369;3,500",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 10,
      img: "/images/shop/8.jpg",
      name: "golden pothos",
      price: "&#8369;300",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 11,
      img: "/images/shop/17.jpg",
      name: "heartleaf philodendron",
      price: "&#8369;500",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 12,
      img: "/images/shop/9.jpg",
      name: "heartleaf philodendron | special pot",
      price: "&#8369;400",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 13,
      img: "/images/shop/25.jpg",
      name: "licuala grandis",
      price: "&#8369;1,500",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 14,
      img: "/images/shop/21.jpg",
      name: "livistona",
      price: "&#8369;1,200",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 15,
      img: "/images/shop/26.jpg",
      name: "macArthur palm",
      price: "&#8369;1,500",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 16,
      img: "/images/shop/11.jpg",
      name: "moonshine sansevieria | snake plant",
      price: "&#8369;400",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 17,
      img: "/images/shop/12.jpg",
      name: "peace lily",
      price: "&#8369;1,300;",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 18,
      img: "/images/shop/18.jpg",
      name: "peperomia obtusifolia",
      price: "&#8369;500",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
        {
      id: 19,
      img: "/images/shop/22.jpg",
      name: "philodendron giganteum",
      price: "&#8369;1,500",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 20,
      img: "/images/shop/23.jpg",
      name: "philodendron selloum",
      price: "&#8369;1,000",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 21,
      img: "/images/shop/27.jpg",
      name: "podocarpus macrophyllus 'Maki'",
      price: "&#8369;1,000",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 22,
      img: "/images/shop/13.jpg",
      name: "potted plants collection",
      price: "&#8369;500",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 23,
      img: "/images/shop/24.jpg",
      name: "rhapis excelsa",
      price: "&#8369;1,000",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 24,
      img: "/images/shop/14.jpg",
      name: "snake plant bundle",
      price: "&#8369;650",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 25,
      img: "/images/shop/15.jpg",
      name: "two hearts bundle",
      price: "&#8369;750",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
    {
      id: 26,
      img: "/images/shop/28.jpg",
      name: "various hebrs",
      price: "&#8369;450",
      categories: ["indoor", "specials", "table", "medium", "tall", "pet", "herbs", "outdoor", "sets", "collab", "all"],
    },
  ];
  