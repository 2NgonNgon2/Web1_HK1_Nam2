const anchorBtn = document.querySelector(".back-to-menu");

anchorBtn.addEventListener("click",function changeLocation(event)
{
  let y = event.pageY;
  console.log(y);
  if( y<703)
  {
    console.log(y);
    anchorBtn.setAttribute("href","#menu");
  }
  if( y>703 && y < 1500)
  {
    console.log(y);
    anchorBtn.setAttribute("href","#");
  }
  if( y >= 1500)
  {
    console.log(y);
    anchorBtn.setAttribute("href","#menu");
  }
})

console.log(123);