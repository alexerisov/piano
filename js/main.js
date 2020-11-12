let keyCodes = {
    KeyA: "A",
    KeyS: "S",
    KeyD: "D",
    KeyF: "F",
    KeyG: "G",
    KeyH: "H",
    KeyJ: "J",
    KeyW: "W",
    KeyE: "E",
    KeyT: "T",
    KeyY: "Y",
    KeyU: "U",

};

document.addEventListener("keydown", event => {
    if (event.code in keyCodes) {
        let audio = new Audio(`./audio/${keyCodes[event.code]}.mp3`)
        audio.play();
        //console.log(`The '${keyCodes[event.code]}' key is pressed`);
    } else {
        console.log(`The unbound key is pressed`);
    }
});
