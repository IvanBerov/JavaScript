function attachEventsListeners() {

    let buttonConvert = document.getElementById('convert');
    buttonConvert.addEventListener('click', convert);

    let metricUnits = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9244,
        ft: 0.3048,
        in: 0.0254
    }

    function convert(e){
        let fromValue = document.getElementById('inputUnits').value;
        let toValue = document.getElementById('outputUnits').value;

        let inputDistance = Number(document.getElementById('inputDistance').value);
        let outputDistance = document.getElementById('outputDistance');

        let valueInMeters = inputDistance * metricUnits[fromValue];
        let convertedValue = valueInMeters / metricUnits[toValue];

        outputDistance.value = convertedValue;

    }

    // function convert() {

    //     let inputUnit = document.getElementById('inputUnits');
    //     let outputUnit = document.getElementById('outputUnits');
    //     let inputValue = document.getElementById('inputDistance');

    //     let startUnits = Array.from(inputUnit.children)
    //                           .find(x => x.selected).value;
    //     let inputToM = 0;

    //     switch (startUnits) {
    //         case "km":
    //             inputToM = inputValue.value * 1000;
    //             break;
    //         case "m":
    //             inputToM = inputValue.value;
    //             break;
    //         case "cm":
    //             inputToM = inputValue.value * 0.01;
    //             break;
    //         case "mm":
    //             inputToM = inputValue.value * 0.001;
    //             break;
    //         case "mi":
    //             inputToM = inputValue.value * 1609.34;
    //             break;
    //         case "yrd":
    //             inputToM = inputValue.value * 0.9144;
    //             break;
    //         case "ft":
    //             inputToM = inputValue.value * 0.3048;
    //             break;
    //         case "in":
    //             inputToM = inputValue.value * 0.0254;
    //             break;
    //     }

    //     let result = 0;
    //     let endUnits = Array.from(outputUnit.children).find(x => x.selected).value;

    //     switch (endUnits) {
    //         case "km":
    //             result = inputToM / 1000;
    //             break;
    //         case "m":
    //             result = inputToM;
    //             break;
    //         case "cm":
    //             result = inputToM / 0.01;
    //             break;
    //         case "mm":
    //             result = inputToM / 0.001;
    //             break;
    //         case "mi":
    //             result = inputToM / 1609.34;
    //             break;
    //         case "yrd":
    //             result = inputToM / 0.9144;
    //             break;
    //         case "ft":
    //             result = inputToM / 0.3048;
    //             break;
    //         case "in":
    //             result = inputToM / 0.0254;
    //             break;
    //     }

    //     document.getElementById('outputDistance').value = result;
    // }
}