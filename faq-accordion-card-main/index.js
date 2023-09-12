const question = document.querySelectorAll(".Accordion")
let triangle = document.querySelectorAll(".questions svg")

for(i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function(){
        this.classList.toggle("active")
        const drl = this.nextElementSibling
        if (drl.style.display === "block") {
            drl.style.display = "none"
            this.style.fontWeight = "400"

        } else {
            drl.style.display = "block"
            this.style.fontWeight = "bold"
        }

        
    })
}















