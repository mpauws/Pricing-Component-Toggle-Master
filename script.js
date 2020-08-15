const toggleSwitch = document.getElementById("switch");
const monthlyPricing = document.getElementsByClassName("monthly-pricing");
const annualPricing = document.getElementsByClassName("annual-pricing");

const displayToggle = (pricingCategory, displaySwitch) => {
   [...pricingCategory].forEach((element) => {
      element.style.display = displaySwitch;
   });
};

toggleSwitch.addEventListener("change", () => {
   if (toggleSwitch.checked) {
      displayToggle(monthlyPricing, "none");
      displayToggle(annualPricing, "block");
   } else {
      displayToggle(monthlyPricing, "block");
      displayToggle(annualPricing, "none");
   }
});
