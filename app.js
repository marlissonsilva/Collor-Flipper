const colors = [];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');
const btnAdd = document.querySelector('#btn-add')
const openAdd = document.querySelector('#add')

btn.addEventListener('click', function () {
    // get random number between 0 - 3 (array colors)
    if (colors.length == '') {
        alert('Adicione cores clicando no + !')
    } else {
        const randomNumber = getRandomNumber();
        // console.log(randomNumber)
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber]
        // console.log(colors.length)
    }

})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length); // tem que ser gerardo um numero inteiro 
    //para que seja referente aos index do array por isso o (Math.floor)
    // Math.random() dessa forma retorna entre 0 e 1
}


btnAdd.addEventListener('click', () => {
    let inputColor = document.querySelector('#input-color')
    console.log(inputColor.value);
    colors.push(inputColor.value);
    alert('Adicionado com sucesso')
    console.log(colors)
})

openAdd.addEventListener('click', function () {
    let open = document.querySelector('#add-colors').classList.toggle('openned');
    console.log(open)
    if (open == true) {
        openAdd.innerHTML = '<span class="material-symbols-outlined">cancel</span>'
        openAdd.style.color = 'red';
    } else {
        openAdd.innerHTML = '<span class="material-symbols-outlined">add_circle</span>'
        openAdd.style.color = 'inherit';
    }
});








