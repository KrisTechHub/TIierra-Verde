const menu = [
    {
      id: 1,
      title: "tropical",
      category: "landscape design",
      img: "/images/landscaping/3.jpg",
        },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      img: "/images/landscaping/4.jpg",
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      img: "/images/landscaping/5.jpg",
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      img: "/images/landscaping/6.jpg",
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      img: "/images/landscaping/7.jpg",
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      img: "/images/landscaping/8.jpg",
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      img: "/images/landscaping/9.jpg",
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      img: "/images/landscaping/10.jpg",
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      img: "/images/landscaping/11.jpg",
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      img: "/images/landscaping/12.jpg",
    },
  ];
  
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  
  //display all items when page  loads
  window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
    displayMenuButtons();
  });
  
  displayMenuItems = (menuItems) => {
    let displayMenu = menuItems.map(function(item) {
  
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo"/>
        <div class="item-info">
            <p class="item-next">${item.category}</p>
            <h4>${item.title}</h4>
        </div>
      </article>`;
    });
    displayMenu = displayMenu.join("");
  
    sectionCenter.innerHTML = displayMenu;
  }
  
  displayMenuButtons = () => {
    const categories = menu.reduce(
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
        return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    
    filterBtns.forEach(function(btn) {
      btn.addEventListener("click", function(e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem) {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          displayMenuItems(menu);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
  }