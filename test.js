document.addEventListener('DOMContentLoaded',function(){

    document.addEventListener('change',function(event){
        let a=document.getElementsByTagName('p');
        a=a[0]
        a.textContent='hello'
    },false);



},false);