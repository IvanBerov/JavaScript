function jsonToHtml(arrayOfObjects) {

    arrayOfObjects = JSON.parse(arrayOfObjects);

    String.prototype.htmlEscape = function () {
        return this.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    };

    const tableResult = arrayOfObjects.reduce((acc, curr, index) => {
        if (index === 0) {
            acc += '<table>\n   <tr>';

            Object.keys(curr).forEach((key) => {
                acc += `<th>${key.htmlEscape()}</th>`;
            });

            acc += '</tr>\n';
        }

        acc += '   <tr>';

        Object.values(curr).forEach((value) => {
            typeof value === 'number'
                ? acc += `<td>${value}</td>`
                : acc += `<td>${value.htmlEscape()}</td>`;
        });

        acc += '</tr>\n';

        if (index + 1 === arrayOfObjects.length) {
            acc += '</table>';
        }

        return acc;
    }, '');

    console.log(tableResult);
}

jsonToHtml(`[{"Name":"Stamat", "Score":5.5},
 {"Name":"Rumen", "Score":6}]`);

jsonToHtml(`[{"Name":"Pesho", "Score":4, " Grade":8},
 {"Name":"Gosho", "Score":5, " Grade":8},
 {"Name":"Angel", "Score":5.50, " Grade":10}]`);