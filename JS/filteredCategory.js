  // Display initial products and pagination on page load
const showDiv = document.querySelector('.showDiv')
showDiv.addEventListener("click", () => {
    if (categorySelect.style.display === "flex") {
        categorySelect.style.display = "none";
    } else {
        categorySelect.style.display = "flex";
        categorySelect.style.flexDirection = "column";
    };

    catButtons();
});



const categorySelect = document.querySelector('#catbtn-container');
const categories = [];
for (const product of products) {
    for (const cat of product.categories) {
        const isExists = categories.includes(cat)
        if (!isExists) {
            categories.push(cat)
        };


    }
};

catButtons = () => {

for (const cat of categories) {
    const optionBtn = document.createElement("button")
    optionBtn.append(cat)
    categorySelect.appendChild(optionBtn)

    optionBtn.classList.add("filterbtn");
    optionBtn.setAttribute("data-category", cat);
    optionBtn.setAttribute("type", "button");
}

const filterBtn = categorySelect.querySelectorAll(".filterbtn");


    filterBtn.addEventListener("click", function(e) {
        const category = e.currentTarget.dataset.id;
        const plantCategory = products.filter(function(plantItem) {
        if (cat === category) {
            return plantItem;
        } 
        });

        if (cat === "all plants") {
            displayPlantItems(plants);
          } else {
            displayPlantItems(plantCategory);
          }

    });


};




