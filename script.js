const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {

    const name = (inputs.elements["name"].value).trim()
    const email = (inputs.elements["email"].value).trim()
    const msg = (inputs.elements["message"].value.trim())
    const phone = (inputs.elements["phone"].value).trim()
    if (!name.length > 0 || !email.length > 0 || !msg.length > 0 || !phone.length > 0) {
        alert("All fields are mandatory")
        return
    }
    Email.send({

    //Host: "outlook.office365.com",
        Host: "smtp.office365.com",
        Username: "sameer.ali@dominos.com.pk",
        Password: "",
        To: "sameer.ali@dominos.com.pk",
        From: "sameer.ali@dominos.com.pk",
        Subject: "Contact Us Query By the Customer",
        Body: email +"<br>"+ msg + "<br>" + name + "<br>" + phone
    }).then(msg => alert("The email send successfully sent"))
})
