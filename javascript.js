let answer = document.querySelectorAll('.answer')
let question = document.querySelectorAll('.question')
let btn = document.querySelectorAll('.arrow')

function openText(){
    for (let i = 0; i < answer.length; i++){
        question[i].addEventListener('click', 
        () => {
            question[i].classList.toggle('questionBold')
            btn[i].classList.toggle('arrowReverter')
            answer[i].classList.toggle('answerActive')
            })
        }

    }

            
openText()