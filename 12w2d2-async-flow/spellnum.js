let breakfast = ''

const howDoYouLikeThem = function(wait, food, callback) {
  // console.log('two')
  setTimeout(() => {
    // console.log('about to cook my eggs ',style)
    food = food + '!'
    // console.log('eggs already cooked ', eggs)
    callback(food);
  }, wait)
}

howDoYouLikeThem(1000,'scrambled eggs',(something) => {
  breakfast += something;
  console.log(breakfast)
  howDoYouLikeThem(500,'beans',(something) => {
    breakfast += something;
    console.log(breakfast)
    howDoYouLikeThem(2500,'juice',(something) => {
      breakfast += something;
      console.log(breakfast)
    })
  })
})

console.log(breakfast)

// howDoYouLikeThem(1000, 'sunny side up')

// howDoYouLikeThem(4000, 'boiled')

// howDoYouLikeThem(7000, 'divorciados')

// setTimeout(() => console.log('four'),4000)
// console.log('one')
// setTimeout(sayTwo, 2000);
// setTimeout(() => {
//   console.log('five')
//   let eggs = 'divorciados'
// },5000)
// setTimeout(() => console.log('three'),3000)

setTimeout(() => {
  console.log("spying ... ", breakfast)
},2000)
