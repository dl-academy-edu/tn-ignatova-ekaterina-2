// ДЗ-1
(function () {

    const name = prompt('Введите имя: ');
    const sName = prompt('Введите фамилию: ');
    const age = +prompt('Введите возраст: ');


    const user = {
        name,
        sName,
        age
    };

    console.log(user);    
})();