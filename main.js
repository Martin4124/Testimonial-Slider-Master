
const prev = document.querySelector(".js-prev");
const next = document.querySelector(".js-next");
const img = document.getElementById("picture");
const com = document.querySelector(".comment")
const names = document.querySelector(".name")
const prof = document.querySelector(".profession")
const animation = document.querySelector(".animation")
const text = document.querySelector(".text")
const btndiv = document.querySelector(".buttons")
const main = document.getElementById("js-main")

next.addEventListener("click", nextEvent);
prev.addEventListener("click", prevEvent);



function nextEvent(e){
    e.preventDefault();

    main.classList.add("slide-out")
    setTimeout(function(){
        main.classList.remove("slide-out")
    }, 2100)
    main.addEventListener("animationend", finished)
    function finished(){

    img.src="images/image-john.jpg"
    com.textContent ='" If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "'
    names.textContent = 'John Tarkpor'
    prof.textContent = 'Junior Front-end Developer'
    main.classList.add("slide-in")
        setTimeout(function(){
            main.classList.remove("slide-in")
        }, 2000)
    }
}

function prevEvent(e){
    e.preventDefault();

    main.classList.add("slide-out-reverse")
    setTimeout(function(){
        main.classList.remove("slide-out-reverse")
    }, 2100)
    main.addEventListener("animationend", finished2)
    function finished2(){

    img.src="images/image-tanya.jpg"
    com.textContent ='“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”'
    names.textContent = 'Tanya Sinclair'
    prof.textContent = 'UX Engineer'
    main.classList.add("slide-in-reverse")
        setTimeout(function(){
            main.classList.remove("slide-in-reverse")
        }, 2000) 
    }

}