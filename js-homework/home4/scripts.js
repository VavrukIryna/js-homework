
function task0() {
    location.reload();
}

// !Увага! Все зробити джаваскріптом без використання метода querySelector
//1. Знайти елементи з описом продукта та виправити, щоб текст починався з великої букви.
// <li>the new generation of iPhone</li> ===> <li>The new generation of iPhone</li>
function task1() {
    function firstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    for (var i = 0; i < document.body.getElementsByTagName('h4').length; i++) {
        var elem = document.body.getElementsByTagName('h4')[i].nextElementSibling.children[0];
        elem.innerHTML = firstLetter(elem.innerHTML);
    }
}

//2. Виділити ціну червоним кольором (додати класс red до елемента)
function task2() {
    for (var i = 0; i < document.body.getElementsByTagName('h4').length; i++) {
        var redClass = document.body.getElementsByTagName('h4')[i].nextElementSibling.children[1].children[0];
        redClass.classList.add('red');
    }
}

//3. Додати новий блок з елементами про iPhone 5
// назва - iPhone 5
// опис - Our Hero
// ціна - 300$
function task3() {
    var ul = document.createElement('ul');
    document.body.appendChild(ul);

    var li = document.createElement('li');
    var h4 = document.createElement('h4');
    var ulnew = document.createElement('ul');
    var linew = document.createElement('li');
    var linew1 = document.createElement('li');
    var description = "Our Hero";
    var price = "300$";
    var name = "iPhone 5";
    h4.appendChild(document.createTextNode(name));
    li.appendChild(h4);
    li.appendChild(ulnew);
    ulnew.appendChild(linew);
    linew.appendChild(document.createTextNode(description));
    ulnew.appendChild(linew1);
    linew1.appendChild(document.createTextNode("Price: " + price));
    ul.appendChild(li);
}

//4. Перевірити чи всі блоки мають клас device, якщо немає то додати його.
function task4() {
    for (var i = 0; i < document.body.getElementsByTagName('h4').length; i++) {
        var d = document.body.getElementsByTagName('h4')[i].parentNode.parentNode;

        if ((d.hasAttribute("class")) == false) {
            d.setAttribute("class", "device");
        }

    }
}

//5. Замінити всі слова iPhone на Android
function task5() {

    var content = document.body.innerHTML;
    var updatedContent = content.replace(new RegExp('iPhone', 'g'), 'Android');
    console.log(updatedContent);
    document.body.innerHTML = updatedContent;
}

          //6. Написати модуль в окремому файлі currency, який буде переводити ціну в доларах в гривні
          // і застосувати його до кожної ціни
          // використовувати буде так

          // currency.set(data) - задає валюту 
          // data = {
          //   name: "ua hryvnya",
          //   rank: 25,
          //   symbol: "uah"
          // }
          // так ми задаємо курс, і сивол для формування ціни
          // currency.convert(price) - переводить ціну в гривні
          // приклад ковертації
          // 100$ => 2500uah

