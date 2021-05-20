var single_doses = [
    "Lao",
    "Sởi",
    "Thủy Đậu",
    "Phòng Uốn Ván",
    "Viêm Não Nhật Bản",
    "Phòng Dại",
    "Ung Thu Cổ Tử Cung"
]

var combo_doses = [
    "Gói dành cho trẻ em 0-12 tháng",
    "Gói dành cho trẻ em 0-24 tháng",
    "Gói dành cho trẻ em 12-24 tháng",
    "Gói dành cho tiểu học đường",
    "Gói dành cho vị thành niên",
    "Gói dành cho người trưởng thành",
    "Gói dành cho phụ nữ trước khi sinh"
]

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

function next_button() {
    document.getElementById("booking-content-vaccines").style.display = "block";
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

function choose_single_dose(){
    if (document.getElementById("booking-content-vaccines-doses-menu-1").value != "none"){
        var single_location = document.getElementById("booking-content-vaccines-locations-menu");
        var length = single_location.options.length;
        for (i = length-1; i > 0; i--) {
            single_location.options[i] = null;
        }
        let request = new XMLHttpRequest();
        request.open('POST', '/single_dose',true); 
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.addEventListener('load', function(e) {
            setTimeout(function() {          
                var user_data = JSON.parse(request.response);
                var x = document.getElementById("booking-content-vaccines-locations-menu")
                for (var i = 0; i < user_data.length; i++){
                    var option = document.createElement("option");
                    option.text = user_data[i];
                    x.add(option);
                }
            },500);
        });

        request.send("single_dose_code" + "=" +document.getElementById("booking-content-vaccines-doses-menu-1").value);
    }
}

function choose_combo_dose(){
    if (document.getElementById("booking-content-vaccines-doses-menu-2").value != "none"){
        var combo_location = document.getElementById("booking-content-vaccines-locations-menu");
        var length = combo_location.options.length;
        for (i = length-1; i > 0; i--) {
            combo_location.options[i] = null;
        }
        let request = new XMLHttpRequest();
        request.open('POST', '/combo_dose',true); 
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.addEventListener('load', function(e) {
            setTimeout(function() {          
                var user_data = JSON.parse(request.response);
                var x = document.getElementById("booking-content-vaccines-locations-menu")
                for (var i = 0; i < user_data.length; i++){
                    var option = document.createElement("option");
                    option.text = user_data[i];
                    x.add(option);
                }
            },500);
        });

        request.send("combo_dose_code" + "=" +document.getElementById("booking-content-vaccines-doses-menu-2").value);
    }
}

function single_dose(){
    var status = document.getElementById("vaccines-option-1").checked;
    if (status == true){
        document.getElementById("booking-content-vaccines-doses-menu-1").style.display = "block";
        document.getElementById("booking-content-vaccines-doses-menu-2").style.display = "none";
        document.getElementById("vaccines-option-2").checked = false;
    }
    else {
        document.getElementById("booking-content-vaccines-doses-menu-1").style.display = "none";
    }
}

function combo_dose(){
     var status = document.getElementById("vaccines-option-2").checked;
    if (status == true){
        document.getElementById("booking-content-vaccines-doses-menu-1").style.display = "none";
        document.getElementById("booking-content-vaccines-doses-menu-2").style.display = "block";
        document.getElementById("vaccines-option-1").checked = false;
    }
    else {       
        document.getElementById("booking-content-vaccines-doses-menu-2").style.display = "none";
    }
}