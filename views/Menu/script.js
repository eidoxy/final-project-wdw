// Create a varbable for select a buttons and menu
const filterButtons = document.querySelectorAll(".filter-btn button");
const filterableMenu = document.querySelectorAll(".filterable-menu");

// Define a function for filter menu
const filterMenu = e => {
    document.querySelector(".active").classList.remove("active", "active");
    e.target.classList.add("active");

    // Iterate over each filterable menu
    filterableMenu.forEach(menu => {
        // Add "hide" class for each menu to hide them
        menu.classList.add("hide");
        // Check if the menu are selected with filter "all"
        if (menu.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            menu.classList.remove("hide");
        }
    });
};

// Add click listener to each filter button
filterButtons.forEach(button => button.addEventListener("click", filterMenu));