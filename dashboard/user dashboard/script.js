document.addEventListener("DOMContentLoaded", () => {
    const barChart = new Chart(document.getElementById("barChart"), {
        type: 'bar',
        data: {
            labels: ["Dog", "Cat", "Cow", "Bird", "Other"],
            datasets: [{
                label: "Cases",
                data: [5, 2, 3, 1, 1],
                backgroundColor: "#ff6600"
            }]
        }
    });

    const lineChart = new Chart(document.getElementById("lineChart"), {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
            datasets: [{
                label: "Cases Reported",
                data: [2, 3, 5, 1, 4],
                borderColor: "#ff6600",
                fill: false
            }]
        }
    });

    const pieChart = new Chart(document.getElementById("pieChart"), {
        type: 'pie',
        data: {
            labels: ["Resolved", "Pending"],
            datasets: [{
                data: [7, 5],
                backgroundColor: ["#4CAF50", "#FF5722"]
            }]
        }
    });

    document.getElementById("themeToggle").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});
