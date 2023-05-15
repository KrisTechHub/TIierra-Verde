const categorySelect = document.querySelector('#catbtn-container');
  
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

    optionBtn.setAttribute("onclick", `showItems("${cat}")`);
    optionBtn.setAttribute("type", "button");
    
}

var listItems = productList.getElementsByTagName('article');

function showItems(cat) { 

    for (let i = 0; i < listItems.length; i++) {
        const itemCategory = listItems[i].getAttribute("data-category");        
          
        if (itemCategory.includes(cat)) {
            listItems[i].style.display = "flex";
            listItems[i].style.flexDirection = "column";
        } else {
            listItems[i].style.display = "none";
        }        
        console.log(itemCategory.includes(cat));


        };

    }






