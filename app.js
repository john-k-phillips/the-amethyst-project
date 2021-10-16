const clickHandler = (isOpening) => {
    const messageContainer = document.querySelector('.messages');
    if (isOpening) {
        messageContainer.style.display = 'flex';
        setTimeout(() => {
            messageContainer.style.opacity = "1";
        }, 120)
    } else {
        messageContainer.style.opacity = "0";
        setTimeout(() => {
            messageContainer.style.display = 'none';
        }, 200)
    }
}


fetch('https://the-amethyst-project-default-rtdb.europe-west1.firebasedatabase.app/data.json')
    .then(response => response.json())
    .then(data => console.log(data));
