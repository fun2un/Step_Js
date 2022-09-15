// Создай функцию GetMaximum(), которая принимает 3 параметра и возвращает (return) наибольший из них. Если числа равны - верните любое из них

function GetMaximum(a, b, c){
    
    if (a>b && a>c) {
        return a;
    } else if (b>a && b>c) {
        return b;
    } else if (c>a && c>b) {
        return c;
    } 

    else {
        return a; //hh
    }
}

console.log (GetMaximum (20, 20, 20) )

//Создайте функцию SortedTrio(), которая принимает 3 параметра и выводит их в консоль в порядке убывания. Для вывода в консоль используйте console.log()

function SortTrio (x, y, z) {
    if (x > y && x > z) {
        if (y>z) {
            console.log (x + "," + y + "," + z);
        } else {
            console.log (x + "," + z + ","+ y);
        }
    } else if (y > x && y > z) {
        if (x>z) {
            console.log (y + "," + x + "," + z);
        } else {
            console.log (y + "," + z + "," + x)
        }
    } else if (z > x && z > y) {
        if (x>y) { 
            console.log (z + "," + x + "," + y);
        } else  {
            console.log (z + "," + y + "," + x);
        }
    }
}

SortTrio (1, 2, 3);
SortTrio (2, 1, 3);
SortTrio (3, 2, 1);

// Создайте функцию Statistic(), которая принимает 3 параметра и возвращает (return): a. 0, если все три параметра имеют различные значения.b. Порядковый номер числа, отличного от других, если два других числа имеют одинаковые значения. c. -1, если все три параметра имеют одинаковые значения.

function Statistic(a, b, c) {
    if (a == b && a == c ) {
        return ("Все значения равны: " + -1);
    } 

    else if (a != b && a!= c) {
        if (b != c) {
            return ("Все значения НЕ равны: " + 0);
        } else {return ("Неравное значение: " + 1);}
    } 
    else if (a == b && a != c) {
        return ("Неравное значение: " + 3);
    } 
    else if (a == c && a != b) {
        return ("Неверное значение: " + 2);
    }
}

console.log (Statistic(1, 1, 1)); // Все значения равны - (-1)
console.log (Statistic(1, 2, 3)); // все значения различны (0)
console.log (Statistic(1, 3, 3)); // вывести 1
console.log (Statistic(1, 3, 1)); // вывести 2
console.log (Statistic(1, 1, 3)); // вывести 3


// Создайте функцию и придумайте ей название по назначению. Функция должна принимать 4 параметра и выводить в консоль: a. Количество отрицательных чисел.  b. Количество положительных чисел.  c. Число 0 при подсчете учитывать не нужно.

// console.log ("\n"); 
function f(a, b, c, d) {
        let sum = Math.sign(a) + Math.sign(b) + Math.sign(c) + Math.sign(d);

        if (sum == 4) {console.log ("Все 4 числа положительные ")} else 
        if (sum == -4) {console.log("Все 4 числа отрицательные")} else 
        if (sum == 0) {console.log("2 числа положительные и 2 отрицательные")} else 
        if (sum == 2) {console.log("3 числа положительные и 1 отрицательное")} else
        if (sum == -2) {console.log("1 число положительное и 3 отрицательные")}
    }

    f(1, 2, 3, 4);
    f(1, 2, 3,-4);
    f(1, 2, -3, -4);
    f(1, -2, -3, -4);
    f(-1, -2, -3, -4);

    //ФАКТОРИАЛ через рекурсию

    function factorial(num) {
        if (num < 0) {
            return -1;
        }
        else if (num == 0) {
            return 1;
        }
        else {
            return (num * factorial(num - 1));
        }    
    }
    
    console.log( "факториал числа= " + factorial(6) );