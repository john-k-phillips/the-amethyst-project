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
        }, 120)
    }
}