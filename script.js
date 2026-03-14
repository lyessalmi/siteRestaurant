const form = document.getElementById("contactForm");

if(form){
    form.addEventListener("submit", function(e){

        const nom = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const telephone = document.getElementById("telephone").value.trim();
        const message = document.getElementById("message").value.trim();
        const erreur = document.getElementById("erreur");

        erreur.textContent = "";

        if(nom.length < 2){
            e.preventDefault();
            erreur.textContent = "Le nom doit contenir au moins 2 caractères";
            return;
        }

        if(!email.includes("@")){
            e.preventDefault();
            erreur.textContent = "Email invalide";
            return;
        }

        if(!/^[0-9]{10}$/.test(telephone)){
            e.preventDefault();
            erreur.textContent = "Le téléphone doit contenir 10 chiffres";
            return;
        }

        if(message.length < 10){
            e.preventDefault();
            erreur.textContent = "Le message est trop court";
            return;
        }

        alert("Formulaire envoyé avec succès !");
    });
}

const search = document.getElementById("search");
if(search){
    search.addEventListener("keyup", function(){
        const value = search.value.toLowerCase();
        const plats = document.querySelectorAll("#menu ul li");
        
        plats.forEach(function(plat){

            if(plat.textContent.toLowerCase().includes(value)){
                plat.style.display = "list-item";
            }
            else{
                plat.style.display = "none";
            }
        });
    });
}