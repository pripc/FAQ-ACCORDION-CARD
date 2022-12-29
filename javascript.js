let answer = document.querySelectorAll('.answer')
let question = document.querySelectorAll('.question')
let btn = document.querySelectorAll('.arrow')

function openText(){
    for (let i = 0; i < answer.length; i++){
        question[i].addEventListener('click', 
        function(){
            question[i].classList.toggle('questionBold')
            answer[i].classList.toggle('answerActive')
            btn[i].classList.toggle('arrowReverter')
        })
    }
}
document.addEventListener('click', openText)