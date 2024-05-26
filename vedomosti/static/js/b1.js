// ----- Событие по нажатию кнопки ПРИМЕР -----
document.querySelector('.primer1_b1').onclick = myPriber_b1;

function myPriber_b1(){
    let arr_b1 = ['Обмотчик тюков и рулонов Speedway 120', 'НЭС', '28.07.2023', 'Рулетка, угломер'];
    let arr_b1_1 = ['Грунт', 100.5, 20.6, 1];
    let arr_b1_2 = ['Грунт', 102.5, 20.4, 3];
    let arr_b1_3 = ['Грунт', 100, 20.5, 2];
    
    document.querySelector('.i_1').value = arr_b1[0];
    document.querySelector('.i_2').value = arr_b1[1];
    document.querySelector('.i_3').value = arr_b1[2];
    document.querySelector('.i_4').value = arr_b1[3];

    document.querySelector('.text_1').value = arr_b1_1[0];
    document.querySelector('.l_1').value = arr_b1_1[1];
    document.querySelector('.h_1').value = arr_b1_1[2];
    document.querySelector('.ukl_1').value = arr_b1_1[3];

    document.querySelector('.text_2').value = arr_b1_2[0];
    document.querySelector('.l_2').value = arr_b1_2[1];
    document.querySelector('.h_2').value = arr_b1_2[2];
    document.querySelector('.ukl_2').value = arr_b1_2[3];

    document.querySelector('.text_3').value = arr_b1_3[0];
    document.querySelector('.l_3').value = arr_b1_3[1];
    document.querySelector('.h_3').value = arr_b1_3[2];
    document.querySelector('.ukl_3').value = arr_b1_3[3];
}   

// ------ Кнопка ОЧИСТИТЬ ПОЛЯ  -----
document.querySelector('.reset').onclick = clear_input;

function clear_input() {
    let inputs = document.getElementsByTagName("input");
    for(var i=0; i<inputs.length; i++)
        inputs[i].value = '';
}
//     document.querySelector('.i_1').value='';
//     document.querySelector('.i_2').value='';
//     document.querySelector('.i_3').value='';
//     document.querySelector('.i_4').value='';

// ----- Кнопка РАСЧЁТ -----

document.querySelector('.raschet_b1').onclick = raschet;

function raschet() {
    let l1 = +document.querySelector('.l_1').value;
    let l2 = +document.querySelector('.l_2').value;
    let l3 = +document.querySelector('.l_3').value;

    let h1 = +document.querySelector('.h_1').value;
    let h2 = +document.querySelector('.h_2').value;
    let h3 = +document.querySelector('.h_3').value;

    let ukl1 = +document.querySelector('.ukl_1').value;
    let ukl2 = +document.querySelector('.ukl_2').value;
    let ukl3 = +document.querySelector('.ukl_3').value;

    let lsum = l1 + l2 + l3;
    document.querySelector('.l_sum').innerHTML = lsum;
    let hsum = h1 + h2 + h3;
    document.querySelector('.h_sum').innerHTML = hsum;
    let ukl_sum = ukl1 + ukl2 + ukl3;
    document.querySelector('.ukl_sum').innerHTML = ukl_sum

    let lsr = (l1+l2+l3)/3;
    document.querySelector('.l_sred').innerHTML = lsr;
    let hsr = (h1+h2+h3)/3;
    document.querySelector('.h_sred').innerHTML = hsr;
    let ukl_sr = (ukl1+ukl2+ukl3)/3;
    document.querySelector('.ukl_sred').innerHTML = ukl_sr;
}