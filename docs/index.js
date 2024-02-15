const antidiagonal = (name) => {
    let a, b, c, d, e, f, g, h, i;
    a = document.getElementById('1').innerHTML;
    b = document.getElementById('2').innerHTML;
    c = document.getElementById('3').innerHTML;
    d = document.getElementById('4').innerHTML;
    e = document.getElementById('5').innerHTML;
    f = document.getElementById('6').innerHTML;
    g = document.getElementById('7').innerHTML;
    h = document.getElementById('8').innerHTML;
    i = document.getElementById('9').innerHTML;

    if (c === e && e === g && c !== '') {
        alert(`Player ${name} won`);
        location.reload(true);
    }
    
};
const diagonal = (name) => {
    let a, b, c, d, e, f, g, h, i;
    a = document.getElementById('1').innerHTML;
    b = document.getElementById('2').innerHTML;
    c = document.getElementById('3').innerHTML;
    d = document.getElementById('4').innerHTML;
    e = document.getElementById('5').innerHTML;
    f = document.getElementById('6').innerHTML;
    g = document.getElementById('7').innerHTML;
    h = document.getElementById('8').innerHTML;
    i = document.getElementById('9').innerHTML;

    if (a === e && e === i && a !== '') {
        alert(`Player ${name} won`);
        location.reload(true);
    }
    
};
const checkrow = (name) => {
    let a, b, c, d, e, f, g, h, i;
    a = document.getElementById('1').innerHTML;
    b = document.getElementById('2').innerHTML;
    c = document.getElementById('3').innerHTML;
    d = document.getElementById('4').innerHTML;
    e = document.getElementById('5').innerHTML;
    f = document.getElementById('6').innerHTML;
    g = document.getElementById('7').innerHTML;
    h = document.getElementById('8').innerHTML;
    i = document.getElementById('9').innerHTML;

    if (a === b && b === c && a !== '') {
        alert(`Player ${name} won`);
        location.reload(true);
    } else if (d === e && e === f && d !== '') {
        alert(`Player ${name} won`);
        location.reload(true);
    } else if (g === h && h === i && g !== '') {
        alert(`Player ${name} won`);
        location.reload(true);
    }
};

const checkcolumn = (name) => {
    let a, b, c, d, e, f, g, h, i;
    a = document.getElementById('1').innerHTML;
    b = document.getElementById('2').innerHTML;
    c = document.getElementById('3').innerHTML;
    d = document.getElementById('4').innerHTML;
    e = document.getElementById('5').innerHTML;
    f = document.getElementById('6').innerHTML;
    g = document.getElementById('7').innerHTML;
    h = document.getElementById('8').innerHTML;
    i = document.getElementById('9').innerHTML;

    if (a === d && d === g && a !== '') {
        alert(`Player ${name} won`);
        location.reload(true);
    } else if (b === e && e === h && b !== '') {
        alert(`Player ${name} won`);
        location.reload(true);
    } else if (c === f && f === i && c !== '') {
        alert(`Player ${name} won`);
        location.reload(true);
    }
};
document.getElementById('submit').addEventListener('click', () => {
    var x = document.getElementById('index').value;

    switch (x) {
        case '1': document.getElementById('1').innerHTML = 'X';
                  //matrix[0][0]='x';
            break;
        case '2': document.getElementById('2').innerHTML = 'X';
                //  matrix[0][1]='x';    
        break;
        case '3': document.getElementById('3').innerHTML = 'X';
                //  matrix[0][2]='x';     
        break;
        case '4': document.getElementById('4').innerHTML = 'X';
                //  matrix[1][0]='x';    
        break;
        case '5': document.getElementById('5').innerHTML = 'X';
                //   matrix[1][1]='x';     
        break;
        case '6': document.getElementById('6').innerHTML = 'X';
                //   matrix[1][2]='x';    
        break;
        case '7': document.getElementById('7').innerHTML = 'X';
                //   matrix[2][0]='x';
        break;
        case '8': document.getElementById('8').innerHTML = 'X';
                //   matrix[2][1]='x';    
        break;
        case '9': document.getElementById('9').innerHTML = 'X';
                //   matrix[2][2]='x';
        break;
    }
    checkrow('X');
    checkcolumn('X');
    diagonal('X');
    antidiagonal('X');
})
document.getElementById('submit2').addEventListener('click', () => {
    var o = document.getElementById('index2').value;

    switch (o) {
        case '1': document.getElementById('1').innerHTML = 'O';
            break;
        case '2': document.getElementById('2').innerHTML = 'O';
            break;
        case '3': document.getElementById('3').innerHTML = 'O';
            break;
        case '4': document.getElementById('4').innerHTML = 'O';
            break;
        case '5': document.getElementById('5').innerHTML = 'O';
            break;
        case '6': document.getElementById('6').innerHTML = 'O';
            break;
        case '7': document.getElementById('7').innerHTML = 'O';
            break;
        case '8': document.getElementById('8').innerHTML = 'O';
            break;
        case '9': document.getElementById('9').innerHTML = 'O';
            break;
    }
   checkrow('O');
   checkcolumn('O');
   diagonal('O');
    antidiagonal('O');
})
