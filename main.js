(function () {
    "use strict";

    const tabItems = document.querySelectorAll('.tab-item');
    const tabContentItem = document.querySelectorAll('.tab-content-item');

    // Remove bottm borders from all tab items
    function removeBorder() {
        tabItems.forEach(item => {
            item.classList.remove('tab-border');
        });
    }

    // Remove show class from all content items
    function removeShow() {
        tabContentItem.forEach((item) => {
            item.classList.remove('show');
        });
    }

    // Select tab content item
    function selectItem(e) {
        removeBorder();
        removeShow();
        // Add border to current tab
        this.classList.add('tab-border');
        // Grab content iten from DOM
        const tabContentItem = document.querySelector(`#${this.id}-content`);
        // Add show class
        if (tabContentItem) {
            tabContentItem.classList.add('show');
        }
    }

    // Listen for Tab click
    tabItems.forEach((item) =>{
        item.addEventListener('click', selectItem);
    });
    
})();