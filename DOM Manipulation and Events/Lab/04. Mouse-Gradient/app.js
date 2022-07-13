function attachGradientEvents() {

    let gradientBox = document.getElementById("gradient-box");
    let result = document.getElementById("result");
  
    gradientBox.addEventListener("mousemove", gradientMovement);
    gradientBox.addEventListener("mouseout", gradientOut);
  
    function gradientMovement(e) {

      let percent = e.offsetX / (e.target.clientWidth - 1);
      percent = Math.trunc(percent * 100);

      result.textContent = `${percent}%`;
    }
  
    function gradientOut(e) {
      result.textContent = "";
    }
  }