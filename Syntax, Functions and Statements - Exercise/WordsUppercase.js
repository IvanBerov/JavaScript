function wordUppercase(input)
{
    const regex = new RegExp(/[A-Za-z0-9]+/, 'gmi');
    let matches = input.match(regex);

    if(matches.length){
        matches = matches.map(x => x.toUpperCase()).join(', ');
    }

    console.log(matches);
}

wordUppercase('Hi, how are you?');
wordUppercase('hello');