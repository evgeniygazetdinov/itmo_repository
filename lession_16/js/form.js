let date = new Date();
console.log(`${date.getDay()}
.${date.getMonth()}.
.${date.getFullYear()}`);

let comments = document.getElementById('comments');
let form = document.forms.comments;
form.addEventListener("submit",commet_gen);

function commet_gen(event){
    //unbound event send
    event.preventDefault();
    let formData = new FormData(form);
    let comment = formData.get('comment');
    let new_block = document.createElement('div');
    let img = document.createElement('img');


    let comment_container = document.createElement('p');
    let dataContainer = document.createElement('p');
    comment.innerText = comment;
    dataContainer.innerText = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}` ;

    img.src = 'img/tiger.png';
    new_block.append(img,comment_container,dataContainer);
    comments.append(new_block);
}