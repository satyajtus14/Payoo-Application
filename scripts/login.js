// console.log("login js connected")

document.getElementById('login-btn').addEventListener('click',function(){
    // 1. Get the mobile number
   const mobileNumber = document.getElementById('input-mobileno');
    const loginId = mobileNumber.value;
    console.log(loginId)
    // 2. Get the pin input
    const pinNo = document.getElementById('input-pin');
    const loginPWD = pinNo.value;
    console.log(loginPWD)
    // 3. Match pin and mobile number
     if(loginId === '123456789' && loginPWD === '1234'){
        // 3.1 true --> take to alert: homepage
        alert('Login Success');

        // window.location.replace("../payoo_DOM_Event/home.html");
        window.location.assign("../payoo_DOM_Event/home.html");
     }
     else{
         // 3.2 true --> alert: return
   alert('Login Failed');
     }
     return;
})