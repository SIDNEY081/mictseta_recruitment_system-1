

    function handle_update_soft_skill_button_click() {
        const selected = document.getElementById("softskill1").value;
        const skill = selected === "Other" ? document.getElementById("otherSoftSkill").value : selected;
        const level = document.getElementById("proficiency1").value;

        const skill_information = {
            skill : skill,
            level : level,
        };

        fetch("http://127.0.0.1:8000/profile/update/soft_skill_information/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'X-CSRFToken': getCookie('csrftoken'),
          },
          body: JSON.stringify(skill_information),
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
                setTimeout(function () { location.reload(); }, 1200);
            } else if (data.status === "warning") {
                showFlashMessage(data.message, "warning");
            }
          })
          .catch((error) => {
            showFlashMessage("An unexpected error occurred", "danger");
            console.error("Error:", error);
          });
    }

    function handle_upload_supporting_documents_button_click() {
        const driversLicenseInput = document.getElementById("drivers-license");
        const idInput = document.getElementById("id");
        const passportInput = document.getElementById("passport");

        const formData = new FormData();
        let hasFile = false;
        if (driversLicenseInput.files.length > 0) {
            formData.append("drivers-license", driversLicenseInput.files[0]);
            hasFile = true;
        }
        if (idInput.files.length > 0) {
            formData.append("id", idInput.files[0]);
            hasFile = true;
        }
        if (passportInput.files.length > 0) {
            formData.append("passport", passportInput.files[0]);
            hasFile = true;
        }

        if (!hasFile) {
            showFlashMessage("Please choose at least one file to upload", "danger");
            return;
        }

        // No Content-Type header here - the browser sets the correct
        // multipart/form-data boundary itself when the body is a FormData.
        fetch("http://127.0.0.1:8000/profile/update/supporting_documents/", {
          method: "POST",
          headers: {
            'X-CSRFToken': getCookie('csrftoken'),
          },
          body: formData,
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
                setTimeout(function () { location.reload(); }, 1200);
            } else if (data.status === "warning") {
                showFlashMessage(data.message, "warning");
            }
          })
          .catch((error) => {
            showFlashMessage("An unexpected error occurred", "danger");
            console.error("Error:", error);
          });
    }

    function handle_update_reference_button_click(suffix) {
        const name = document.getElementById("referee" + suffix + "-name").value;
        const contact = document.getElementById("referee" + suffix + "-contact").value;
        const position = document.getElementById("referee" + suffix + "-position").value;

        const reference_information = {
            name : name,
            contact : contact,
            position : position,
        };

        fetch("http://127.0.0.1:8000/profile/update/reference_information/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'X-CSRFToken': getCookie('csrftoken'),
          },
          body: JSON.stringify(reference_information),
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
                setTimeout(function () { location.reload(); }, 1200);
            } else if (data.status === "warning") {
                showFlashMessage(data.message, "warning");
            }
          })
          .catch((error) => {
            showFlashMessage("An unexpected error occurred", "danger");
            console.error("Error:", error);
          });
    }

    function handle_update_working_experience_button_click(suffix) {
        const job_title = document.getElementById("job-title" + suffix).value;
        const company = document.getElementById("company" + suffix).value;
        const job_location = document.getElementById("location" + suffix).value;
        const start_date = document.getElementById("start-date" + suffix).value;
        const end_date = document.getElementById("end-date" + suffix).value;
        const years_of_expreince = document.getElementById("years-experience" + suffix).value;

        const experience_information = {
            job_title : job_title,
            company : company,
            location : job_location,
            start_date : start_date,
            end_date : end_date,
            years_of_expreince : years_of_expreince,
        };

        fetch("http://127.0.0.1:8000/profile/update/working_experience/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'X-CSRFToken': getCookie('csrftoken'),
          },
          body: JSON.stringify(experience_information),
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
                setTimeout(function () { location.reload(); }, 1200);
            } else if (data.status === "warning") {
                showFlashMessage(data.message, "warning");
            }
          })
          .catch((error) => {
            showFlashMessage("An unexpected error occurred", "danger");
            console.error("Error:", error);
          });
    }

    function handle_update_profile_info_button_click() {
        const first_name = document.getElementById("first_name").value;
        const last_name = document.getElementById("last_name").value;
      
        const email = document.getElementById("email").value;
        const idnumber = document.getElementById("idnumber").value;
        const phone = document.getElementById("phone").value;
        const maritial_status = document.getElementById("marital_status").value;
        const race = document.getElementById("race").value;
        const disability = document.getElementById("disability").value;
        const linkedin_profile = document.getElementById("linkedin_profile").value;
        const personal_website = document.getElementById("personal_website").value;
        


        const data2 = {
            
            linkedin_profile : linkedin_profile,
            personal_website : personal_website,
            first_name : first_name,
            last_name : last_name,
            email : email,
            phone :  phone ,  
            idnumber : idnumber,
            maritial_status : maritial_status,
            race : race,
            disability : disability,
           
        };
       
        fetch("http://127.0.0.1:8000/profile/update/profile_information/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'X-CSRFToken': getCookie('csrftoken'),
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
  function handle_update_address_info_button_click() {
        const street_address_line = document.getElementById("postal_street_address").value;
        const street_address_line1 = document.getElementById("postal_street_address2").value;
        const city = document.getElementById("postal_city").value;
        const province = document.getElementById("postal_province").value;
        const postal_code = document.getElementById("postal_postal_code").value;
        const residential_street_address = document.getElementById("residential_street_address").value;
        const residential_city = document.getElementById("residential_city").value;
        const residential_province = document.getElementById("residential_province").value;
        const residential_postal_code = document.getElementById("residential_postal_code").value;

        const address_info = {
            street_address_line : street_address_line,
            street_address_line1 : street_address_line1,
            city : city,
            province : province,
            postal_code : postal_code,
            residential_street_address : residential_street_address,
            residential_city : residential_city,
            residential_province : residential_province,
            residential_postal_code : residential_postal_code,
        };

        fetch("http://127.0.0.1:8000/profile/update/address_information/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'X-CSRFToken': getCookie('csrftoken'),
          },
          body: JSON.stringify(address_info),
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
                setTimeout(function () { location.reload(); }, 1200);
            } else if (data.status === "warning") {
                showFlashMessage(data.message, "warning");
            }
          })
          .catch((error) => {
            showFlashMessage("An unexpected error occurred", "danger");
            console.error("Error:", error);
          });
    }

  function handle_update_qualification_button_click() {
       
        const highest_qualification = document.getElementById("highest_qualification").value;
        const field_of_study = document.getElementById("field_of_study").value;
        const institution = document.getElementById("institution").value;
        const year_obtained = document.getElementById("year_obtained").value;
         const status = document.getElementById("status").value;
        const grade = document.getElementById("grade").value;
       
        const personal_information = {

            highest_qualification : highest_qualification,
            field_of_study : field_of_study,
            institution : institution, 
            year_obtained : year_obtained, 
            grade : grade,
             status : status
        };
        

        fetch("http://127.0.0.1:8000/profile/update/update_qualification/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'X-CSRFToken': getCookie('csrftoken'),
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
                setTimeout(function () { location.reload(); }, 1200);

            } else if (data.status === "warning") {

                showFlashMessage(data.message, "warning");
            }
          })
          .catch((error) => {
            showFlashMessage("An unexpected error occurred", "danger");
            console.error("Error:", error);
          });
    }

  function handle_update_language_button_click() {

        const language = document.getElementById("language").value;
        const reading_proficiency = document.getElementById("reading").value;
        const writing_proficiency = document.getElementById("writing").value;
        const speaking_proficiency = document.getElementById("speaking").value;

        const language_information = {
            language : language,
            reading_proficiency : reading_proficiency,
            writing_proficiency : writing_proficiency,
            speaking_proficiency : speaking_proficiency,
        };
        
        fetch("http://127.0.0.1:8000/profile/update/language_information/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'X-CSRFToken': getCookie('csrftoken'),
          },
          body: JSON.stringify(language_information),
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
                setTimeout(function () { location.reload(); }, 1200);
            } else if (data.status === "warning") {

                showFlashMessage(data.message, "warning");
            }
          })
          .catch((error) => {
            showFlashMessage("An unexpected error occurred", "danger");
            console.error("Error:", error);
          });
    }

  function handle_update_skill_button_click() {
       
        const skill = document.getElementById("skill1").value;
        const level = document.getElementById("level").value;
        
        const skill_information = {
            skill : skill,
            level : level,
        };
        
        fetch("http://127.0.0.1:8000/profile/update/skill_information/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'X-CSRFToken': getCookie('csrftoken'),
          },
          body: JSON.stringify(skill_information),
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
                setTimeout(function () { location.reload(); }, 1200);
            } else if (data.status === "warning") {

                showFlashMessage(data.message, "warning");
            }
          })
          .catch((error) => {
            showFlashMessage("An unexpected error occurred", "danger");
            console.error("Error:", error);
          });
    }
    // Setting the auto Progress
    function updateProgress(percentage) {
      const progressCircle = document.querySelector('.progress-circle');
      if (!progressCircle) {
        return;
      }
      progressCircle.style.setProperty('--percentage', percentage);
      progressCircle.querySelector('span').textContent = percentage + '%';
  }
  setTimeout(() => {
      updateProgress(50);
  }, 2000);


function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function handleErrors(errors) {
  for (const key in errors) {
    //to ensure it makes the container Empty before displaying the next error 
document.getElementById('flash-message-container').innerHTML=``;
//the next error
    if (errors.hasOwnProperty(key)) {
      const error = errors[key];
      if (Array.isArray(error)) {
        error.forEach((errorMessage) => {
          showFlashMessage(`${errorMessage}`, "danger");
        });
      } else {
        showFlashMessage(` ${error}`, "danger");
      }
    }
  }
}