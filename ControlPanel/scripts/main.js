const dropdownBtn = document.querySelector(".triangleButton");

function toggleDropdown(){
    document.querySelector(".DistrictList").classList.toggle("active");
}

dropdownBtn.addEventListener("click", toggleDropdown);

const listItem = document.querySelectorAll(".DistrictList ul li");
const dropDownDisplay = document.querySelector(".dropdownDisplayField h1");


listItem.forEach(function(item){
    item.addEventListener("click", () => {
        dropDownDisplay.innerHTML = item.innerHTML;
        toggleDropdown();
    });
});
