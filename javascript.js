
var title = document.getElementById('title');
var price = document.getElementById('price');
var taxes = document.getElementById('taxes');
var ads = document.getElementById('ads');
var discount = document.getElementById('discount');
var total = document.getElementById('total');
var count = document.getElementById('count');
var category = document.getElementById('category');
var submit = document.getElementById('submit');

var mood = "Create";
var tmp;

function getTotal() {

        if(price.value != ''){
              var result = (+price.value + +taxes.value + +ads.value)
                           - +discount.value;
                total.innerHTML = result;
                total.style.background = '#040';

        }else{

                total.innerHTML =''
                total.style.background = '#a00d02'
        };
}

var dataPro;
if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)    
}else{
        dataPro = []
}



submit.onclick = function(){
        var newPro = {
                title:title.value,
                price:price.value,
                taxes:taxes.value,
                ads:ads.value,
                discount:discount.value,
                total:total.innerHTML,
                count:count.value,
                category:category.value,
                



        }



        if(title.value != '' 
        && price.value != ''
         && category.value != ''
         && newPro.count <= 100
         ){

                if(mood === 'Create'){
                        if(newPro.count > 1 ){
                                for(var i = 0; i < newPro.count;i++){
                                        dataPro.push(newPro);
                                
                                }
                        }else{
                                dataPro.push(newPro);

                        }               
                } else{
                        dataPro[ tmp  ] = newPro ;
                        mood = 'Create';
                        submit.innerHTML= "Create";
                        count.style.display = "block";
                 }       
                 clearData()
        }else{
                alert("Dictation of necessary evidence **")
        }
                
        

        localStorage.setItem('product', JSON.stringify(dataPro)  )

        
        showData()



}



function clearData(){
   title.value= '';
   price.value= '';
   taxes.value= '';
   ads.value= '';
   discount.value= '';
   total.innerHTML ='';
   count.value= '';
   category.value= '';

}



function showData(){
        getTotal()
        let table ='';
        for(let i = 0; i < dataPro.length;i++){
                table += `
                <tr>
                        <td>${i+1}</td>
                        <td>${dataPro[i].title}</td>
                        <td>${dataPro[i].price}</td>
                        <td>${dataPro[i].taxes}</td>
                        <td>${dataPro[i].ads}</td>
                        <td>${dataPro[i].discount}</td>
                        <td>${dataPro[i].total}</td>
                        <td>${dataPro[i].category}</td>
                        <td><button onclick="updateData(${i})" id="update"> Update</button></td>
                        <td><button onclick="deleteData( ${i} )" id="delete"> Delete</button></td>

                </tr>
                `
                 
                    
        }
        document.getElementById('tbody').innerHTML = table;
        var btnDelete = document.getElementById('deleteAll');
        if(dataPro.length > 0){
                btnDelete.innerHTML=` 
                
                <button id="delettout" onclick="deleteAll()" > Delete All(${dataPro.length})</button>
                `
        }else{
                btnDelete.innerHTML = '';
        }



}
showData()



function deleteData(i){


dataPro.splice(i,1);
localStorage.product = JSON.stringify(dataPro)
showData()

}


function deleteAll(){
        localStorage.clear()
        dataPro.splice(0)
        showData()
}


function updateData(i){
        title.value = dataPro[i].title;
        price.value = dataPro[i].price;
        taxes.value = dataPro[i].taxes;
        ads.value = dataPro[i].ads;
        discount.value = dataPro[i].discount;
        getTotal()
        count.style.display = 'none';
        category.value =dataPro[i].category;
        submit.innerHTML = "Update" ;
        mood = 'Update';
        tmp = i;
        scroll({
                top:0,
                behavior: 'smooth',

        })

}




var SearchMood = 'title';

function getSearchMood(id) {
     var search = document.getElementById('search');
        if(id == 'searchtitle'){
               SearchMood = 'title';
               search.placeholder ='Search By category';    
        }else{
                SearchMood = 'category';
                search.placeholder ='Search By Type'  ;
        }
search.focus()
search.value ="";
showData()

}

function searchData(value){
        var table = '';
        if(SearchMood == 'title'){
                for(var i =0; i < dataPro.length;i++){
                        if(dataPro[i].title.includes(value)){
                                        table += `
                                                <tr>
                                                        <td>${i}</td>
                                                        <td>${dataPro[i].title}</td>
                                                        <td>${dataPro[i].price}</td>
                                                        <td>${dataPro[i].taxes}</td>
                                                        <td>${dataPro[i].ads}</td>
                                                        <td>${dataPro[i].discount}</td>
                                                        <td>${dataPro[i].total}</td>
                                                        <td>${dataPro[i].category}</td>
                                                        <td><button onclick="updateData(${i})" id="update"> Update</button></td>
                                                        <td><button onclick="deleteData( ${i} )" id="delete"> Delete</button></td>
                                                </tr>
                                                `;
                        }
                }
        }else{
               
                for(var i =0; i < dataPro.length;i++){
                        if(dataPro[i].category.includes(value)){
                                        table += `
                                                <tr>
                                                        <td>${i}</td>
                                                        <td>${dataPro[i].title}</td>
                                                        <td>${dataPro[i].price}</td>
                                                        <td>${dataPro[i].taxes}</td>
                                                        <td>${dataPro[i].ads}</td>
                                                        <td>${dataPro[i].discount}</td>
                                                        <td>${dataPro[i].total}</td>
                                                        <td>${dataPro[i].category}</td>
                                                        <td><button onclick="updateData(${i})" id="update"> Update</button></td>
                                                        <td><button onclick="deleteData( ${i} )" id="delete"> Delete</button></td>
                                                </tr>
                                                `; 
                        }



                }
                


        }
        document.getElementById('tbody').innerHTML = table;       
}
function secroles(){

        scroll({
                top:0,
                behavior: 'smooth',

        })
}


