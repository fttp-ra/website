function sendMail(params) {
    
    var elemento1 = document.getElementById("fromName").value
    var elemento2 = document.getElementById("fromEmail").value
    var elemento3 = document.getElementById("msg").value
    

    var tempParams = {
        from_name:document.getElementById("fromName").value,
        from_email:document.getElementById("fromEmail").value,
        message:document.getElementById("msg").value,
    };

    if (elemento1 == "" || elemento2 == "" || elemento3 == ""){
        alert("you must complete all the data")
        return false
    } else {
    emailjs.send('gmail', 'template_vp213yi', tempParams)
    .then(function(res){
        console.log("sucess:", res.status);
        document.getElementById("fromName").value="";
        document.getElementById("fromEmail").value="";
        document.getElementById("msg").value="";
        alert(elemento1+', your message has been sent successfully');
    })
    
    }

}
