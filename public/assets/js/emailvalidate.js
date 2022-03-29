function validateEmail(id) {
    let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if(!email_regex.test($("#"+id).val())) {
        console.log("E-mail is invalid")
    return false;
    }
    else {
        console.log("E-mail is valid")
    return true;
    }
}

//JQuery
$(document).ready(
    function() {
        $("#submitNpcForm").click(function() {
            if(!validateEmail("email")) {
            return false;
            }
        $("#npcForm").submit();     
        }
        );
    }
);