
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

//display all items when page  loads
window.addEventListener("DOMContentLoaded", function() {
  displayPlantItems(plants);
  displayPlantButtons();
});

displayPlantItems = (plantItems) => {
  let displayPlants = plantItems.map(function(item) {

      return `<article class="plant-item">
          <img src=${item.img} alt=${item.title} class="photo"/>
          <div class="item-info">
              <p class="item-next">${item.category}</p>
              <h4>${item.title}</h4>
          </div>
    </article>`;
  });
  displayPlants = displayPlants.join("");

  sectionCenter.innerHTML = displayPlants;
}

displayPlantButtons = () => {
  const categories = plants.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = categories
    .map(function(category) {
      return `<button type="button" class="filter-btn active" data-id=${category}>
        ${category}
      </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  
  filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = plants.filter(function(menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayPlantItems(plants);
      } else {
        displayPlantItems(menuCategory);
      }
    });
  });
}

