const recordBtn = document.querySelector(".record"),
    result = document.querySelector(".result"),
    downloadBtn = document.querySelector(".download"),
    inputLanhuage = document.querySelector("#language"),
    clearBtn = document.querySelector(".clear");

let SpeechRecognition = 
    window.SpeechRecognition || window.webkitSpeechRecognition, recognition
    recording = false;

    function populateLanguage() {
        languages.forEach(lang)=> {
            const option = document.createElement("option");
            option.value = lang.code;
            option.innerHTML = lang.name;
            inputLanguage.appendChild(option)
        });
    }

    populateLanguages();

    function speechToText() {
        try {
            recognition = new SpeechRecognition();
            recognition.lang = inputLanguage.value;
            recognition.interimResult = true;
            recordBtn.classList.add("recording");
            recordBtn.querySelector("p").innerHTML = "Listening...";
            recognition.start();
            recognition.onresult = (event) => {
                const speechResult = event.result[0][0].transcript;
                //detect when interim results
                if (event.result)

            }
        }
    }