const onClickButton = () => {
    console.log("I am clicked");
};
const buttons1 = document.getElementById("btn1");
const buttons = document.getElementsByClassName("btn");

// console.log(buttons);
// buttons.forEach((button) => {
//     button.addEventListener("click", onClickButton);
// });

Array.from(buttons).forEach((element) => {
    element.addEventListener("click", onClickButton);
});

// buttons1.addEventListener("click", onClickButton);

const tempList = [1, 2, 3, 4, 5];

// tempList.forEach((num) => {
//     console.log(num);
// });

// const friends = ["nico", "hee", "zion", "minsoo"];

// for (let i = 0; i < friends.length; i++) {
//     console.log(`heelo ${friends[i]} times`);
// }

const friends = [1, 2, 3, 4, 5];
const addHeart = (c, i) => console.log(c, i);

friends.forEach(addHeart);

// for (const friend of friends) {
//     console.log(friend);
// }
