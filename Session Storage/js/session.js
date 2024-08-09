        const fullname=document.getElementById("name");
        const email=document.getElementById("email");
        const button=document.getElementById("btnstep1next");

        function loadsession(){
            let data=sessionStorage.getItem("formData") || {};
            if(data.length>0){
                data=JSON.parse(data);
                fullname.value=data.name;
                email.value=data.email;
            }
        }
        loadsession()

        button.addEventListener("click",function(){
            if(fullname.value != "" && email.value  != ""){
               const formdata=JSON.parse(sessionStorage.getItem("formData")) || {};
            
               formdata.name=fullname.value;
               formdata.email.email.value;
               
               sessionStorage.setItem("formData",JSON.stringify(formdata))
               window.location.href="http://127.0.0.1:5500/index2.html?";
            }else{
                alert("Please Enter Any Value")
                fullname.focus();
            }
        })