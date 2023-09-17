let title=document.getElementById('title');
let price=document.getElementById("price");
let ads=document.getElementById("Ads");
let tax=document.getElementById("Taxes");
let Discount=document.getElementById("Discount");
let total= document.getElementById('total');
let catogry=document.getElementById('catogry');
let count=document.getElementById('count');
let creatBtn=document.getElementById('creat');
let deletDiv=document.getElementById('mon');
let sum1,sum2;
let mod='creat';
let temb;
// get total
let arryProduct=[];
function getTotal(){
    sum1 = +price.value + +ads.value + +tax.value - +Discount.value; 
   sum2=sum1;
   if(price.value!=''){
  total.innerHTML = 'Total :'+sum2;
  total.style.backgroundColor='green';
  
   }


}


if(localStorage.products!=null){
    arryProduct=JSON.parse(localStorage.products);
   
    
}
else{
    arryProduct=[];
    
}

//creat element

let obj1;
creatBtn.onclick=function(){
    obj1={
        titleObj:title.value,
        priceObj:price.value,
        taxesObj:tax.value,
        adsObj:ads.value,
        DiscountObj:Discount.value,
        TotalObj:sum1,
        catogryObj:catogry.value,
        
    
    
    }
    if(mod==='creat'){
      if(price.value!=''&&count.value!=''&&catogry.value!=''&&title.value!='')
    for(let i=1;i<count.value;i++){
       arryProduct.push(obj1);
        
        
    }
}
    

    else{
      
        arryProduct[temb]=obj1;
        mod='creat';
        
    }

   




    localStorage.setItem('products',JSON.stringify(arryProduct));
    
    red();
    deletinp();
    
    
    
}
window.onload=function(){
    red();
    deletinp();
  
    
}
// red 

function red(){
    let tb;
for(let i=0;i<arryProduct.length;i++){
    tb +=`
    <tr>
    <td>${i+1}</td>
    <td>${arryProduct[i].titleObj}</td>
    <td>${arryProduct[i].priceObj}</td>
    <td>${arryProduct[i].taxesObj}</td>
    <td>${arryProduct[i].adsObj}</td>
    <td>${arryProduct[i].DiscountObj}</td>
    <td>${arryProduct[i].catogryObj}</td>
    <td>${arryProduct[i].TotalObj}</td>

    <td >  <div class="btn btn-outline-primary" id="s-up" onclick="updatOutput(${i})">Udpate</div>
        <div class="btn btn-outline-primary" id="s-Delet"  onclick="deletOutput(${i})">Delet</div>
     </td>
</tr>
    `
    
}
 
 document.getElementById('tb').innerHTML=tb;


if(arryProduct.length>0){
    deletDiv.innerHTML=`
    <div class="btn btn-primary" onclick="del()" id=DeletAll1> Dallet All ${arryProduct.length}</div>

    
    `
   
}
else{
    deletDiv.innerHTML='';
}


}
// delet input
function deletinp(){
    title.value='';
    price.value='';
    tax.value='';
    ads.value='';
    catogry.value='';
    Discount.value='';
    count.value='';
    total.innerHTML = 'Total:';
    total.style.backgroundColor='red';
}
// ubdate
function updatOutput(i){
   temb=i;
title.value=arryProduct[i].titleObj;
price.value=arryProduct[i].priceObj;
ads.value=arryProduct[i].adsObj;
tax.value=arryProduct[i].taxesObj;
count.style.display='none';
catogry.value=arryProduct[i].catogryObj;
Discount.value=arryProduct[i].DiscountObj;
getTotal();
mod='ubdate';
creatBtn.innerHTML="Ubdate";
creatBtn.style.background=" rgb(18, 145, 243)";
creatBtn.style.color='white';


}
//function deletElement
function deletOutput(i){
arryProduct.splice(i,1);
console.log(i);
localStorage.setItem('products',JSON.stringify(arryProduct));
red();
}

//function DeletAll


function del(){
   localStorage.clear();
  arryProduct.splice(0);
  red();
   
}
