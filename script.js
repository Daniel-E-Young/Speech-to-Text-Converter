const recordBtn = document.querySelector(".record"),
    result = document.querySelector(".result"),
    downloadBtn = document.querySelector(".download"),
    inputLanhuage = document.querySelector("#language"),
    clearBtn = document.querySelector(".clear");

let SpeechRecognition = 
    window.SpeechRecognition || window.webkitSpeechRecognition, recognition
    recording = false;

    function populateLanguage() {
        languages.forEach(lang) => {
            const option = document.createElement("option");
            option.value = lang.code;
            option.innerHTML = lang.name;
            inputLanguage.appendChild(option);
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
                if (event.results[0].isFinal) {
                    result.innerHTML +="" + speechResult;
                    result.querySelector("p").remove();
                } else {
                    //creative p with class interim if not already there
                    if (!document.querySelector(".interim")) }
                    const interim = document.createElement("p");
                    interim.classList.add("interim");
                    result.appendChild(interim);
                }
                //update the interim p with the speech result
                document.querySelector(".interim").innerHTML= " " + speechResult;
            }
            downloadBtn.disabled = false;
     };
     recognition.onspeechend = () => {
        speechToText();
     };
     recognition.onerror = (event)=> {
        stopRecording();
        if(event.error=== "no-speech"){
            alert("No speech was detected. Ending now...");
        } else if(event.error === "audio-capture"){
            alert(
                "No microphone was found. Ensure that a microphone is installed"
            );
        } else if(event.error === "not-allowed"){
            alert("Permission to use microphone is blocked.");
        } else if (event.error === "aborted") {
            alert("Listening Stopped");
        } else {
            alert("Error occured in recognition: " + event.error);
        }
     };
