
const nav = document.querySelector('#header-navs'); // вся навигация, в которой и скрытый burger
const navBtn = document.querySelector('#btm-burger'); // div в котором находится картинка
const navBtnImg = document.querySelector('#nav-btn-img'); //картинка которая находится в div
/*
navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {    // при нажатии добавляем , а если есть такой класс, то удаляем
        navBtnImg.src = "./img/exit.svg";

    } else {
        navBtnImg.src = "./img/menu-burger.svg";
    }
};
*/

function burgerOpen () {  
    if (nav.classList.toggle('open')) { // при нажатии добавляем , а если есть такой класс, то удаляем
    navBtnImg.src = "./img/exit.svg";
    } else {
        navBtnImg.src = "./img/menu-burger.svg";
};
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
var country = "germania";
let knopkaFrancia =document.getElementById('francia');
let knopkaGermania =document.getElementById('germania');
let knopkaEngland =document.getElementById('england'); 
*/
var obj = {
    francia: [
        {
            id: 1,
            src: "./img/francia_1.svg",
            name: "Охота Амура",
            aftor: "test",
            material: "Холст, масло (50х80)",
            cena: "14 500 руб",
            
        },
        {
            id: 2,
            src: "./img/francia_2.svg",
            name: "Дама с собачкой",
            aftor: "roma ne tashit",
            material: "Акрил, бумага (50х80)",
            cena: "16 500 руб",
        },
        {
            id: 3,
            src: "./img/francia_3.svg",
            name: "Процедура",
            aftor: "Марсель Руссо",
            material: "Цветная литография (40х60)",
            cena: "20 000 руб",
        },
        {
            id: 4,
            src: "./img/francia_4.svg",
            name: "Роза",
            aftor: "Марсель Руссо",
            material: "Бумага, акрил (50х80)",
            cena: "12 000 руб)",
        },
        {
            id: 5,
            src: "./img/francia_5.svg",
            name: "Птичья трапеза",
            aftor: "Марсель Руссо",
            material: "Цветная литография (40х60)",
            cena: "22 500 руб",
        },
        {
            id: 6,
            src: "./img/francia_6.svg",
            name: "Пейзаж с рыбой",
            aftor: "Марсель Руссо",
            material: "Цветная литография (40х60)",
            cena: "20 000 руб",
        },
    ],
    germania: [
        {
            id: 1,
            src: "./img/germania_1.svg",
            name: "Над городом",
            aftor: "Курт Вернер",
            material: "Цветная литография (40х60)",
            cena: "16 000 руб",
            
        },
        {
            id: 2,
            src: "./img/germania_2.svg",
            name: "Птенцы",
            aftor: "Макс Рихтер",
            material: "Холст, масло (50х80)",
            cena: "14 500 руб",
        },
        {
            id: 3,
            src: "./img/germania_3.svg",
            name: "Среди листьев",
            aftor: "Мартин Майер",
            material: "Цветная литография (40х60)",
            cena: "20 000 руб",
        },
        {
            id: 4,
            src: "./img/germania_4.svg",
            name: "Яркая птица",
            aftor: "Герман Беккер",
            material: "Цветная литография (40х60)",
            cena: "13 000 руб",
        },
        {
            id: 5,
            src: "./img/germania_5.svg",
            name: "Дятлы",
            aftor: "Вульф Бауэр",
            material: "Бумага, акрил (50х80)",
            cena: "20 000 руб",
        },
        {
            id: 6,
            src: "./img/germania_6.svg",
            name: "Большие воды",
            aftor: "Вальтер Хартманн",
            material: "Бумага, акрил (50х80)",
            cena: "23 000 руб",
        },
        
    ],
    england: [
        {
            id: 1,
            src: "./img/england_1.svg",
            name: "Дикий зверь",
            aftor: "Пол Смит",
            material: "Акварель, бумага (50х80)",
            cena: "19 500 руб",
            
        },
        {
            id: 2,
            src: "./img/england_2.svg",
            name: "Скалистый берег",
            aftor: "Джон Уайт",
            material: "Цветная литография (40х60)",
            cena: "17 500 руб",
        },
        {
            id: 3,
            src: "./img/england_3.svg",
            name: "Река и горы",
            aftor: "Джим Уотсон",
            material: "Акварель, бумага (50х80)",
            cena: "20 500 руб",
        },
        {
            id: 4,
            src: "./img/england_4.svg",
            name: "Белый попугай",
            aftor: "Юджин Зиллион",
            material: "Цветная литография (40х60)",
            cena: "15 500 руб",
        },
        {
            id: 5,
            src: "./img/england_5.svg",
            name: "Ночная рыба",
            aftor: "Эрик Гиллман",
            material: "Бумага, акрил (50х80)",
            cena: "12 500 руб",
        },
        {
            id: 6,
            src: "./img/england_6.svg",
            name: "Рыжий кот",
            aftor: "Альфред Барр",
            material: "Цветная литография (40х60)",
            cena: "21 000 руб",
        },
    ],
}

var btns = document.getElementsByClassName('product_btn'); // все три кнопки к которым будем обращаться в HTML
var country = "francia";
loadProduct(country);
toggleActiveBtnProduct(country);
            
for(let i =0; i < btns.length; i++) {
    console.log(1,btns[i]);
    btns[i].onclick = (e) => {
      country = e.target.getAttribute("data-country");
        console.log(e.target.getAttribute("data-country"));
        loadProduct(country);
        toggleActiveBtnProduct(country);
        /*
        for(let j =0; j < btns.length; j++) {
            btns[j].classList.remove("active");
        }
        e.target.className += " active ";
        */
    };
};
console.log(obj[country]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function toggleActiveBtnProduct(country){
    for(let j =0; j < btns.length; j++) {  
        btns[j].classList.remove("active");   // удаляем у всех кнопок класс active
    }
    let btn =document.getElementById(country); // записываем элемент по id 
    btn.className += " active "; // добовляем класс active
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function loadProduct(country) {
        
    for(i = 0; i < obj[country].length; i++) {
        var product = obj[country][i];
        var img_Francia = document.getElementById('img_'+ product.id);
        let hudojnik_Francia = document.getElementById('hidojnik_'+ product.id);
        let name_cartoon_Francia = document.getElementById('name_cartoon_'+ product.id);
        let material_Francia = document.getElementById('material_'+ product.id);
        let cena_Francia = document.getElementById('cena_'+ product.id);
        
        img_Francia.src= product.src;
        hudojnik_Francia.innerHTML= product.aftor;
        name_cartoon_Francia.innerHTML= product.name;
        material_Francia.innerHTML= product.material;
        cena_Francia.innerHTML= product.cena;
        
     };
    };

/*
     function rand_2() {
        
        for(i = 0; i < obj.germania.length; i++) {
            var product = obj.germania[i];
            var img_Germania = document.getElementById('img_'+ product.id);
            let hudojnik_Germania = document.getElementById('hidojnik_'+ product.id);
            let name_cartoon_Germania = document.getElementById('name_cartoon_'+ product.id);
            let material_Germania = document.getElementById('material_'+ product.id);
            let cena_Germania = document.getElementById('cena_'+ product.id);
            
            img_Germania.src= product.src;
            hudojnik_Germania.innerHTML= product.aftor;
            name_cartoon_Germania.innerHTML= product.name;
            material_Germania.innerHTML= product.material;
            cena_Germania.innerHTML= product.cena;
            
         };
        };

        function rand_3() {
        
            for(i = 0; i < obj.england.length; i++) {
                var product = obj.england[i];
                var img_England = document.getElementById('img_'+ product.id);
                let hudojnik_England = document.getElementById('hidojnik_'+ product.id);
                let name_cartoon_England = document.getElementById('name_cartoon_'+ product.id);
                let material_England = document.getElementById('material_'+ product.id);
                let cena_England = document.getElementById('cena_'+ product.id);
                
                img_England.src= product.src;
                hudojnik_England.innerHTML= product.aftor;
                name_cartoon_England.innerHTML= product.name;
                material_England.innerHTML= product.material;
                cena_England.innerHTML= product.cena;
                
             };
            };


          


         

        
   



/*
let knopkaGermania =document.getElementById('germania');
let img_1_Germania = document.getElementById('img_1');
let img_2_Germania = document.getElementById('img_2');
let img_3_Germania = document.getElementById('img_3');
let img_4_Germania = document.getElementById('img_4');
let img_5_Germania = document.getElementById('img_5');
let img_6_Germania= document.getElementById('img_6');
let hudojnik_1_Germania = document.getElementById('hidojnik_1');
let hudojnik_2_Germania = document.getElementById('hidojnik_2');
let hudojnik_3_Germania = document.getElementById('hidojnik_3');
let hudojnik_4_Germania = document.getElementById('hidojnik_4');
let hudojnik_5_Germania = document.getElementById('hidojnik_5');
let hudojnik_6_Germania = document.getElementById('hidojnik_6');
let name_cartoon_1_Germania = document.getElementById('name_cartoon_1');
let name_cartoon_2_Germania = document.getElementById('name_cartoon_2');
let name_cartoon_3_Germania = document.getElementById('name_cartoon_3');
let name_cartoon_4_Germania= document.getElementById('name_cartoon_4');
let name_cartoon_5_Germania = document.getElementById('name_cartoon_5');
let name_cartoon_6_Germania= document.getElementById('name_cartoon_6');
let material_1_Germania = document.getElementById('material_1');
let material_2_Germania = document.getElementById('material_2');
let material_3_Germania = document.getElementById('material_3');
let material_4_Germania = document.getElementById('material_4');
let material_5_Germania= document.getElementById('material_5');
let material_6_Germania= document.getElementById('material_6');
let cena_1_Germania = document.getElementById('cena_1');
let cena_2_Germania= document.getElementById('cena_2');
let cena_3_Germania = document.getElementById('cena_3');
let cena_4_Germania = document.getElementById('cena_4');
let cena_5_Germania = document.getElementById('cena_5');
let cena_6_Germania = document.getElementById('cena_6');

    function rand_2() {
        img_1_Germania.src="./img/germania_01.svg";
        img_2_Germania.src="./img/germania_02.svg";
        img_3_Germania.src="./img/germania_03.svg";
        img_4_Germania.src="./img/germania_04.svg";
        img_5_Germania.src="./img/germania_05.svg";
        img_6_Germania.src="./img/germania_06.svg";
        hudojnik_1_Germania.innerHTML="Курт Вернер";
        hudojnik_2_Germania.innerHTML="Макс Рихтер";
        hudojnik_3_Germania.innerHTML="Мартин Майер";
        hudojnik_4_Germania.innerHTML="Герман Беккер";
        hudojnik_5_Germania.innerHTML="Вульф Бауэр";
        hudojnik_6_Germania.innerHTML="Вальтер Хартманн";
        name_cartoon_1_Germania.innerHTML="Над городом";
        name_cartoon_2_Germania.innerHTML="Птенцы";
        name_cartoon_3_Germania.innerHTML="Среди листьев";
        name_cartoon_4_Germania.innerHTML="Яркая птица";
        name_cartoon_5_Germania.innerHTML="Дятлы";
        name_cartoon_6_Germania.innerHTML="Большие воды";
        material_1_Germania.innerHTML="Цветная литография (40х60)";
        material_2_Germania.innerHTML="Холст, масло (50х80)";
        material_3_Germania.innerHTML="Цветная литография (40х60)";
        material_4_Germania.innerHTML="Цветная литография (40х60)";
        material_5_Germania.innerHTML="Бумага, акрил (50х80)";
        material_6_Germania.innerHTML="Бумага, акрил (50х80)";
        cena_1_Germania.innerHTML="16 000 руб";
        cena_2_Germania.innerHTML="14 500 руб";
        cena_3_Germania.innerHTML="20 000 руб";
        cena_4_Germania.innerHTML="13 000 руб";
        cena_5_Germania.innerHTML="20 000 руб";
        cena_6_Germania.innerHTML="23 000 руб";
    };

*/
   