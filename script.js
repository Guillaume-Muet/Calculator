window.onload = () => {

    let one = document.querySelector('#one');
    let two = document.querySelector('#two');
    let three = document.querySelector('#three');
    let four = document.querySelector('#four');
    let five = document.querySelector('#five');
    let six = document.querySelector('#six');
    let seven = document.querySelector('#seven');
    let eight = document.querySelector('#eight');
    let nine = document.querySelector('#nine');
    let zero = document.querySelector('#zero');
    let input = document.querySelector('#input');
    let ac = document.querySelector('#ac');
    let del = document.querySelector('#del');
    let plus = document.querySelector('#plus');
    let minus = document.querySelector('#minus');
    let multiply = document.querySelector('#multiply');
    let divide = document.querySelector('#divide');
    let dot = document.querySelector('#dot');
    let equal = document.querySelector('#equal');

    let vals = [];
    let total = null;
    let operator1 = null;
    let operator2 = null;
    let dotExist = false;

    one.addEventListener('click', () => {
        input.textContent += 1;
    });
    two.addEventListener('click', () => {
        input.textContent += 2;
    });
    three.addEventListener('click', () => {
        input.textContent += 3;
    }); 
    four.addEventListener('click', () => {
        input.textContent += 4;
    }); 
    five.addEventListener('click', () => {
        input.textContent += 5;
    }); 
    six.addEventListener('click', () => {
        input.textContent += 6;
    }); 
    seven.addEventListener('click', () => {
        input.textContent += 7;
    });
    eight.addEventListener('click', () => {
        input.textContent += 8;
    });
    nine.addEventListener('click', () => {
        input.textContent += 9;
    });
    zero.addEventListener('click', () => {
        input.textContent += 0;
    });
    dot.addEventListener('click', () => {
        console.log(dotExist);
        if(!dotExist) {
            input.textContent += '.';
            dotExist = true;
        }
    });

    ac.addEventListener('click', () => {
        input.textContent = '';
        operator = null;
        vals = [];
        console.clear();
        dotExist = false;
    });

    del.addEventListener('click', () => {
        if(input.textContent !== '') {
            let str = input.textContent;
            let arr1 = str.split(' ');
            arr1.pop()
            arr2 = arr1.join(' ');
            input.textContent = arr2;
        }
    });

    plus.addEventListener('click', () => {

        dotExist = false;

        let str = input.textContent;
        let arr1 = str.split(' ');
        let lastItem = arr1.pop();
       
        if(lastItem !== '') {
            if(total == null) {
                let val = Number(input.textContent);
                vals.push(val);
                input.textContent += ' + ';
                operator = '+';
            } else {
                vals = total;
                input.textContent += ' + ';
                operator = '+';
            }    
        }
        
    });
    minus.addEventListener('click', () => {

        dotExist = false;

        let str = input.textContent;
        let arr1 = str.split(' ');
        let lastItem = arr1.pop();

        if(lastItem !== '') {
            if(total == null) {
                let val = Number(input.textContent);
                vals.push(val);
                input.textContent += ' - ';
                operator = '-';
            } else {
                vals = total;
                input.textContent += ' - ';
                operator = '-';
            }
        }
    });
    multiply.addEventListener('click', () => {

        dotExist = false;

        let str = input.textContent;
        let arr1 = str.split(' ');
        let lastItem = arr1.pop();

        if(lastItem !== '') {
            if(total == null) {
                let val = Number(input.textContent);
                vals.push(val);
                input.textContent += ' * ';
                operator = '*';
            } else {
                vals = total;
                input.textContent += ' * ';
                operator = '*';
            }
        }
    });
    divide.addEventListener('click', () => {

        dotExist = false;

        let str = input.textContent;
        let arr1 = str.split(' ');
        let lastItem = arr1.pop();

        if(lastItem !== '') {
            if(total == null) {
                let val = Number(input.textContent);
                vals.push(val);
                input.textContent += ' / ';
                operator = '/';
            } else {
                vals = total;
                input.textContent += ' / ';
                operator = '/';
            }
        }
    });

    equal.addEventListener('click', () => {

        let str = input.textContent;
        let arr1 = str.split(' ');
        
        let val1 = Number(arr1[0]);
        operator1 = arr1[1];
        let val2 = Number(arr1[2]);
        operator2 = arr1[3];
        let val3 = Number(arr1[4]);
        let result = null;

        function calcul() {
            if(operator1 === '+') {
                if(operator2 === undefined) {
                    result = val1 + val2;
                }
                if(operator2 === '+') {
                    result = val1 + val2 + val3;
                }
            }
            if(operator1 === '-') {
                if(operator2 === undefined) {
                    result = val1 - val2;
                }
                if(operator2 === '-') {
                    result = val1 - val2 - val3;
                }
            }
            if(operator1 === '*') {
                if(operator2 === undefined) {
                    result = val1 * val2;
                }
            }
            if(operator1 === '/') {
                if(operator2 === undefined) {
                    result = val1 / val2;
                }
            }
        }

        calcul();

        input.textContent = result;
        total = result;
        vals = total;
        operator1 = null;
        operator2 = null;
    });

}