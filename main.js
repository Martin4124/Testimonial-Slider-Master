
const prev = document.querySelector(".js-prev");
const next = document.querySelector(".js-next");
const img = document.getElementById("picture");
const com = document.querySelector(".comment")
const names = document.querySelector(".name")
const prof = document.querySelector(".profession")
const animation = document.querySelector(".animation")
const text = document.querySelector(".text")
const btndiv = document.querySelector(".buttons")

next.addEventListener("click", nextEvent);
prev.addEventListener("click", prevEvent);

text.classList.add("animation-side")
    setTimeout(function(){
        text.classList.remove("animation-side")
    }, 2000)

    img.classList.add("animation-top")
    setTimeout(function(){
        img.classList.remove("animation-top")
    }, 2000)

    btndiv.classList.add("animation-top")
    setTimeout(function(){
        btndiv.classList.remove("animation-top")
    }, 2000)


function nextEvent(e){
    e.preventDefault();

    img.src="images/image-john.jpg"

    text.classList.add("animation-side")
    setTimeout(function(){
        text.classList.remove("animation-side")
    }, 2000)

    img.classList.add("animation-top")
    setTimeout(function(){
        img.classList.remove("animation-top")
    }, 2000)

    btndiv.classList.add("animation-top")
    setTimeout(function(){
        btndiv.classList.remove("animation-top")
    }, 2000)

    com.textContent ='" If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "'
    names.textContent = 'John Tarkpor'
    prof.textContent = 'Junior Front-end Developer' 
}

function prevEvent(e){
    e.preventDefault();

    img.src="images/image-tanya.jpg"

    text.classList.add("animation-top")
    setTimeout(function(){
        text.classList.remove("animation-top")
    }, 2000)

    img.classList.add("animation-side")
    setTimeout(function(){
        img.classList.remove("animation-side")
    }, 2000)

    btndiv.classList.add("animation-side")
    setTimeout(function(){
        btndiv.classList.remove("animation-side")
    }, 2000)

    com.textContent ='“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”'
    names.textContent = 'Tanya Sinclair'
    prof.textContent = 'UX Engineer'

}