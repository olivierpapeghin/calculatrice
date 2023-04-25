console.log("Hey");

class Calculatrice{
    constructor(){
        /**
         * Fonction qui initialise un objet calculatrice avec lequel on va pouvoir travailler
        */
       // Etant donné que nous n'utilisions pas de variable pas besoin de les passer en tant que membre de la classe
        this.prec=[]; // On initialise la liste des calculs précédents
        this.tempsDebut=0; // On initialise à 0 mais dans les faits on n'utilisera pas cette valeur
    }


    ajoutCarac(caractere){
        /**
         * Fonction qui ajoute à l'affichage de la calculatrice le caractère passé en paramètre
         * :param: caractere : string
        */
        console.log(`On ajoute le caractère ${caractere}`);
        if (this.tempsDebut==0){
            this.tempsDebut=performance.now(); // Si c'est le premier caractère entré alors on actualise tempsDebut
        }
        document.getElementsByClassName("zone_affichage")[0].value+=caractere;
    }

    suppCarac(){
        /**
         * Fonction qui enlève le dernier caractère dans l'affichage de la calculatrice
        */
        // On récupère les caractères affichés 
        let listeCarac=document.getElementsByClassName("zone_affichage")[0].value;
        
        console.log(`On retire ${listeCarac.at(-1)}`); // On affiche l'élément à enlever

        // On doit raccoucir la liste d'un élément (le dernier)
        document.getElementsByClassName("zone_affichage")[0].value=listeCarac.slice(0,-1); 
        // slice(0,-1) va prendre la sous chaine allant de 0 à l'avant dernier caractère
        if (listeCarac.length==0){
            // On va considérer qu'on réinitialise le temps si on a plus aucun caractère à l'écran
            this.tempsDebut=0;
        }
    }

    reset(){
        /** 
         * Fonction qui vide la zone d'affichage et la zone du résultat
        */
        document.getElementsByClassName("zone_affichage")[0].value=""; // On vide l'affichage
        this.tempsDebut=0; // On réinitialise le tempsDebut aussi
        console.log("Reset");
    }

    operer(){
        /** 
         * Fonction qui prend ce qu'il y a dans la zone d'affichage et qui essaie de faire l'opération
         * Si on peut, alors on renvoie le résultat, sinon on affiche une erreur
        */
        // On commence par récupérer ce qu'il y a dans la zone d'affichage
        let affichage=document.getElementsByClassName("zone_affichage")[0].value;

        console.log(`On tente d'opèrer ${affichage}`);
        try{
            var resultat=eval(affichage);
            
            // On affiche le resultat (si on passe le eval)
            document.getElementById("resultat_calcul").innerHTML=affichage;
            document.getElementById("resultat").innerHTML=resultat;

            // Et on l'ajoute à la fin de la liste des calculs précédents
            this.prec.push(affichage);

            console.log("Envoi d'un succès au serveur");
            let timeTakenMs=performance.now()-this.tempsDebut;
            this.envoieSucces(timeTakenMs);
            this.tempsDebut=0; // On reset le temps du début
        }
        catch (err){
            document.getElementById("resultat_calcul").innerHTML=affichage;
            document.getElementById("resultat").innerHTML="Error"; 
            // S'il y a une erreur dans la syntaxe de l'opération
            console.log("Envoi d'un échec au serveur");
            this.envoieEchec();
        }
        // Dans tous les cas on reset la calculatrice à la fin
        this.reset();
    }

    precedent(){
        /**
         * Fonction qui enlève l'élément actuel pour le remplacer par le dernier élément de this.prec s'il y en a un
        */
        console.log("On passe au précédent");
        if (this.prec.length!=0){ // Si il y a un élément précédent
            document.getElementsByClassName("zone_affichage")[0].value=this.prec.pop();
            // On enlève le dernier élément de la liste et on l'affiche dans la zone de calcul
            this.tempsDebut=performance.now(); // On actualise le temps début du calcul
        }
        // Sinon on laisse le calcul actuel
    }

    envoieSucces(tempsPris){
        // On va envoyer une requête succès avec le temps pris au serveur pour obtenir un rapport

        // On envoie la requête
        let url="http://localhost:3000/Succes"
        let dataraw = {
            timeTakenMs : tempsPris
        }
        var xhttp=new XMLHttpRequest();
        xhttp.open("POST",url,true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(dataraw));

        // On recoit la réponse et on l'affiche (ici avec une alerte)
        xhttp.onload = function() {
            console.log(this.responseText);
            let reponseAffichee=JSON.parse(this.responseText);
            alert("Pourcentage de requêtes plus rapides : " + reponseAffichee[1].toFixed(0) + " % \nTemps moyen des requêtes : "+ reponseAffichee[0].toFixed(2) + "ms");
        };

    }

    envoieEchec(){
        // On va envoyer une requête échec au serveur pour obtenir un rapport

        // On envoie
        var xhttp=new XMLHttpRequest;
        xhttp.open("POST","http://localhost:3000/Echec",true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();

        // On recoit
        xhttp.onload = function(){
            console.log(this.responseText);
            let reponseAffichee=JSON.parse(this.responseText);
            if (reponseAffichee[0]!=null){
                alert("Date du dernier échec : " + reponseAffichee[0]["created_at"] + "\n Nombre d'échecs : " + reponseAffichee[1]);
            }
            else{
                alert("Pas de dernier échec");
            }
            
        }
    }
}

// Il ne reste plus qu'à en initialiser une
let calculatrice = new Calculatrice();  // Test