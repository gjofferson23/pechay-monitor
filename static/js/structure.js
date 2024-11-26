// Toggle Sidebar functionality
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Simulating sensor data updates
function updateSensorData() {
    document.getElementById('temperature').textContent = (Math.random() * 30).toFixed(2) + " °C";
    document.getElementById('humidity').textContent = (Math.random() * 100).toFixed(2) + " %";
    document.getElementById('ph-level').textContent = (Math.random() * 14).toFixed(2);
    document.getElementById('lighting-level').textContent = (Math.random() * 1000).toFixed(2) + " lux";
    document.getElementById('nutrient-level').textContent = (Math.random() * 500).toFixed(2) + " ppm";
    document.getElementById('water-quality').textContent = (Math.random() * 10).toFixed(2);
}

// Update sensor data every 2 seconds
setInterval(updateSensorData, 2000);

// Ventilation control toggle
document.getElementById('toggle-ventilation').addEventListener('click', function () {
    this.textContent = this.textContent === "Toggle Ventilation" ? "Ventilation ON" : "Toggle Ventilation";
});

// Camera functionality
let cameraStream = null; // To store the camera stream

document.addEventListener("DOMContentLoaded", () => {
    const videoElement = document.getElementById("camera-feed");
    const cameraToggleButton = document.getElementById("toggle-camera");

    // Function to start the camera
    function startCamera() {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                cameraStream = stream;
                videoElement.srcObject = stream;
                cameraToggleButton.textContent = "Turn Camera Off";
            })
            .catch((error) => {
                console.error("Error accessing camera: ", error);
                alert("Unable to access the camera. Please check permissions.");
            });
    }

    // Function to stop the camera
    function stopCamera() {
        if (cameraStream) {
            cameraStream.getTracks().forEach((track) => track.stop());
            videoElement.srcObject = null;
            cameraStream = null;
            cameraToggleButton.textContent = "Turn Camera On";
        }
    }

    // Toggle camera on/off
    cameraToggleButton.addEventListener("click", () => {
        if (cameraStream) {
            stopCamera();
        } else {
            startCamera();
        }
    });
});
