function getLocation() {
    let locationSelect = document.getElementById("locationSelect");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;

                // Set the detected location in the dropdown
                locationSelect.innerHTML = `
                    <option value="${latitude},${longitude}">Your Location: ${latitude}, ${longitude}</option>
                `;

            },
            (error) => {
                showError(error);
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showError(error) {
    let locationSelect = document.getElementById("locationSelect");
    
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            locationSelect.innerHTML = `<option value="">Permission Denied</option>`;
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            locationSelect.innerHTML = `<option value="">Location Unavailable</option>`;
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            locationSelect.innerHTML = `<option value="">Location Timeout</option>`;
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            locationSelect.innerHTML = `<option value="">Unknown Error</option>`;
            break;
    }
}
