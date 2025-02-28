function generateQR() {
    let subjectName = document.getElementById("subject").value.trim();
    if (subjectName === "") {
        alert("Please enter a subject name!");
        return;
    }

    // Google Form Pre-filled Link
    let formBaseURL = "https://docs.google.com/forms/d/e/1FAIpQLSfJPTYzuj2XqlZZ0eU9m-3zk2B9huJgIlrW2e5PcESRtTDkEQ/viewform?usp=pp_url"; 
    let subjectEntryID = "entry.1146759780";  // Replace with actual Google Form entry ID
    let formLink = `${formBaseURL}&${subjectEntryID}=${encodeURIComponent(subjectName)}`;

    // Clear previous QR code
    document.getElementById("qrcode").innerHTML = "";

    // Generate new QR Code
    new QRCode(document.getElementById("qrcode"), {
        text: formLink,
        width: 200,
        height: 200
    });
}
