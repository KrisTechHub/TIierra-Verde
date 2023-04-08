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