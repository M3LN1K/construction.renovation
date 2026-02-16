//* Создаём новый экземпляр слайдера Splide
//* Указываем селектор элемента, к которому будет применён слайдер — в данном случае #mySlider
//* Это соответствует элементу с id="mySlider" в HTML
const mySlider = new Splide('#mySlider', {
  type: "loop", //? бесконечная прокрутка
  perPage: 1, //? по 1 слайду
  autoplay: true, //? автопрокрутка
  interval: 2000, //? каждые 2 секунды
  pauseOnHover: true, //? пауза при наведении
});

//* Запускаем (инициализируем) слайдер
//* Метод .mount() необходим для активации слайдера и применения всех его функций
//* Без этого слайдер не будет работать
mySlider.mount();



//! /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //* Вызов в консоли осуществляется командой console.log() 
// console.log("Hello World");

// //* А вызов в браузере осуществляется командой alert()


// //* Переменные обозначаются с помощью ключевого слова let
// //& let userName = "John";
// //& console.log(userName);

// //* Условный операторы IF
// var age = 15;
// let userName = "Sam";
// if (age == 34){
//     console.log(userName);
// }else{
//     console.log("No name");
// }

// //* Условный операторы IF and SWITCH

// let stroka = "xyi";

// switch (stroka) {
//     case "xyi":
//         console.log("xyi");
//         break;
//     case "xyi2":
//         console.log("xyi2");
//         break;
// }

// //* Массивы данных Array

// let arr = [1, "ppp", 3.0, true, 5];
// arr[3] = "pop"
// console.log(arr.length);
// console.log(arr)

// //* Многомерный массив Array


// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(matrix[1][0]);


// //* Циклы for, while, do while

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// let x = 0;
// do {
//     console.log(i);
//     i++;
// } while (x < 10);

// let arp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arp.length; i++) {
//     console.log(arp[i]);
// }