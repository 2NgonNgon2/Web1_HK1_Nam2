const search_inp = document.querySelector("#search_text");
const search_btn = document.querySelector("#search_button");
//console.log(search_inp);

function search()
{
  console.log(search_inp.value);
  productMatchPerfectly = [];

  for(let i=0; i<product.length; i++)
  {
    if(product[i].name.toLowerCase() === search_inp.value.toLowerCase()  )
    {
      tmpProduct.push(product[i]);
    }
  }
  createPageNum(tmpProduct);
  pageOneHandle();
}

search_btn.onclick = search;