const heart = document.getElementById('heart');

heart.addEventListener('click', () => {
    // Create note element
    const note = document.createElement('div');
    note.classList.add('note');

    // Append the note to the body
    document.body.appendChild(note);

    // Add animation end event listener
    note.addEventListener('animationend', () => {
            note.style.animation = 'none';
    });

    // Create a message element
    const message = document.createElement('p');
    message.textContent = 'Happy \nMonthsary \nMi Adiel!';
    note.appendChild(message);

    // Create button 1
    const button1 = document.createElement('button');
    button1.textContent = 'My Message';
    button1.addEventListener('click', () => {
        window.location.href = 'message.html';
    });
    note.appendChild(button1);

    // Create button 2
    const button2 = document.createElement('button');
    button2.textContent = 'My Gift';
    button2.addEventListener('click', () => {
        window.location.href = 'flower.html';
    });
    note.appendChild(button2);

    console.log('xdd');
});
