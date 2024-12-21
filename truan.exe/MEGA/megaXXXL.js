let claviotyra = document.getElementById("claviotyra")
// let q = document.getElementById("q")
// let Q = document.getElementById("Q")
document.getElementById("Q").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "Q"
})
// ________________________________________
document.getElementById("W").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "W"
})
// ________________________________________
document.getElementById("E").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "E"
})
// ________________________________________
document.getElementById("R").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "R"
})
// ________________________________________
document.getElementById("T").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "T"
})
// ________________________________________
document.getElementById("Y").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "Y"
})
// ________________________________________
document.getElementById("U").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "U"
})
// ________________________________________
document.getElementById("I").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "I"
})
// ________________________________________
document.getElementById("O").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "O"
})
// ________________________________________
document.getElementById("P").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "P"
})
// ________________________________________
document.getElementById("1").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "1"
})
// ________________________________________
document.getElementById("2").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "2"
})
// ________________________________________
document.getElementById("3").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "3"
})
// ________________________________________
document.getElementById("4").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "4"
})
// ________________________________________
document.getElementById("5").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "5"
})
// ________________________________________
document.getElementById("6").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "6"
})
// ________________________________________
document.getElementById("7").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "7"
})
// ________________________________________
document.getElementById("8").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "8"
})
// ________________________________________
document.getElementById("9").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "9"
})
// ________________________________________
document.getElementById("0").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "0"
})
// ________________________________________
document.getElementById("-").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "-"
})
// ________________________________________
document.getElementById("+").addEventListener("click", function() {
    document.getElementById("tx1").innerText += "+"
})
// ________________________________________
document.getElementById('"').addEventListener("click", function() {
    document.getElementById("tx1").innerText += '"'
})
// ________________________________________
document.getElementById('button-mini').addEventListener("click", function() {
    document.getElementById("tx1").innerText += '~'
})
// ________________________________________
document.getElementById('"').addEventListener("click", function() {
    document.getElementById("tx1").innerText += '"'
})
// ________________________________________
document.getElementById('skob1').addEventListener("click", function() {
    document.getElementById("tx1").innerText += '{'
})
// ________________________________________
document.getElementById('skob2').addEventListener("click", function() {
    document.getElementById("tx1").innerText += '}'
})
// ________________________________________
document.getElementById('A').addEventListener("click", function() {
    document.getElementById("tx1").innerText += 'A'
})
// ________________________________________
document.getElementById('S').addEventListener("click", function() {
    document.getElementById("tx1").innerText += 'S'
})
// ________________________________________
document.getElementById('D').addEventListener("click", function() {
    document.getElementById("tx1").innerText += 'D'
})
// ________________________________________
document.getElementById('F').addEventListener("click", function() {
    document.getElementById("tx1").innerText += 'F'
})
// ________________________________________
document.getElementById('G').addEventListener("click", function() {
    document.getElementById("tx1").innerText += 'G'
})
// ________________________________________
document.getElementById('H').addEventListener("click", function() {
    document.getElementById("tx1").innerText += 'H'
})
// ________________________________________
document.getElementById('J').addEventListener("click", function() {
    document.getElementById("tx1").innerText += "J"
})
// ________________________________________
document.getElementById('K').addEventListener("click", function() {
    document.getElementById("tx1").innerText += 'K'
})
// ________________________________________
document.getElementById('L').addEventListener("click", function() {
    document.getElementById("tx1").innerText += 'L'
})
// ________________________________________
document.getElementById('point').addEventListener("click", function() {
    document.getElementById("tx1").innerText += '.'
})
// ________________________________________
document.getElementById('rovno').addEventListener("click", function() {
    document.getElementById("tx1").innerText += '='
})
// ________________________________________
document.getElementById('Z').addEventListener("click", function() {
    document.getElementById("tx1").innerText += 'Z'
})
// ________________________________________

document.getElementById('X').addEventListener("click", function() {
    document.getElementById("tx1").innerText += 'X'
})
// ________________________________________
document.getElementById('C').addEventListener("click", function() {
    document.getElementById("tx1").innerText += 'C'
})
// ________________________________________
document.getElementById('V').addEventListener("click", function() {
    document.getElementById("tx1").innerText += 'V'
})
// ________________________________________
document.getElementById('B').addEventListener("click", function() {
    document.getElementById("tx1").innerText += 'B'
})
// ________________________________________
document.getElementById('N').addEventListener("click", function() {
    document.getElementById("tx1").innerText += 'N'
})
// ________________________________________
document.getElementById('M').addEventListener("click", function() {
    document.getElementById("tx1").innerText += 'M'
})
// ________________________________________
// document.getElementById(':').addEventListener("click", function() {
//     document.getElementById("tx1").innerText += ':'
// })
// ________________________________________
// function addSpace() {
//     let tx1 = document.getElementById("tx1");
//     tx1.innerHTML += "&nbsp;"
// }
function addSpace() {
    // let tx1 = document.getElementById("tx1");
    tx1.innerHTML += "&nbsp;"; // Используйте HTML-пробел
}

