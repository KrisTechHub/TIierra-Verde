  // Display initial products and pagination on page load

const categories = [];

for (const product of products) {
    for (const cat of product.categories) {
        const isExists = categories.includes(cat)
        if (!isExists) {
            categories.push(cat)
        } 
    }
}

const categorySelect = document.querySelector('#category')

    for (const cat of categories) {
        const option = document.createElement("a")
        option.append(cat)
        categorySelect.appendChild(option)

        option.classList.add("filterbtn");
    
        const filterBtn = document.querySelectorAll(".filter-btn");

        filterBtn.forEach(function(btns) {
            btns.addEventListener("click", function(e) {
                const category = e.currentTarget.dataset.id;
                const plantCategory = products.filter(function(plantsItem) {
                    if (plantsItem.category === category) {
                      return plantsItem;
                    }
                });
                
                if (category === "all plants") {
                    displayProducts(products, 1)
                } else {
                    displayPlantItems(plantCategory, 1);
                }
            })
        })

}


const showDiv = document.querySelector('.showDiv')

showDiv.addEventListener("click", (e) => {
    if (categorySelect.style.display === "flex") {
        categorySelect.style.display = "none";
    } else {
        categorySelect.style.display = "flex";
        categorySelect.style.flexDirection = "column";
    };


});
