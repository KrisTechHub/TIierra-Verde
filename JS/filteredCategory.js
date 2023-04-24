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
}

console.log('categories', categories);