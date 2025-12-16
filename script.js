function validateForm() {
    let fname = document.getElementById("first_name").value;
    let lname = document.getElementById("last_name").value;
    let email = document.getElementById("email").value;

    if (fname === "" || lname === "" || email === "") {
        alert("Please fill out all required fields!");
        return false;
    }
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    return true;
}

let profiles = [];

document.getElementById("profileForm").addEventListener("submit", function(event){
    event.preventDefault(); 

    if(!validateForm()) return;

    let profile = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        headline: document.getElementById("headline").value,
        summary: document.getElementById("summary").value
    };

    profiles.push(profile);
    updateTable();
    this.reset(); 
});

function updateTable() {
    let tbody = document.getElementById("profilesTable").getElementsByTagName("tbody")[0];
    tbody.innerHTML = ""; 
    profiles.forEach(p => {
        let row = tbody.insertRow();
        row.insertCell(0).innerText = p.first_name;
        row.insertCell(1).innerText = p.last_name;
        row.insertCell(2).innerText = p.email;
        row.insertCell(3).innerText = p.headline;
        row.insertCell(4).innerText = p.summary;
    });
}
