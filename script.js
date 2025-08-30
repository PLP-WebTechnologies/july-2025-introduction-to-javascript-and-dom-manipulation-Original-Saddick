// ============================================================================
// Part 1: Variable Declarations and Conditionals
// ============================================================================

// Variable declarations for consultancy information
const consultancyName = "Best Aid Educonsult";
const establishedYear = 2020;
let isAcceptingNewClients = true;

// Conditional statement to check if the consultancy is accepting new clients
if (isAcceptingNewClients) {
    console.log(`${consultancyName} is currently accepting new clients.`);
} else {
    console.log(`${consultancyName} is not accepting new clients at the moment.`);
}

// ============================================================================
// Part 2: Custom Functions
// ============================================================================

/**
 * Generates a welcome message based on the current time of day.
 * @returns {string} A personalized welcome message.
 */
function getWelcomeMessage() {
    const now = new Date();
    const hour = now.getHours();
    let message;

    if (hour < 12) {
        message = "Good Morning! Welcome to Best Aid Educonsult.";
    } else if (hour < 18) {
        message = "Good Afternoon! Welcome to Best Aid Educonsult.";
    } else {
        message = "Good Evening! Welcome to Best Aid Educonsult.";
    }
    return message;
}

/**
 * Displays an alert with more information when the "Learn More" button is clicked.
 */
function showMoreInfo() {
    alert("Thank you for your interest! We offer a range of services to help you with your educational journey, from university applications to visa assistance.");
}


// ============================================================================
// Part 3: Loop Examples
// ============================================================================

// An array of services offered by the consultancy
const services = [
    "University Selection",
    "Application Assistance",
    "Visa Guidance",
    "Scholarship Support",
    "Career Counseling"
];

// A 'for' loop to create and display service items on the webpage
const serviceContainer = document.getElementById('service-container');
for (let i = 0; i < services.length; i++) {
    const serviceItem = document.createElement('div');
    serviceItem.className = 'service-item';
    serviceItem.textContent = services[i];
    serviceContainer.appendChild(serviceItem);
}

// A 'while' loop to countdown to a fictional application deadline
let daysUntilDeadline = 5;
console.log("Application deadline countdown:");
while (daysUntilDeadline > 0) {
    console.log(`${daysUntilDeadline} days remaining.`);
    daysUntilDeadline--;
}
console.log("The application deadline has passed.");


// ============================================================================
// Part 4: DOM Interactions
// ============================================================================

// 1. Get an element by its ID and change its content
const welcomeMessageElement = document.getElementById('welcome-message');
welcomeMessageElement.textContent = getWelcomeMessage();

// 2. Get an element by its ID and add an event listener
const ctaButton = document.getElementById('cta-button');
ctaButton.addEventListener('click', showMoreInfo);

// 3. Get an element by its ID and change its style
const contactInfoElement = document.getElementById('contact-info');
contactInfoElement.style.fontWeight = 'bold';