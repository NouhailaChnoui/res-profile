$(document).ready(function(){

    let profiles = []; 

    $.getJSON('data.json', function(data){
        profiles = data;
        renderProfiles();
    });

    $("#profileForm").submit(function(e){
        e.preventDefault();
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();

        if(name === "" || email === ""){
            alert("Tous les champs sont obligatoires !");
            return;
        }

        let profile = {name: name, email: email};
        profiles.push(profile);
        renderProfiles();
        $(this)[0].reset();
    });

    function renderProfiles(){
        $("#profileList").empty();
        profiles.forEach((p, index) => {
            $("#profileList").append(`
                <li>
                    ${p.name} (${p.email})
                    <button onclick="editProfile(${index})">Modifier</button>
                    <button onclick="deleteProfile(${index})">Supprimer</button>
                </li>
            `);
        });
    }

    window.deleteProfile = function(index){
        profiles.splice(index, 1);
        renderProfiles();
    }

    window.editProfile = function(index){
        let p = profiles[index];
        $("#name").val(p.name);
        $("#email").val(p.email);
        deleteProfile(index);
    }

});
