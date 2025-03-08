// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Mouse Follower Logic
    const cursor = document.getElementById("cursor");
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    // Optional: Scale cursor on hover over interactive elements
    document.querySelectorAll("a, button, .skill").forEach(elem => {
        elem.addEventListener("mouseenter", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
            cursor.style.background = "#cc0000"; // Darker red on hover
        });
        elem.addEventListener("mouseleave", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(1)";
            cursor.style.background = "#ff3333"; // Back to original red
        });
    });

    // Smooth Scrolling for Navbar Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // "Explore My Work" button scrolls to Projects
    document.querySelector("#home .custom-btn").addEventListener("click", function() {
        document.querySelector("#projects").scrollIntoView({
            behavior: "smooth"
        });
    });
});