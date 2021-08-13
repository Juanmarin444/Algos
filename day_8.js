function processData(input) {
    input = input.split('\n')
    input = input.join(' ')
    input = input.split(' ')
    let phoneBook = {}
    for (var i = 1; i <= (input[0] * 2); i+=2) {
        let key = input[i];
        let value = input[i + 1];
        phoneBook[key] = value;
    }
    for (var i = ((input[0] * 2) + 1); i < input.length; i++) {
        if (phoneBook[input[i]] != undefined) {
            console.log(input[i]+'='+phoneBook[input[i]])
        } else {
            console.log('Not found')
        }
    }
}

_input = "3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry"

processData(_input);
