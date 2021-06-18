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

const friends = ["nico", "hee", "zion", "minsoo"];

for (let i = 0; i < friends.length; i++) {
    console.log(`heelo ${friends[i]} times`);
}

const addHeart = (c, i, a) => console.log(c, i, a);

friends.forEach(addHeart);

for (const friend of friends) {
    console.log(friend);
}
