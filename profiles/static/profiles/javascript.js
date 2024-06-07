
document.addEventListener('DOMContentLoaded', (event) => {
    
       /*===================================================================================*/
   const update_profile_info = document.getElementById('update_profile_info');

    function handle_update_profile_info_button_click() {
        const first_name = document.getElementById("first_name").value;
        const last_name = document.getElementById("last_name").value;
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const idnumber = document.getElementById("idnumber").value;
        const phone = document.getElementById("phone").value;

        const data2 = {
            username : username,
            first_name : first_name,
            last_name : last_name,
            email : email,
            phone :  phone ,  
            idnumber : idnumber
           
        };
       
        fetch("http://127.0.0.1:8000/profile/update/profile_information/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data2),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === "error") {
             console.log(data.errors)
              if (data.errors) {
                handleErrors(data.errors);
              } else {
                showFlashMessage("An unknown error occurred", "danger");
              }
            } else if (data.status === "success") {
                
                showFlashMessage(data.message, "success");

            } else if (data.status === "warning") {
                
                showFlashMessage(data.message, "warning");
            }
          })
          .catch((error) => {
            showFlashMessage("An unexpected error occurred", "danger");
            console.error("Error:", error);
          });
    }
    
    /*===================================================================================*/ 
    
     const update_personal_info = document.getElementById('update_personal_info');

    
    function handle_update_personal_info_button_click() {
       
        const linkedin = document.getElementById("linkedin").value;
        const website = document.getElementById("website").value;
        const job_title = document.getElementById("job_title").value;
        const employer = document.getElementById("employer").value;
        const year_expereince = document.getElementById("year_expereince").value;
        const industry = document.getElementById("industry").value;
        const carear_level = document.getElementById("carear_level").value;
        const desired_job = document.getElementById("desired_job").value;
        const job_location = document.getElementById("job_location").value;
        


        const personal_information = {

            linkedin_profile : linkedin,
            personal_website : website,
            job_title : job_title, 
            current_employer : employer, 
            years_of_expreince : year_expereince, 
            industry :  industry, 
            carear_level : carear_level,
            desired_job : desired_job,
            job_location : job_location,
        };
        

        fetch("http://127.0.0.1:8000/profile/update/personal_information/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(personal_information),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === "error") {
             console.log(data.errors)
              if (data.errors) {
                handleErrors(data.errors);
              } else {
                showFlashMessage("An unknown error occurred", "danger");
              }
            } else if (data.status === "success") {
                
                showFlashMessage(data.message, "success");

            } else if (data.status === "warning") {
      
                showFlashMessage(data.message, "warning");
            }
          })
          .catch((error) => {
            showFlashMessage("An unexpected error occurred", "danger");
            console.error("Error:", error);
          });
    }
    /*===================================================================================*/ 

    
   

    update_profile_info.addEventListener('click', handle_update_profile_info_button_click)

    
    update_personal_info.addEventListener('click',handle_update_personal_info_button_click)


 });



function handleErrors(errors) {
  for (const key in errors) {
    //to ensure it makes the container Empty before displaying the next error 
document.getElementById('flash-message-container').innerHTML=``;
//the next error
    if (errors.hasOwnProperty(key)) {
      const error = errors[key];
      if (Array.isArray(error)) {
        error.forEach((errorMessage) => {
          showFlashMessage(`${key}: ${errorMessage}`, "danger");
        });
      } else {
        showFlashMessage(`${key}: ${error}`, "danger");
      }
    }
  }
}




