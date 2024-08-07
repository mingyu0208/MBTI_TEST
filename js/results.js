import { results, mbtis } from './data.js'

//http://127.0.0.1:5500/results.html?mbti=isfj
const mbti =  new URLSearchParams(location.search).get('mbti')
console.log(mbti)
const result = results[mbtis[mbti]]

const titleEl = document.querySelector('.page-title')
const characterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')
const jobEls = document.querySelectorAll('.job')
const lectureEl = document.querySelector('.lecture')
const lectureImgEl = document.querySelector('.lecture img')

titleEl.innerHTML = result.title
characterEl.src = result.character
boxEls.forEach(function (boxEl, index) {
    boxEl.innerHTML = result.results[index]
})
//job
jobEls.forEach(function (jobEl, index) {
    jobEl.innerHTML = result.jobs[index]
})
//강의
lectureEl.href = result.lectureUrl
lectureImgEl.src = result.lectureImg