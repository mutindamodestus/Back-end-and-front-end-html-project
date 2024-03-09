function sendOTP(){
    const email = document.getElementById('email');
    const otpverify= document.getElementsByClassName('otpverify'[0]);

    let otp_val=Math.floor(Math.random() * 10000);
    let emailbody = '<h2>Your OTP is </h2> ${otp_val}';

    Email.send({
        SecureToken : "685b8606-1e65-4ee3-b15d-d03e422c9d04",
        To : email.value,
        From : "mutindamodestus034@gmail.com",
        Subject : "Email OTP using Js",
        Body : emailbody,
    }).then(
      message=>{
        if(message === "OK")
        alert("OTP send to your email" +email.value);
     
        verify.style.display="flex";
        const otp_inp = document.getElementById('otp_inp');
        const otp_btn = document.getElementById('otp_btn');
        otp_btn.addEventListener('click', () =>{
            if(otp_inp.value == otp_val){
                alert("Email address verified...");
            }
            else{
                alert("Invalid OTP")
            }
        })
      }
    );
}