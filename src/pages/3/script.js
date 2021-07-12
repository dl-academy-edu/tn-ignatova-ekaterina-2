// ДЗ-3 
// задача-1
(function () {

    function showMsg() {
        let age = +prompt('Введите свой возраст: ');        
        if(age >= 18) {
            alert('ОК, тебе есть 18!')
        } else {
            showMsg()
        }
    }
})();

// задача-2
(function () {

    function add(a,b) {
        result = a + b;
        return result;
    }
    console.log(add(10,5));


    function subtract(a,b) {
        result = a - b;
        return result;
    }
    console.log(subtract(10,5));


    function divide(a,b) {
        result = a / b;
        return result;
    }
    console.log(divide(10,5));

    function multiply(a,b) {
        result = a * b;
        return result;
    }
    console.log(multiply(10,5));
})();