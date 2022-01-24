/* ============================== typing animation ============================ */
var typed = new Typed(".typing", {
    strings: ["", "iOS Developer", "Android Develper"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})


function sendMessage() {
    // get inuput values from user
    let name = document.getElementById("from-name").value;
    let email = document.getElementById("from-email").value;
    let subject = document.getElementById("from-subject").value;
    let message = document.getElementById("from-message").value;
    sendEmail(name, email, message)
}

function sendEmail(name, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "satthish.s@gmail.com",
        Password: "swbzqomyhddmcgpt",
        To: "sa.sathish@hotmail.com",
        From: "satthish.s@gmail.com",
        Subject: `${name} Sent you a message`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    })
        .then(function (message) {
            alert("mail sent successfully")
            document.getElementById("from-name").value = "";
            document.getElementById("from-email").value = "";
            document.getElementById("from-subject").value = "";
            document.getElementById("from-message").value = "";
        });
}
