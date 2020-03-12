function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

function stringToEgg(string) {
    string = Array.from(string);
    let binary = "";
    let egg = "";
    let egger = 0;

    string.forEach((char, i) => {
        binary += dec2bin(char.charCodeAt());
        if (i !== string.length - 1) binary += " ";
    });

    Array.from(binary).forEach(num => {
        if (num.trim() != "") {
            if (egger % 3 == 0) {
                egg += num == 1 ? "E" : "e";
            } else {
                egg += num == 1 ? "G" : "g";
            }

            egger++;
        } else {
            egg += " ";
        }
    });

    return egg;
}

function eggToString(egg) {
    let output = "";
    let chunks = egg.split(" ");

    chunks.forEach(chunk => {
        output +=
            String.fromCharCode(
                parseInt(
                    Array.from(chunk).map(char => {
                        if (char.trim() != "") {
                            return char.toLowerCase() == char ? "0" : "1";
                        }
                    }).join(""),
                    2)
            );
    })

    return output;
}

let inputForm = document.querySelector('#input');
let outputForm = document.querySelector('#output');

inputForm.addEventListener('input', e => {
    outputForm.value = stringToEgg(e.target.value);
})

outputForm.addEventListener('input', e => {
    inputForm.value = eggToString(e.target.value);
})

