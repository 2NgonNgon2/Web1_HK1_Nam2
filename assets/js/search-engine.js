const search_inp = document.querySelector("#search_text");
const search_btn = document.querySelector("#search_button");
//console.log(search_inp);

function searchEngine(event)
{
  console.log(search_inp.value);
  tmpProduct = [];

  for(let i=0; i<product.length; i++)
  {
    if(product[i].name.toLowerCase().match(search_inp.value.toLowerCase()) != null)
    {
      tmpProduct.push(product[i]);
    }
  }
  event.preventDefault();
  createPageNum(tmpProduct);
  pageOneHandle();
}

function searchEngineAdmin(event)
{
  console.log(search_inp.value);
  tmpProduct = [];

  for(let i=0; i<product.length; i++)
  {
    if(product[i].name.toLowerCase().match(search_inp.value.toLowerCase()) != null)
    {
      tmpProduct.push(product[i]);
    }
  }
  event.preventDefault();
  createPageNumAdmin(tmpProduct);
  pageOneHandleAdmin();
}

function getEnterKey(event) {
  if(event.keyCode == 13)
  searchEngine(event);
}
search_inp.addEventListener('keypress',getEnterKey)

// // sap xep giam dan
$(".down").click(function(){
  var tmp;
  for(let i=0; i<tmpProduct.length-1;i++){
    for(let j=i+1;j<tmpProduct.length;j++){
      if(parseFloat(tmpProduct[i].price,10)<parseFloat(tmpProduct[j].price,10)){
        tmp=tmpProduct[i];
        tmpProduct[i]=tmpProduct[j];
        tmpProduct[j]=tmp;
      }
    }
  }
  createPageNum(tmpProduct);
  pageOneHandle();
})
// sap xep tang dan
$(".up").click(function(){
  var tmp;
  for(let i=0; i<tmpProduct.length-1;i++){
    for(let j=i+1;j<tmpProduct.length;j++){
      if(parseFloat(tmpProduct[i].price,10)>parseFloat(tmpProduct[j].price,10)){
        tmp=tmpProduct[i];
        tmpProduct[i]=tmpProduct[j];
        tmpProduct[j]=tmp;
      }
    }
  }
  createPageNum(tmpProduct);
  pageOneHandle();
})
var menuToggle = document.querySelector(".menuToggle");
menuToggle.onclick = function(){
  menuToggle.classList.toggle('active');
}

