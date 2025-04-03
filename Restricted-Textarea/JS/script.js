const textArea = document.getElementById("text-area");
// Selects the textarea input field by its ID
// and assigns it to the variable textArea. 
const charCount = document.getElementById("char-count");
// Selects the element that displays the character count by its ID
// and assigns it to the variable charCount.
const maxChars = 150;
// Sets the maximum number of characters allowed in the textarea.
// This can be adjusted as needed.

textArea.addEventListener("input", () => {
    // Adds an event listener to the textarea that listens for input events.
    // When the user types in the textarea, this function will be executed.
    let textLength = textArea.value.length;
    // Gets the current length of the text in the textarea.
    // The value of the textarea is accessed using textArea.value.  
    
    if (textLength > maxChars) {
        // If the length of the text exceeds the maximum allowed characters,
        // the following code will execute.
        textArea.value = textArea.value.substring(0, maxChars);
        // The text in the textarea is truncated to the maximum allowed characters.
        // The substring method is used to get a portion of the string. So it basically
        // takes the first (150) maxChars characters from the textArea.value, and cuts off the rest.
        textLength = maxChars;
        // The length of the text is set to the maximum allowed characters.
    }

    charCount.textContent = `${textLength} / ${maxChars}`;
    // Updates the character count display with the current length of the text
    // and the maximum allowed characters.

    if (textLength === maxChars) {
        // If the length of the text is equal to the maximum allowed characters,
        // the following code will execute.
        textArea.classList.add("limit-reached");
        // Adds a CSS class to the textarea to indicate that the limit has been reached.
        // This class can be styled in CSS to change the appearance of the textarea.
    } else {
        // If the length of the text is less than the maximum allowed characters,
        textArea.classList.remove("limit-reached");
        // Removes the CSS class that indicates the limit has been reached.
        // This ensures that the textarea returns to its normal appearance.
    }
});
