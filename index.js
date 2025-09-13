const DARK_MODE_TOGGLE_TEXT = 'Click here for dark mode!'
const LIGHT_MODE_TOGGLE_TEXT = 'Click here for light mode!'

const DARK_TEXT_COLOR = "rgb(17, 17, 119)"
const LIGHT_TEXT_COLOR = "rgb(237, 227, 172)"

$('document').ready(function(){
    $('#darkModeToggle').on("click", toggleDarkMode);
    $('#darkModeToggle').val(getDarkModeValue());
    initializeDarkMode();
});

function initializeDarkMode() {
    if ($('#darkModeToggle').val() === 'dark') {
        console.log("Dark mode initialized.")
        changeTextColor(LIGHT_TEXT_COLOR)
        changeBackgroundColor(DARK_TEXT_COLOR)
    } else {
        console.log("Light mode initialized.")
        changeTextColor(DARK_TEXT_COLOR)
        changeBackgroundColor(LIGHT_TEXT_COLOR)
    }   
}

function toggleDarkMode() {
    if ($('#darkModeToggle').val() === 'dark') {
        console.log("Light mode enabled.")
        changeTextColor(DARK_TEXT_COLOR)
        changeBackgroundColor(LIGHT_TEXT_COLOR)
        $('#darkModeToggle').val('light');
    } else {
        console.log("Dark mode enabled.")
        changeTextColor(LIGHT_TEXT_COLOR)
        changeBackgroundColor(DARK_TEXT_COLOR)
        $('#darkModeToggle').val('dark');
    }   
}

function getDarkModeValue() {
    if (isDarkModeEnabled()) {
        return 'dark'
    } else {
        return 'light'
    }
}

function isDarkModeEnabled() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

function changeTextColor(color) {
    $(":root").css('color', color)
}

function changeBackgroundColor(color) {
    $(":root").css('background-color', color)
}