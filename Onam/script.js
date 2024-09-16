document.getElementById('word-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const word = document.getElementById('word').value; // Get the input word
    const raceTrack = document.getElementById('race-track'); // The area where letters will move
    raceTrack.innerHTML = ''; // Clear previous letters

    // Loop through each letter of the word
    for (let i = 0; i < word.length; i++) {
        const letterElement = document.createElement('span'); // Create letter span
        letterElement.textContent = word[i]; // Assign letter text
        letterElement.classList.add('letter'); // Add class for styling

        // Randomize initial position of the letters within the race track
        letterElement.style.top = Math.random() * 80 + '%';
        letterElement.style.left = Math.random() * 80 + '%';

        // Add an event listener to make each letter "run away" from the mouse
        letterElement.addEventListener('mouseover', function() {
            // Randomize new position when the letter is hovered
            letterElement.style.top = Math.random() * 80 + '%';
            letterElement.style.left = Math.random() * 80 + '%';
        });

        // Append the letter to the race track
        raceTrack.appendChild(letterElement);
    }

    // Clear input field after starting the race
    document.getElementById('word-form').reset();
});
