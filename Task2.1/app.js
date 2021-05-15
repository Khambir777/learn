const heading = document.getElementById('hello')
const heading2 = document.querySelector('.h2-class')
console.log(heading.textContent)


setTimeout (() => {
    addStylesTo(heading2)

}, 2300)

function addStylesTo (node,text) {
node.style.textAlign = 'center'
node.style.padding = '2rem'
node.style.color = '#ffff'
node.style.background = 'blue'

}



setTimeout (() => {
    addStylesTo(heading)

}, 1500)

function addStylesTo (node2) {

    node2.textContent = ' Я учу Java Script!'
    node2.style.color = '#ffff'
    node2.style.textAlign = 'center'
    node2.style.background = 'grey'
    node2.style.padding = '3rem'
}