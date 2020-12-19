function sendMail(params) {
    var tempParams = {
        from_name:document.getElementById("fromName").value,
        from_email:document.getElementById("fromEmail").value,
        message:document.getElementById("msg").value,
    };

    emailjs.send('gmail', 'template_vp213yi', tempParams)
    .then(function(res){
        console.log("sucess:", res.status);
        document.getElementById("fromName").value="";
        document.getElementById("fromEmail").value="";
        document.getElementById("msg").value="";
        alert('your message has been sent successfully');
    })


}