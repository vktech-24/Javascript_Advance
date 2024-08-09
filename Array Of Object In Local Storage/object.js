document.addEventListener("DOMContentLoaded",function(){
    const model=document.querySelector(".model");
    const closeBtn=document.querySelector(".close");
    const tableBody=document.querySelector("#datalist");
    const dataform=document.getElementById("dataform");

    const nameInput=document.getElementById("nameinput");
    const ageInput=document.getElementById("ageinput");
    const genderSelect=document.getElementById("genderselect");
     
    const editform=document.getElementById("editform");
    const editIndex=document.getElementById("editIndex")
    const editNameinput=document.getElementById("editNameinput");
    const editAgeinput=document.getElementById("editAgeinput");
    const editGenderselect=document.getElementById("editGenderselect");


    dataform.addEventListener("submit",function(e){
        e.preventDefault();
        const name=nameInput.value.trim();
        const age=parseInt(ageInput.value);
        const gender=genderSelect.value;
        if((name !== "" && !isNaN(age) && gender !== "")){
            const user={
                name:name,
                age:age,
                gender:gender,
            };
            addToLocalStorage(user);
            loadStoredData();
            dataform.reset();
        }else{
            alert("Please Fill All Details")
        }
    });

    editform.addEventListener("submit",function(e){
        e.preventDefault();
        const index=editIndex.value.trim();
        const newName=editNameinput.value.trim();
        const newAge=parseInt(editAgeinput.value);
        const newGender=editGenderselect.value;
        if((newName !== "" && !isNaN(newAge) && newGender !== "")){
            const storedData=JSON.parse(localStorage.getItem("sysdata")) || [];
            storedData[index].name=newName;
            storedData[index].age=newAge;
            storedData[index].gender=newGender;
            localStorage.setItem("myData",JSON.stringify(storedData));
            dataform.reset();
            model.style.display="none";
            loadStoredData();
        }else{
            alert("Please Fill All Details")
        }
    })

    function addToLocalStorage(user){
        const storedData=JSON.parse(localStorage.getItem("sysdata")) || [];
        storedData.push(user);
        localStorage.setItem("sysdata",JSON.stringify(storedData));
    }
    

    loadStoredData();

    function editData(){
        const index=this.dataset.index;
        const storedData=JSON.parse(localStorage.getItem("sysdata")) || [];
        const data=storedData[index];
        editIndex.value=index;
        editNameinput.value=data.name;
        editAgeinput.value=data.age;
        editGenderselect.value=data.gender;
        model.style.display="block";
    }

    function deleteData(){
        if(confirm("Are You Sure To Delete?")){
            const index=this.dataset.index;
            const storedData=JSON.parse(localStorage.getItem("sysdata")) || [];
            storedData.splice(index,1);
            localStorage.setItem("sysdata",JSON.stringify(storedData));
            loadStoredData();
        }
    }
// function to close the modal  using close btn
    closeBtn.addEventListener("click",function(){
        model.style.display="none";
    })
// function to close the modal using modal window click
    window.addEventListener("click",function(e){
        if(e.target == model){
            model.style.display="none";
        }
    })

    function loadStoredData(){
        const storedData=JSON.parse(localStorage.getItem("sysdata")) || [];
        tableBody.innerHTML="";
        storedData.forEach(function(data,index){
            const row=document.createElement("tr");
            row.innerHTML=`
            <td>${data.name}</td>
            <td>${data.age}</td>
            <td>${data.gender}</td>
            <td><button data-index="${index}" class="btnEdit">Edit</button></td>
            <td><button data-index="${index}" class="btnDelete">Delete</button></td>
            `;
          tableBody.appendChild(row);
        })
        const editButtons=document.querySelectorAll(".btnEdit");
        editButtons.forEach((btn)=>{
            btn.addEventListener("click",editData);
        })

        const delButtons=document.querySelectorAll(".btnDelete");
        delButtons.forEach((btn)=>{
            btn.addEventListener("click",deleteData);
        })

    }

})