// function backspace() {
//     tx1.textContent = tx1.textContent.slice(0, -1);
// }
function redirect() {
    window.location.href = 'http://127.0.0.1:5500/perexod/pere.html'; // Замените на нужный адрес
}
// document.getElementById('enter').addEventListener('click', function() {
//         // Создаем новый элемент абзаца
//         const newLine = document.createElement('p');
//         // Устанавливаем текст
//         newLine.innerHTML = '&nbsp';
//         // Получаем div для вывода
//         const tx1 = document.getElementById('tx1');
//         // Добавляем абзац в div
//         tx1.appendChild(newLine);
//         // Прокручиваем div вниз
//         tx1.scrollTop = tx1.scrollHeight;
// });
// function backspace() {
//     let content = tx1.innerHTML;
//     if (content) {
//         // Удаляем последний символ
//         tx1.innerHTML = content.slice(0, -1);
//     }
// }


function backspace() {
    let content = tx1.innerHTML;
    if (content) {
        // Удаляем последний символ или пробел
        tx1.innerHTML = content.replace(/&nbsp;$/, '').slice(0, -1);
    }
}
function del() {
    let content = tx1.innerHTML;
    if (content) {
        // Удаляем последний символ или пробел
        tx1.innerHTML = content.replace(/&nbsp;$/, '').slice(0, 0);
    }
}


// Функция для добавления текста
function addText(text) {
    // Проверяем, если текст не пустой, добавляем его
    if (text) {
        tx1.innerHTML += text;
        tx1.scrollTop = tx1.scrollHeight; // Прокручиваем вниз
    }
}
document.getElementById('enter').addEventListener('click', function() {
    addText('<br>'); // Добавляем перенос строки
});
document.getElementById(":").addEventListener("click", function() {
    addText(":");
});
const toggleButton = document.getElementById('toggleButton');
const buttonContainer = document.getElementById('buttonContainer');

let isOpen = false;

toggleButton.addEventListener('click', () => {
    isOpen = !isOpen;
    if (isOpen) {
        buttonContainer.style.display = 'block';
        toggleButton.textContent = 'Скрыть темы';

    } else {
        buttonContainer.style.display = 'none';
        toggleButton.textContent = 'Показать темы';
    }
});
function light() {
    window.location.href = 'http://127.0.0.1:5500/Light%20theme/space.html'; // Замените на нужный адрес
}
function dark() {
    window.location.href = 'http://127.0.0.1:5500/Dark%20theme/dark.html'; // Замените на нужный адрес
}
function modern() {
    window.location.href = 'http://127.0.0.1:5500/Modern%20theme/modern.html'; // Замените на нужный адрес
}

document.getElementById('skab1').addEventListener("click", function() {
    document.getElementById("tx1").innerText += '('
})
document.getElementById('skab2').addEventListener("click", function() {
    document.getElementById("tx1").innerText += ')'
})
document.getElementById('_').addEventListener("click", function() {
    document.getElementById("tx1").innerText += '_'
})
document.getElementById('kub1').addEventListener("click", function() {
    document.getElementById("tx1").innerText += '['
})
document.getElementById('kub2').addEventListener("click", function() {
    document.getElementById("tx1").innerText += ']'
})
document.getElementById('?').addEventListener("click", function() {
    document.getElementById("tx1").innerText += '?'
})
document.getElementById('!').addEventListener("click", function() {
    document.getElementById("tx1").innerText += '!'
})
document.getElementById('#').addEventListener("click", function() {
    document.getElementById("tx1").innerText += '#'
})
document.getElementById('№').addEventListener("click", function() {
    document.getElementById("tx1").innerText += '№'
})
document.getElementById('@').addEventListener("click", function() {
    document.getElementById("tx1").innerText += '@'
})
document.getElementById(',').addEventListener("click", function() {
    document.getElementById("tx1").innerText += ','
})
document.getElementById('sk').addEventListener("click", function() {
    document.getElementById("tx1").innerText += "'"
})