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