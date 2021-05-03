function CoffeeGift() {
  let question = prompt("are you instractor at SheCodes?");
  let age = prompt("how old are you?");
  let email = prompt("what is your email-adress?");
  let name = prompt("what is your name?");

  if (question === "yes" && age >= "18") {
    alert(
      "🌼Hello " + name + ",simret will contact you Via(" + email + ")!!🌼"
    );
  } else {
    if (
      (question === "yes" && age < 18) ||
      age > 90 ||
      (question === "no" && age < 18) ||
      age > 90
    ) {
      alert("🙈Sorry No Coffee Gift For You!!🙊");
    } else {
      alert("🙈🙊🙈🙊🙈🙊🙈🙊 ");
    }
  }
}
let changeButton = document.querySelector("button");
changeButton.addEventListener("click", CoffeeGift);
