function solve(arrax) {
    let result = [];
  
    for (let input of arrax) {
      let [command, string] = input.split(" ");
  
      switch (command) {
        case "add":
          add(string);
          break;
        case "remove":
          remove(string);
          break;
        case "print":
          print();
          break;
      }
  
      function add(string) {
        result.push(string);
      }
  
      function remove(string) {
        result = result.filter((el) => el !== string);
      }
  
      function print() {
        console.log(result.join(","));
      }
    }
  }
  
  ["add hello", "add again", "remove hello", "add again", "print"];
  ["add pesho", "add george", "add peter", "remove peter", "print"];