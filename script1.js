const input = document.querySelector(".Search");
const badCompany = ["kfc", "apple"];
const windoww = document.querySelector(".window");
const btn = document.querySelector(".BtnX");
const overFloww = document.querySelector(".overFlow");
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    for (let i = 0; i < badCompany.length; i++) {
      if (input.value) {
        if (!badCompany.includes(input.value)) {
          windoww.classList.toggle("hidden");
          overFloww.classList.toggle("hidden");
          windoww.classList.add("okay");
          document.querySelector("#h1").textContent = `${input.value}`;
          document.getElementById(
            "p"
          ).textContent = `هذي الشركه لا تدعم اسرائيل`;
          break;
        } else {
          windoww.classList.toggle("hidden");
          overFloww.classList.toggle("hidden");
          windoww.classList.add("notokay");
          document.querySelector("#h1").textContent = `${input.value}`;
          document.getElementById("p").textContent = `هذي الشركه  تدعم اسرائيل`;
          break;
        }
      }
    }
  }
});
btn.addEventListener("click", () => {
  windoww.classList.toggle("hidden");
  overFloww.classList.toggle("hidden");
  windoww.classList.remove("notokay");
  windoww.classList.remove("okay");
});
