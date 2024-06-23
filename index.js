function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  };

  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }


  let bagItems2;
onLoad();

function onLoad(){
let bagItems2Str =localStorage.getItem('bagItems2');
bagItems2 = bagItems2Str ? JSON.parse(bagItems2Str):[];
displayItemsOnHomePage();
displayBagIcon();
}

function addToBag(iteamId){
bagItems2.push(iteamId);
localStorage.setItem('bagItems2',JSON.stringify(bagItems2));
displayBagIcon();
};

function displayBagIcon(){
let bagItemCountElement =document.querySelector('.bag-item-count');
if(bagItems2.length >0){
  bagItemCountElement.style.visibility = 'visible'
bagItemCountElement.innerText = bagItems2.length;
}
else{
  bagItemCountElement.style.visibility ='hidden';
}
}
function displayItemsOnHomePage(){
let iteamContainerElement = document.querySelector('.items-container');

let innerHTML ='';
items.forEach(item =>{
innerHTML += `<div class="item-container">
<img class="item-image" src="${item.image}" alt="iteam-image">
<div class="rating">
  ${item.rating.stars} ⭐ | ${item.rating.count}
</div>
<div class="company-name">${item.company}</div>
<div class="item-name">${item.iteam_name}</div>
<div class="price">
  <span class="current-price">RS ${item.current_price} </span>
  <span class="original-price">RS ${item.original_price} </span>
  <span class="discount">(${item.discount} % OFF)</span>
</div>
<button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
</div>`
});

iteamContainerElement.innerHTML = innerHTML;
}

