function solve() {

   document.querySelector('#btnSend').addEventListener('click', onClick);

   const input = document.querySelector('#inputs textarea');

   const bestRestaurant = document.querySelector('#outputs #bestRestaurant p');

   const workers = document.querySelector('#outputs #workers p');

   function onClick () {

      let arrInput = JSON.parse(input.value);

      let restaurants = {};

      arrInput.forEach(line => {
         const tokens = line.split(' - ');
         const name = tokens[0];
         const workersArr = tokens[1].split(', ');
         
         // workers
         let workers = [];
         for (const worker of workersArr) {

            const workerTokens = worker.split(' ');

            const salary = Number(workerTokens[1]);

            workers.push({ name: workerTokens[0], salary });
         }

         if (restaurants[name]) {

            workers = workers.concat(restaurants[name].workers);
         }

         workers.sort((workerOne, workerTwo) => workerTwo.salary - workerOne.salary);

         const bestSalary = workers[0].salary;

         const averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary
         }
      });
      
      let bestRestaurantSalary = 0;
      let best = undefined;

      for (const name in restaurants) {
         if (restaurants[name].averageSalary > bestRestaurantSalary) {
            best = {
               name,
               workers: restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary,
               averageSalary: restaurants[name].averageSalary
            }

            bestRestaurantSalary = restaurants[name].averageSalary;

         }
      }


      bestRestaurant.textContent = `Name: ${best.name} Average Salary: ${best.averageSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`;

      let workersResult = [];

      best.workers.forEach(worker => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      })

      workers.textContent = workersResult.join(' ');
   }
}