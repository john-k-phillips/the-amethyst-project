let amyScore = 0;
let shambleScore = 0;

const messageList = document.querySelector('.message-list');

fetch('https://the-amethyst-project-default-rtdb.europe-west1.firebasedatabase.app/data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach((day, index) => {
            generateMessage(day.firstMessage, day.amyMessage, day.shamblesMessage, index + 1, day.pointTo);
            if (day.pointTo === 'amy') {
                amyScore++;
            } else {
                shambleScore++;
            }
        })

        const shamblesScorePT = document.querySelector('#shambles-score');
        const amyScorePT = document.querySelector('#amy-score');

        shamblesScorePT.innerHTML = shambleScore
        amyScorePT.innerHTML = amyScore
    });

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

const generateMessage = (firstMessage, amyMsg, shamblesMsg, day, pointTo) => {
    // DEFINE ELEMENTS
    const messageCard = document.createElement('div');
    const dayHeading = document.createElement('h3');
    const shamblesContentContainer = document.createElement('div');
    const amyContentContainer = document.createElement('div');
    const shamblesText = document.createElement('p');
    const shamblesName = document.createElement('span');
    const amyText = document.createElement('p');
    const amyName = document.createElement('span');

    const whosPoint = document.createElement('div');


    // DEFINE CLASSES
    messageCard.classList.add('message-card');
    shamblesContentContainer.classList.add('shambles')
    shamblesContentContainer.classList.add('content-container')
    amyContentContainer.classList.add('amy')
    amyContentContainer.classList.add('content-container')
    amyName.classList.add('indent-amy');
    whosPoint.classList.add('point-container');

    // ADD CONTENT
    dayHeading.innerHTML = `DAY ${day}`;
    shamblesText.innerHTML = shamblesMsg;
    amyText.innerHTML = amyMsg;
    amyName.innerHTML = 'AMY';
    shamblesName.innerHTML = 'SHAMBLES';
    whosPoint.innerHTML = '+1';

    if (window.screen.width > 1440) {
        if (firstMessage == 'shambles') {
            dayHeading.style.textAlign = 'left';
        } else {
            dayHeading.style.textAlign = 'right';
        }
    } else {
        dayHeading.style.textAlign = 'center';
    }


    // APPEND TO DOCUMENT
    messageCard.appendChild(dayHeading);
    messageCard.appendChild(shamblesContentContainer)
    shamblesContentContainer.appendChild(shamblesName);
    shamblesContentContainer.appendChild(shamblesText);
    if (pointTo === 'shambles') {
        shamblesContentContainer.appendChild(whosPoint);
    }
    messageCard.appendChild(amyContentContainer);
    amyContentContainer.appendChild(amyName);
    amyContentContainer.appendChild(amyText);
    if (pointTo === 'amy') {
        amyContentContainer.appendChild(whosPoint);
    }
    messageList.appendChild(messageCard);


}