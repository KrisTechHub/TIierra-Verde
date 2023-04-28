  // Display initial products and pagination on page load

const categories = [];
for (const product of products) {
    for (const cat of product.categories) {
        const isExists = categories.includes(cat)
        if (!isExists) {
            categories.push(cat)
        } 
    }
};


const categorySelect = document.querySelector('#category')
for (const cat of categories) {
    const option = document.createElement("a")
    option.append(cat)
    categorySelect.appendChild(option)

    option.classList.add("filterbtn");
    option.setAttribute("data-id", cat)
};


const showDiv = document.querySelector('.showDiv')
showDiv.addEventListener("click", () => {
    if (categorySelect.style.display === "flex") {
        categorySelect.style.display = "none";
    } else {
        categorySelect.style.display = "flex";
        categorySelect.style.flexDirection = "column";
    };
});


const filterBtn = document.getElementsByClassName(".filter-btn");
filterBtn.addEventListener("click", (e) => {
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
console.log("working");
