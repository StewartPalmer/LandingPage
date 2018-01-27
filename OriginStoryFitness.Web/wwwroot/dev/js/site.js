
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signup-form").addEventListener("submit",
        function (e) {
            e.preventDefault();
            var email = document.getElementById("js-Email").value;
            var name = document.getElementById("js-Name").value;
            var test = document.getElementById("b_91325").value;

            if (ValidateEmail(email) === true && test === "" && name != null) {
                var params = "?email=" + email + "&name=" + name;
                var request = new XMLHttpRequest();
                request.responseType = "json";

                request.onreadystatechange = function() {
            
                    console.log(request.status);
                    if (request.status === 200) {
                        document.getElementById("result").innerText = request.responseText;
                        console.log("Good Request");

                    }
                    if (request.status === 400 && request.response != null) {
                        if (request.response.title === "Member Exists") {
                            document.getElementById("result").innerText = "You have already Subscribed";

                        } else {
                            document.getElementById("result").innerText = "An Error has Occured";
                        };

                        console.log("Bad Request");

                    }

                }

                request.open("POST", "/SignUp/Subscribe" + params, true);
                request.send();
            }
        });
})

var validEmail = false;


function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        validEmail = true;
        return (true);
    }
    validEmail = false;
    return (false);
}  