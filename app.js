// variable contenant le nombre de clics
var nbclic = 0;
 
// fonction appelée à chaque clic sur le lien
function compteur()
{
     // on augmente la valeur de la variable
     nbclic++;
 }


//$(".button").click(function(){
	//compteur();
	//$(".button").append( $(".ecran").val(nbclic) );
//});

$(".button").click(function(){
	compteur()
	afficheClic();
});

function afficheClic(){
	$(".ecran").val(nbclic);
}


