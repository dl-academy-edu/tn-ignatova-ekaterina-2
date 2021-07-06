// ДЗ-2 
// задача-1, (вар-1)
(function () {

    let number = +prompt('Введите число: ');
    for (i = 1; i <= number; i++) {
        if (i === 4 || i % 4 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }    
})();

// задача-1, (вар-2)
(function () {

    let userNumber = prompt('Введите число: ');
    let number = Number(userNumber);

    if (typeof number === 'number') { 
        for (i = 1; i <= number; i++) {
            if (i === 4 || i % 4 === 0) {
                continue;
            } else {
                console.log(i);
            }
        }
    }    
})();


