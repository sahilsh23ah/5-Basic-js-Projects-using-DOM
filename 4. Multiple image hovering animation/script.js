
let elem = document.querySelectorAll('.elem');

// let elemimg = document.querySelector('#elem1 img');

// elem.addEventListener('mousemove',function(debts){
//     elemimg.style.left = debts.x+'px';
//     elemimg.style.top = debts.y+'px';
// })
// elem.addEventListener('mouseenter',function(debts){
//     elemimg.style.opacity = 1
// })
// elem.addEventListener('mouseleave',function(debts){
//     elemimg.style.opacity = 0
// })


elem.forEach(function (val) {
    // console.log(val.childNodes);
    // console.log(val.childNodes[1]);
    val.addEventListener('mouseenter', function () {
        val.childNodes[3].style.opacity = 1;
    })
    val.addEventListener('mouseleave', function () {
        val.childNodes[3].style.opacity = 0;
    })
    val.addEventListener('mousemove', function (dets) {
        val.childNodes[3].style.left = dets.x+'px';
        // val.childNodes[3].style.top = dets.y+'px';
    })
   
})