
function skip_button(){
    document.getElementById("booking-content").style.display = "inline-block";
    document.getElementById("content3").style.display = "none"
    document.getElementById("content4").style.display = "none"
    document.getElementById("content5").style.display = "none"
    document.getElementById("content6").style.display = "none"
}

function confirm_button(){
    let request = new XMLHttpRequest();
    request.open('POST', '/confirm',true); 
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.addEventListener('load', function(e) {
        if (request.response === "undefined") {
            window.alert("Your Vaccination Code is undefined");
        } 
        else {
            setTimeout(function() {
            
                var user_data = JSON.parse(request.response);
                document.getElementById("booking-content").style.display = "inline-block";
                document.getElementById("booking-fullname").value = user_data["name"];
                document.getElementById("booking-birth").value = user_data["day_of_birth"];
                document.getElementById("booking-gender").value = user_data["gender"];
                document.getElementById("booking-phone").value = user_data["phonenumber"];
                document.getElementById("booking-email").value = user_data["email"];
                document.getElementById("booking-city").value = user_data["city"];
                document.getElementById("booking-district").value = user_data["district"];
            },1000);

            
        }    
    });

    request.send("vaccination_code" + "=" +document.getElementById("vaccination_code").value);
    
}

function booking_check(){
    document.getElementById("function-status-1").style.display = "block";
    document.getElementById("function-status-2").style.display = "none";
    document.getElementById("function-status-3").style.display = "none";
    document.getElementById("function-status-4").style.display = "none";
    
    document.getElementById("content3").style.display = "inline-block"
    document.getElementById("content4").style.display = "none"
    document.getElementById("content5").style.display = "none"
    document.getElementById("content6").style.display = "none"
    document.getElementById("booking-content").style.display = "none"
}

function history_check(){
    document.getElementById("function-status-1").style.display = "none";
    document.getElementById("function-status-2").style.display = "block";
    document.getElementById("function-status-3").style.display = "none";
    document.getElementById("function-status-4").style.display = "none";
    
    document.getElementById("content3").style.display = "none"
    document.getElementById("content4").style.display = "inline-block"
    document.getElementById("content5").style.display = "none"
    document.getElementById("content6").style.display = "none"
    document.getElementById("booking-content").style.display = "none"
}

function new_check(){
    document.getElementById("function-status-1").style.display = "none";
    document.getElementById("function-status-2").style.display = "none";
    document.getElementById("function-status-3").style.display = "block";
    document.getElementById("function-status-4").style.display = "none";
    
    document.getElementById("content3").style.display = "none"
    document.getElementById("content4").style.display = "none"
    document.getElementById("content5").style.display = "inline-block"
    document.getElementById("content6").style.display = "none"
    document.getElementById("booking-content").style.display = "none"
}

function covid_check(){
    document.getElementById("function-status-1").style.display = "none";
    document.getElementById("function-status-2").style.display = "none";
    document.getElementById("function-status-3").style.display = "none";
    document.getElementById("function-status-4").style.display = "block";
    
    document.getElementById("content3").style.display = "none"
    document.getElementById("content4").style.display = "none"
    document.getElementById("content5").style.display = "none"
    document.getElementById("content6").style.display = "inline-block"
    document.getElementById("booking-content").style.display = "none"
}