const plants = [
    {
      id: 1,
      title: "tropical",
      category: "landscape-design",
      img: "/images/landscaping/3.jpg",
        },
    {
      id: 2,
      title: "zen garden",
      category: "landscape-design",
      img: "/images/landscaping/4.jpg",
    },
    {
      id: 3,
      title: "lanai",
      category: "lanai",
      img: "/images/landscaping/5.jpg",
    },
    {
      id: 4,
      title: "ancestral house",
      category: "landscape-design",
      img: "/images/landscaping/6.jpg",
    },
    {
      id: 5,
      title: "modern house",
      category: "landscape-design",
      img: "/images/landscaping/7.jpg",
    },
    {
      id: 6,
      title: "courtyard",
      category: "landscape-design",
      img: "/images/landscaping/8.jpg",
    },
    {
      id: 7,
      title: "potted garden",
      category: "landscape-design",
      img: "/images/landscaping/9.jpg",
    },
    {
      id: 8,
      title: "expo booth",
      category: "booth-design", 
      img: "/images/landscaping/10.jpg",
    }
  ];
  
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
      ["all plants"]
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

