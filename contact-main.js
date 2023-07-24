let inp = document.querySelectorAll('.inp-fild .form-control')

for(let e of inp){
    e.addEventListener('focusin', function () {
        this.nextElementSibling.classList.add('view')
        this.placeholder = ''
    })
}
for(let e of inp){
    e.addEventListener('focusout', function () {
        let txt = this.nextElementSibling.innerText
        this.nextElementSibling.classList.remove('view')
        this.placeholder = txt
    })
}
