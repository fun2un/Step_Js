//Запросите у пользователя его имя и выведите его в ответ

alert ('Добрый день уважаемый ' + prompt('Введите свое имя'));

// Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в рубли.

function usdSum (usdSum, usdCourse) {
    return (usdSum * usdCourse);
}
const course = 60;
alert ("При курсе 60 руб за 1 доллар, сумма = " + ' ' +  usdSum (parseInt(prompt('Введи сумму USD')), course) + ' рублей'); 

// Запросите у пользователя целое число и выведите ответ четное число или нет (true/false). Использовать if else или switch запрещено.

function f(a) {
    return (a % 2 == 0) ? false : true;  
}

alert (f(parseInt(+prompt ('Введи целое число'))));

//Создайте функцию, которая принимает целое трехзначное число и выводит его задом наперед. Для решения задачи используйте оператор % (остаток от деления)

function reverse(num) {
    let tmp, result = 0;
    while (num) {
        tmp = num % 10;
        result = (result * 10) + tmp;
        num = num/10|0
    }
    return result;
}

alert ("Перевертыш: " + reverse( prompt("Введите трехзначное число ") ) );

//Создайте функцию, которая принимает 3 параметра и вычисляет выражение (a + b + c)3

function fun(a1, b1, c1) {
    return ( Math.pow (a1 + b1 + c1 ); 
}

let a1 = +prompt('Введи число А');
let b1 = +prompt('Введи число B');
let c1 = +prompt('Введи число C');
alert( "Cумма чисел в 3 степени раавна = " + fun(a1, b1, c1) )

