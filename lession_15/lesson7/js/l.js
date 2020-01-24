let all_elements = document.querySelectorAll('.article p:first-child');
for (let i of all_elements){
    i.addEventListener('click',openDiscription);
}
function openDiscription(){
    console.log(this.nextElementSibling.classList.toggle('open'));
}


function obtain_Present() {
    return {
        car: 'car',
        book: 'tolstoi',
        dog: 'sobaka'

    }
}



let presents_container = document.getElementById('present_container');
presents_container.addEventListener('click',get_present)

function get_present(event){
    let clickEvent = event.target;
    let present = clickEvent.dataset.present;
    console.log('present',present);
    if (present){
        let presents = obtain_Present();
        clickEvent.innerText = presents[present];
        clickEvent.classList.add('present');
        //удаление обработчика
        this.removeEventListener('click',get_present);
    }
}


//event target



window.addEventListener('scroll',fixed_menu)
    function fixed_menu(){
        let fixed = document.getElementById('fixed');
        //получили отступ
        let fixed_offset = fixed.offsetTop;
        console.log(fixed_offset);
        console.log(window.pageYOffset);
        if (window.pageYOffset> fixed_offset){
            fixed.classList.add('fixed');
        }
        else{
            fixed.classList.remove('fixed');
        }
   }
