const itemToValidate = document.querySelectorAll(".value")
const itemToModify = document.querySelectorAll(".item")
const submit = document.getElementById("send-btn")

submit.addEventListener("click", function () {
    validate()
})

function validate() {
    itemToValidate.forEach((item, index) => {
        if (item.value) {
            if (itemToModify[index].classList.contains('invalid')) {
                itemToModify[index].classList.remove('invalid')
            }
            itemToModify[index].classList.add('valid')
        } else {
            if (itemToModify[index].classList.contains('valid')) {
                itemToModify[index].classList.remove('valid')
            }
            itemToModify[index].classList.add('invalid')
        }
    })
}