function validateEmail(id) {
    let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if(!email_regex.test($("#"+id).val())) {
        console.log("nay")
    return false;
    }
    else {
        console.log("yay")
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