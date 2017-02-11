function showText(el){
  if(el.previousElementSibling.clientHeight === 85){
    el.previousElementSibling.style.height = "100%";
    el.innerHTML = "Show Less...";
  }else{
    el.previousElementSibling.style.height = "85px";
    el.innerHTML = "Read More...";
  }
}
