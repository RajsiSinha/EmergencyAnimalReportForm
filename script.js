// Handle form submission
document.getElementById('animalReportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Show the loading spinner
    document.getElementById('loadingSpinner').style.display = 'block';

    // Collecting form data
    const location = document.getElementById('location').value;
    const dateTime = document.getElementById('dateTime').value;
    const animalType = document.getElementById('animalType').value;
    const severity = document.getElementById('severity').value;
    const animalImage = document.getElementById('animalImage').files[0];
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // For demonstration: Log the form data to console
    console.log("Location:", location);
    console.log("Date and Time:", dateTime);
    console.log("Animal Type:", animalType);
    console.log("Severity:", severity);
    console.log("Animal Image:", animalImage ? animalImage.name : "No image uploaded");
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);

    // Simulating a delay to show the loading spinner
    setTimeout(function() {
        // Hide loading spinner and show success message
        document.getElementById('loadingSpinner').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
    }, 2000);
});

// Handle current location button click
document.getElementById('getLocation').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            document.getElementById('location').value = `Latitude: ${latitude}, Longitude: ${longitude}`;
        }, function(error) {
            alert("Unable to retrieve location. Please enter it manually.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

// Image Preview Feature
document.getElementById('animalImage').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.style.display = 'block';
        imagePreview.src = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});
