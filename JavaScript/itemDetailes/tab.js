"use stict";

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    //Change Active Tabe Color
    tabs.forEach((e) => {
      e.classList.remove("active");
    });
    tab.classList.add("active");

    // Tab We Clicked on
    const target = document.querySelector(tab.dataset.tabTarget);

    // Making All The Tabs Disappear
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active-content");
    });

    // Only Show the Content Of That Tab we Clicked
    target.classList.add("active-content");
  });
});
