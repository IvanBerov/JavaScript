function solve(arr) {

    const result = arr.reduce((acc, curr, index) => {

        if (curr === 'add') 
        {
            acc.push(index + 1);
        } 
        else if (curr === 'remove')
        {
            acc.pop();
        }

        return acc;
    }, []);

    const output = result.length > 0 ? result.join('\n') : 'Empty';

    console.log(output);
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);