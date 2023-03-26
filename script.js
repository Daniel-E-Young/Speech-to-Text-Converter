const recordBtn = document.querySelector(".record"),
    result = document.querySelector(".result"),
    downloadBtn = document.querySelector(".download"),
    inputLanhuage = document.querySelector("#language"),
    clearBtn = document.querySelector(".clear");

let SpeechRecognition = 
    window.SpeechRecognition || window.webkitSpeechRecognition, recognition
    recording=false