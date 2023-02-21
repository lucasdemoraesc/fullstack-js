const keyboard = {
    keys: 100,
    connecttionType: "usb"
} as const; // Faz com que todo o objeto seja somente leitura

// keyboard.connecttionType = "ps2";

console.log(keyboard);
