/*
Note: underdevolopement

function onget(tab) {
  //Your code below...
  var tabUrl = encodeURIComponent(tab.url);
  var tabTitle = encodeURIComponent(tab.title);

  //Update the url here.
  browser.tabs.update(tab.id, {url: url});
}
*/

function open(url)
{
  //browser.tabs.getCurrent().then(onget);?
  browser.tabs.create({url:url});
}

document.addEventListener("click",(e)=>{
if(e.target.id==="a"){
	open("http://www.facebook.com");
} else if(e.target.id==="b"){
open("http://www.linkedin.com");
}else if(e.target=="c"){
	open("http://www.github.com");
}
else if(e.target.id=="d"){
	open("http://www.amazon.com");
}
else if(e.target.id=="e"){
	open("http://www.flipkart.com");
}
else if(e.target.id="f"){
	open("http://www.myntra.com");
}

});
