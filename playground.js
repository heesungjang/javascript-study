const onClickButton = () => {
    console.log("I am clicked");
};
const buttons1 = document.getElementById("btn1");
const buttons = document.getElementsByClassName("btn");

Array.from(buttons).forEach((element) => {
    element.addEventListener("click", onClickButton);
});

buttons1.addEventListener("click", onClickButton);

const tempList = [1, 2, 3, 4, 5];

tempList.forEach((num) => {
    console.log(num);
});
