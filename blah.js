let darkMode = false;

function toggleMode(){
    document.querySelectorAll('.song').forEach(function(song){
        song.classList.toggle('dark')
    })

    document.body.classList.toggle('dark');
    document.querySelector('nav').classList.toggle('dark');
    document.querySelector('button').classList.toggle('dark')

    darkMode = !darkMode

    if (darkMode){
        document.querySelector('button').innerHTML = 'Light Mode'
    }else{
        document.querySelector('button').innerHTML = 'Dark Mode'
    }
}

function saveSettings(){
    localStorage.setItem('darkmode', darkMode)
}


function loadSettings(){
    if(localStorage.getItem('darkmode') === 'true'){
        toggleMode(document.querySelector('button'))
    }
}

window.addEventListener('beforeunload', saveSettings)

document.addEventListener('DOMContentLoaded', loadSettings)

document.querySelector('button').addEventListener('click', toggleMode)