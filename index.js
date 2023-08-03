const learnMoreBtn = document.querySelector(".btn-learn-more");
learnMoreBtn.addEventListener("click", function() {
    alert("Thank you for your interest in our eco-friendly commitment! We are dedicated to creating a positive impact on the environment and your well-being.");
});

function toggleStepContent(stepNumber) {
    const stepContent = document.getElementById(`step${stepNumber}-content`);
    if (stepContent.style.display === "block") {
        stepContent.style.display = "none";
    } else {
        stepContent.style.display = "block";
    }
}

function redirectToAppDownload() {
    // we can change 'your-app-download-url' with the actual URL to download the app
    window.location.href = 'your-app-download-url';
}