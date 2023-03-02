// Create an array to hold the meal objects
const mealList = [];

// Get the form element
const form = document.querySelector('form');

// Get the table body element
const tableBody = document.querySelector('tbody');

// Get the search form element
const searchForm = document.querySelectorAll('form')[1];

// Handle form submission
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the meal name input value
  const mealNameInput = document.querySelector('#mealName');
  const mealName = mealNameInput.value;

  // Get the meal description input value
  const mealDescriptionInput = document.querySelector('#mealDescription');
  const mealDescription = mealDescriptionInput.value;

  // Create a new meal object
  const meal = {
    name: mealName,
    description: mealDescription
  };

  // Add the meal object to the meal list
  mealList.push(meal);

  // Clear the form inputs
  mealNameInput.value = '';
  mealDescriptionInput.value = '';

  // Add the meal to the table
  const
