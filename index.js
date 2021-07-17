let myFormEl = document.getElementById('myForm');
let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let passwordEl = document.getElementById("password");
let passwordErrMsgEl = document.getElementById("passwordErrMsg");
let ConfirmpasswordEl = document.getElementById("Confirmpassword")

let resultMsgEl = document.getElementById("resultMsg");
let confirmErrMsgEl = document.getElementById("confirmErrMsg")

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = ""
    }
})

passwordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        passwordErrMsgEl.textContent = "Required*";
    } else {
        passwordErrMsgEl.textContent = ""
    }
})
ConfirmpasswordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        passwordErrMsgEl.textContent = "Required*";
    } else {
        passwordErrMsgEl.textContent = ""
    }
})


function submit() {
    var str = passwordEl.value;
    var pattern = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );
    if (!str || str.length === 0) {
        nameErrMsgEl.textContent = "Fill in the required details"
        return;
    } else if (passwordEl.value === "") {
        passwordErrMsgEl.textContent = "Fill in the required details"
    } else if (ConfirmpasswordEl.value !== passwordEl.value) {
        confirmErrMsgEl.textContent = "password must be same"
    } else if (pattern.test(str)) {
        resultMsgEl.textContent = "login success"
        nameEl.value = ""
        passwordEl.value = ""
        ConfirmpasswordEl.value = ""
        confirmErrMsgEl.textContent = ""
    } else {
        passwordErrMsgEl.textContent = "must contain lower/upper/numeric/special charecter "
    }


}
myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    submit();
})
