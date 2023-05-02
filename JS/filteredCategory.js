  // Display initial products and pagination on page load
const showDiv = document.querySelector('.showDiv')
showDiv.addEventListener("click", () => {
    if (categorySelect.style.display === "flex") {
        categorySelect.style.display = "none";
    } else {
        categorySelect.style.display = "flex";
        categorySelect.style.flexDirection = "column";
    };
});



const categorySelect = document.querySelector('#category');
const categories = [];
for (const product of products) {
    for (const cat of product.categories) {
        const isExists = categories.includes(cat)
        if (!isExists) {
            categories.push(cat)
        };


    }
};



for (const cat of categories) {
    const optionBtn = document.createElement("button")
    optionBtn.append(cat)
    categorySelect.appendChild(optionBtn)

    optionBtn.classList.add("filterbtn");
    optionBtn.setAttribute("data-id", cat);
    optionBtn.setAttribute("type", "button");
    optionBtn.setAttribute("onclick", filteredProds(catName));
};


function filteredProds(catName) {
    let filteredProds = []
    for (let index = 0; index < products.length; index++) {
        if (products[index].cat === "pet") {
            filteredProds.push(products[i])
        }
    }
    filteredProds(catName);
}

const filterBtn = categorySelect.querySelectorAll(".filterbtn");

filterBtn.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      const category = e.currentTarget.dataset.id;
      const plantCategory = plants.filter(function(plantItem) {
        if (plantItem.category === category) {
          return plantItem;
        } 
      });

      if (category === "all") {
        displayPlantItems(plants);
      } else {
        displayPlantItems(plantCategory);
      }
    });
  });