import la from './bab'
// import './style.css'
import './st2.scss'
import './lessStyle.less'
import './stylTest.styl'
import img from './2.jpg'

console.log(la)
console.log("hahahah")
let img1 = document.querySelector(".img1")
img1.innerHTML=`<img src=${img}>`
const button = document.createElement('button')
button.innerText="懒加载"
button.onclick =()=>{
    const promise = import('./lazy')
    promise.then((module)=>{
        const fn = module.default
        fn()
    },()=>{})
}
img1.appendChild(button)