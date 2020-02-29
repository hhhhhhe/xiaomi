var tabs=document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);
var list=document.getElementById("lists").getElementsByTagName("ul");
console.log(list);
for( var i=0; i<tabs.length;i++){
    tabs[i].onclick=showtabs;
}

function showtabs(){
    for(var i=0;i<tabs.length;i++){
        if(tabs[i]==this){
            tabs[i].className="active";
            list[i].className="clearfix active"
        }
        else{
            tabs[i].className="";
            list[i].className="clearfix"
        }
    } 
}
/*
var sekillNav=document.getElementById("sekillNav")
window.onscroll=function(){
    var scrollTop=document.documentElement.scrollTop;
    if(scrollTop>=330){
        sekillNav.className="sekill.nav sekill-navfixed"
    }
    else
    {
        sekillNav.className="sekill.nav"
    }

}*/