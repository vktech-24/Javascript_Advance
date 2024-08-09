document.addEventListener("DOMContentLoaded",function(){
    const dataform=document.getElementById("dataform");
    const datainput=document.getElementById("datainput");
    const datalist=document.getElementById("datalist");
    
    loadStoredData();

    dataform.addEventListener("submit",function(e){
        e.preventDefault();
        const  data=datainput.value.trim();
        if(data!==""){
            addToLocalStorage(data);
            loadStoredData();
            datainput.value="";
        }else{
            alert("please enter the data");
            datainput.focus();
        }
    })

    //add new data to localstorage

     function addToLocalStorage(data){
        const storedData=JSON.parse(localStorage.getItem("myData") ) || [];
        storedData.push(data);
        localStorage.setItem("myData",JSON.stringify(storedData));
     }

    //load all data from localstorage

    function loadStoredData(){
        const storedData=JSON.parse(localStorage.getItem("myData")) || [];
        datalist.innerHTML="";
        storedData.forEach((data,index) => {
            /*
            const li=document.createElement("li");
            li.textContent=data;
            datalist.appendChild(li); */
            let output=`
            <li>${data}
            <div>
            <button class="btnEdit" data-index='${index}' >Edit</button>
            <button class="btnDelete" data-index='${index}' >Delete</button>
            </div>
            <\li>
            `
            datalist.innerHTML+=output;
        });
        const delButtons=document.querySelectorAll(".btnDelete");
        delButtons.forEach((btn)=>{
            btn.addEventListener("click",deleteData);
        })

        const editButtons=document.querySelectorAll(".btnEdit");
        editButtons.forEach((btn)=>{
            btn.addEventListener("click",editData);
        })
    }


   function deleteData(){
    const index=this.dataset.index;
    const storedData=JSON.parse(localStorage.getItem("myData")) || [];
    storedData.splice(index,1);
    localStorage.setItem("myData",JSON.stringify(storedData));
    loadStoredData();
   }
  
   function editData(){
    const index=this.dataset.index;
    const storedData=JSON.parse(localStorage.getItem("myData")) || [];
    const newData=prompt("edit Username",storedData[index]);
    if(newData!==null){
        storedData[index]=newData.trim();
        localStorage.setItem("myData",JSON.stringify(storedData));
        loadStoredData();
    }
   }
   
});