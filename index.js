const {coffeStock, isCoffeMachineReady} = require('./state');

const makeCoffe = (type, miligrams) => {
    if (coffeStock[type] >= miligrams) {
        console.log('Kopi berhasil dibuat');
    } else {
        console.log('Biji kopi selasih');
    }
}

makeCoffe('robusta', 100);

console.log(isCoffeMachineReady);