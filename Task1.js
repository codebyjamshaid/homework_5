let hoverCount = 0;
const targetDiv = document.querySelector("#hoverDiv");

targetDiv.addEventListener("mouseover", () => {
    hoverCount++;
    if (hoverCount > 5) {
        alert("You are an anonymous user");
        document.body.style.backgroundColor = "red";
        // Reset hover count to prevent multiple alerts
        hoverCount = 0;
    }
});