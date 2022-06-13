function solve(arr){

    arr.sort(twoCriteriaSort);

    return arr.join('\n');

    function twoCriteriaSort(current, next){

        if(current.length === next.length){
            return current.localeCompare(next)
        }

        return current.length - next.length;
    }
}

// function solve(arr) {
//     const result = arr
//         .slice()
//         .sort((a, b) => a.length - b.length || a.localeCompare(b))
//         .join('\n');

//     console.log(result);
// }

// solve(['alpha', 'beta', 'gamma']);
// solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
// solve(['test', 'Deny', 'omen', 'Default']);

console.log(solve(['alpha', 'beta', 'gamma']));
console.log(solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(solve(['test', 'Deny', 'omen', 'Default']));