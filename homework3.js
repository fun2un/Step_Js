//Выведите столбец от 1 до 53. Создайте решения для всех известных циклов.

console.log("Делаем через FOR");
for (i=0; i < 53; i++) {
    console.log(i + "\r");
}

console.log("\n" + "Делаем через while")
let a =  0;
while (a < 53) {
    a++;
    console.log (a + "\r");
}

console.log("\n" + "Делаем через DO WHILE");

b = 0;
do {
    b++;
    console.log(b + "\r");
} while (b < 53);

// Дано число n = 10000. Делите его на 2 столько раз, пока результат деления не станет меньше 50

console.log("\n" + "Задание 2")

function f(num) {
    let count = 0;
    
    if (num < 50 || num > 10000 || num % 2 !== 0) {
        console.log("Wrong DATA");
        return false;
    }
    while (num >=50) {
        num = num / 2;
        count++
    }
    return [num, count]
}

let result = f(10000);
if (result !== false) console.log("Итераций: " + result[1] + " получилось число: " + result[0]);

// Создайте функцию, которая принимает 3 параметра. Первый и второй параметр задают отрезок чисел, третьим параметром - булева переменная (true/false)

console.log("\n" + "Задание 3")

function foo(a3, b3, c3) {
    let x = [];
    let sum3 = 0;

    for (i = a3; i <= b3; i++) {
        x.push(i)                   // Заполнили массив (нарисовали "отрезок чисел")
    }
    if (c3 == true) {               //Проверили третий параметр 
        let tmp = 0;
        for (i=0; i<=x.length; i++) { //перечисляем в цикле от 0 до длинны массива (x.lenght)
            if (x[i] > 0) {sum3++}      // Накручиваем счетчик
        } 
    }  else {  
        if (c3 == false)  {         //иначе (если с3 - false)
            let tmp = 0;
        for (i=0; i<=x.length; i++) { //перечисляем в цикле от 0 до длинны массива (x.lenght)
            if (x[i] < 0) {sum3++}      // Накручиваем счетчик
        } 
        }                       
    }
    return sum3
}

console.log(foo(-5, 5, false));

//Задание 4 Создайте функцию считающую факториал всеми известными методами

console.log("\n" + "Задание 4")

function fact(n) {
    if (n <= 1) {
        return 1;
    }
    return n * fact(n - 1)
}

function fact1(n) {
    let result = 1;
    if (n<= 1) {
        return 1;
    }
    for (i=1; i<=n; i++) {
        result *= i + 1;
    }
}

console.log("Через фаеториал " + fact(5));
console.log("Через цикл " + fact(5));