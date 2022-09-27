console.log('HEROPY !');

const elements = document.querySelectorAll('div')
elements.forEach(element => {
    console.log(element.dataset.fruitName)
})
const elements2 = document.querySelectorAll('div')
elements2.forEach(element => {
    console.log(element.dataset.helloWorld)
})