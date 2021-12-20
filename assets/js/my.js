// DOM Element
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    names = document.getElementById('name'),
    focus = document.getElementById('focus')


// Show time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();


    // set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'Am';

    // option
    const showAmPm = true;

    // 12 hr Format
    hour = hour % 12 || 12;

    // Output time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm:''}`;
    setTimeout(showTime, 1000)
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and greeting
function setBgGreet() {
    const today = new Date(),
        hour = today.getHours()

    if (hour < 12) {
        // Morninig
        document.body.style.backgroundImage = "url('./assets/img/morning.jpg')";
        greeting.textContent = 'Good Morning';
        document.body.style.color = 'white';
        document.body.style.backgroundRepeat = 'no-repeat';
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('./assets/img/afternoon.jpg')"
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = 'white';
        document.body.style.backgroundRepeat = 'no-repeat';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('./assets/img/night.jpg')"
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';


    }

}

// get focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.localStorage.getItem('focus')
    }
}

function getName() {
    if (localStorage.getItem('name') === null) {
        names.textContent = '[Enter Your Name]'
    } else {
        names.localStorage.getItem('name')
    }
}

// setName
function setName(e) {
    if (e.type === 'keypress') {
        // make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            names.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }

}
// setFocus
function setFocus(e) {
    if (e.type === 'keypress') {
        // make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }

}
names.addEventListener('keypress', setName)
names.addEventListener('blur', setName)

focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)
// Run
showTime();

setBgGreet();

getFocus();
getName();