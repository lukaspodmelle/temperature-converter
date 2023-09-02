// Init
let initialNumber   =   document.getElementById('initial-number')
let resultNumber    =   document.getElementById('result-number')
let switchUnits     =   document.getElementsByName('switch')

// User input listeners
initialNumber.addEventListener('input', convertTemperature)
switchUnits.forEach(button => {
    button.addEventListener('click', convertTemperature)
})

// Convert temperature
function convertTemperature() {

    // Get current units from switch
    for (let i = 0; i < switchUnits.length; i++) {
        if (switchUnits[i].checked) {
            currentUnits = switchUnits[i].value
        }
    }

    // Switch units
    switch(currentUnits) {
        case 'C':
            convertedNumber = (initialNumber.value * 1.8) + 32
            resultNumber.innerText = Math.floor(convertedNumber) + '°F'
        break
        case 'F':
            convertedNumber = (initialNumber.value - 32) / 1.8
            resultNumber.innerText = Math.floor(convertedNumber) + '°C'
        break
        default:
            resultNumber.innerText = 'Error'
    }

    // Apocalypse temps
    if (convertedNumber < -1000) {
        resultNumber.innerText = "Cold af"
    } else if (convertedNumber > 1000) {
        resultNumber.innerText = "Hot af"
    }

}

// Init app
initialNumber.value = 25
convertTemperature()