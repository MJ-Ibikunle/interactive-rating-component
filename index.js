const rateBtns = document.querySelectorAll(".rate")
const submitBtn = document.querySelector(".submit")
const rating = document.querySelector(".rating")
const wrapper1 = document.querySelector(".wrapper-1")
const wrapper2 = document.querySelector(".wrapper-2")

rateBtns.forEach((rate, index) => {
    rate.addEventListener('click', function () {
        rating.innerText = index + 1
        rateBtns.forEach(rate => (
            rate.classList.remove('clicked')
        ))
        this.classList.add('clicked')
        if (rate.classList.contains('clicked')) {
            submitBtn.addEventListener('click', function () {
                wrapper1.style.display = 'none'
                wrapper2.style.display = 'block'
            })
        }
    })
})