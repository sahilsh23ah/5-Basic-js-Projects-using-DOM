
let arr = [
    {dp:"https://images.unsplash.com/photo-1634715281818-ce65b4dbc99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kYWx8ZW58MHx8MHx8fDA%3D" , story:"https://plus.unsplash.com/premium_photo-1706807135350-a941059423fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1706931723296-128969930baa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D", story:"https://plus.unsplash.com/premium_photo-1705170986123-a82af3a2e543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1707024258954-43c030ebab1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1682687218904-de46ed992b58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1706806594968-06036c7c8064?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D" , story:"https://plus.unsplash.com/premium_photo-1677655475272-d7f32a9abf40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1682685797703-2bb22dbb885b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" , story:"https://images.unsplash.com/photo-1682685796467-89a6f149f07a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"}
    
];

let storiyan = document.querySelector('#storiyan');

let cultter = '';
arr.forEach(function(value , idx){
  cultter += ` <div class="story">
  <img src="${value.dp}" alt="" id= "${idx}">
</div>`
})
storiyan.innerHTML = cultter;

storiyan.addEventListener('click',function(dets){
    // arr[dets.target.id].story;
    document.querySelector('#full-screen').style.display = 'block';
    document.querySelector('#full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function(){
        document.querySelector('#full-screen').style.display = 'none';
    },2000)
})