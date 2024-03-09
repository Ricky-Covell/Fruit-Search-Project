// GLOBAL VARIABLES

const input = document.querySelector('#fruit');
const suggestionsContainer = document.querySelector('.suggestions');
const suggestionsList = suggestionsContainer.querySelector('ul');
let suggestionClass = undefined;

const fruits = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];




// FUNCTIONS

// function that returns an array of all fruits that contain the searchbar string
function search(searchbarText) {
	// edge case for empty string
	if (searchbarText === '') {
		return [];
	}
	
	// returns array of fruits element that contain searchbarText, regardless of case
	return fruits.filter((fruit) => fruit.toLowerCase().includes(searchbarText.toLowerCase()))

}



// function that creates an li for each element matched in fruits array and appends each li to the suggestions ul 	  (up to 5 times)
function displaySuggestions(matches) {
	// loop stops after 5 iterations OR the end of the array
	for (let i = 0; (i < 5) && (i < matches.length); i++) {
		let match = matches[i];
		const newLi = document.createElement('li');
		newLi.classList.add('suggestion')
		newLi.innerText = match;
		suggestionsList.appendChild(newLi);
	}
}



// checks if the element clicked on is an li      (used to avoid triggering an action if a ul is clicked)
function isClickedElementAnLi(event) {
	return event.target.classList[0] === "suggestion"
}


// function that deletes current suggestions 
function clearSuggestions() {
    suggestionsList.innerHTML = '';
}




// EVENT LISTENERS

// handles behavior for when text is typed into the searchbar 
input.addEventListener('keyup', (event) => {
	// delete all text suggestions
	clearSuggestions();

	//gets the current string from the searchbar 
	let currentText = input.value;

	// gets an array of all fruits (alphabetically) that contain the searchbar string
	let matches = search(currentText);

	// creates an li for up to five suggestions, aphabetically, in 'matches' array  
	displaySuggestions(matches);
	
	// reassigns 'suggestion' variable to list of all li's
	suggestionClass = document.querySelectorAll('li');
});






// handles behavior for when a suggestion is clicked
suggestionsList.addEventListener('click', (event) => {
	// IF the element clicked is an li (i.e. a text suggestion)
		// THEN the searchbar text is changed to that suggestion
	if (isClickedElementAnLi(event)) {
		input.value = event.target.innerText;
	}

	// delete all text suggestions
	clearSuggestions();
});



















// PRE-PLANNING 	PRE-PLANNING 	PRE-PLANNING 	PRE-PLANNING 	PRE-PLANNING 	PRE-PLANNING 	PRE-PLANNING 	

	// GLOBAL VARIABLES
		// const fruits = array of fruits

		// let suggestion = undefined  
			// to be assigned after the ul is populated



	// HANDLING PREDICTIVE TEXT BY SEARCHING ARRAY 
		// use an Event Listener on a text input element for 'keyup'
			// clear wordMatchArr
			//  after every 'keyup': for of loop checking if each string  fruits.includes(string in text bar);
				// push each matching word to wordMatchArr;
				// make sure loop is case insensitive 

				

	// HANDLING TEXT BAR PREDICTIVE TEXT DISPLAY
		// after Event Listener 'keyup'
			// add a text display elementt for every matching word under original textbar input
				// maybe cap max predictions at 3-5?

		// 