// Smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Permettre le scrollDown après 2sec de chargement
function scrollToBottom() {
    setTimeout(function($) {
    jQuery('html, body').animate({scrollTop:jQuery(document).height()}, 6000);
	}, 2000);   
}


// Afficher les scrolls pixels
(function(window, document, $, undefined) {
  $(function() {
    var win = $(window),
        ele = $('.pixels');

    win.scroll(function() {ele.text(win.scrollTop());});
  });
})(window, document, jQuery);

// *****************
// SYSTEME DE FILTRE
function PhobieAll(){
	document.getElementById("all-phobies").style.fontWeight="bold";
	$( "#elements-naturels, #gustatifs, #animal, #vertige, #sante, #mythe-religion, #objet, #obscurite, #social, #transport, #inclassable" ).css({'font-weight':'normal'});
    $( ".elements-naturels, .gustatifs, .animal, .vertige, .sante, .mythe-religion, .objet, .obscurite, .social, .transport, .inclassable" ).animate({ opacity: 1 }, 400);    
}

function PhobieElementsNaturels(){
	document.getElementById("elements-naturels").style.fontWeight="bold";
	$( "#all-phobies, #gustatifs, #animal, #vertige, #sante, #mythe-religion, #objet, #obscurite, #social, #transport, #inclassable" ).css({'font-weight':'normal'});
    $(".elements-naturels").animate({ opacity: 1 }, 400);
    $( ".gustatifs, .animal, .vertige, .sante, .mythe-religion, .objet, .obscurite, .social, .transport, .inclassable" ).animate({ opacity: 0.3 }, 400);   
}

function PhobieGustatifs(){
	document.getElementById("gustatifs").style.fontWeight="bold";
	$( "#all-phobies, #elements-naturels, #animal, #vertige, #sante, #mythe-religion, #objet, #obscurite, #social, #transport, #inclassable" ).css({'font-weight':'normal'});
    $(".gustatifs").animate({ opacity: 1 }, 400);
    $( ".elements-naturels, .animal, .vertige, .sante, .mythe-religion, .objet, .obscurite, .social, .transport, .inclassable" ).animate({ opacity: 0.3 }, 400);
}

function PhobieAnimal(){
	document.getElementById("animal").style.fontWeight="bold";
	$( "#all-phobies, #elements-naturels, #gustatifs, #vertige, #sante, #mythe-religion, #objet, #obscurite, #social, #transport, #inclassable" ).css({'font-weight':'normal'});
    $(".animal").animate({ opacity: 1 }, 400);
    $( ".elements-naturels, .gustatifs, .vertige, .sante, .mythe-religion, .objet, .obscurite, .social, .transport, .inclassable" ).animate({ opacity: 0.3 }, 400);
}

function PhobieVertige(){
	document.getElementById("vertige").style.fontWeight="bold";
	$( "#all-phobies, #elements-naturels, #gustatifs, #animal, #sante, #mythe-religion, #objet, #obscurite, #social, #transport, #inclassable" ).css({'font-weight':'normal'});
    $(".vertige").animate({ opacity: 1 }, 400);
    $( ".elements-naturels, .gustatifs, .animal, .sante, .mythe-religion, .objet, .obscurite, .social, .transport, .inclassable" ).animate({ opacity: 0.3 }, 400);
}

function Phobiesante(){
	document.getElementById("sante").style.fontWeight="bold";
	$( "#all-phobies, #elements-naturels, #gustatifs, #animal, #vertige, #mythe-religion, #objet, #obscurite, #social, #transport, #inclassable" ).css({'font-weight':'normal'});
    $(".sante").animate({ opacity: 1 }, 400);
    $( ".elements-naturels, .gustatifs, .vertige, .animal, .mythe-religion, .objet, .obscurite, .social, .transport, .inclassable" ).animate({ opacity: 0.3 }, 400);
}

function PhobieMytheReligion(){
	document.getElementById("mythe-religion").style.fontWeight="bold";
	$( "#all-phobies, #elements-naturels, #gustatifs, #animal, #vertige, #sante, #objet, #obscurite, #social, #transport, #inclassable" ).css({'font-weight':'normal'});
    $(".mythe-religion").animate({ opacity: 1 }, 400);
    $( ".elements-naturels, .gustatifs, .animal, .vertige, .sante, .objet, .obscurite, .social, .transport, .inclassable" ).animate({ opacity: 0.3 }, 400);
}

function PhobieObjet(){
	document.getElementById("objet").style.fontWeight="bold";
	$( "#all-phobies, #elements-naturels, #gustatifs, #animal, #vertige, #sante, #mythe-religion, #obscurite, #social, #transport, #inclassable" ).css({'font-weight':'normal'});
    $(".objet").animate({ opacity: 1 }, 400);
    $( ".elements-naturels, .gustatifs, .animal, .vertige, .sante, .mythe-religion, .obscurite, .social, .transport, .inclassable" ).animate({ opacity: 0.3 }, 400);
}

function PhobieObscurite(){
	document.getElementById("obscurite").style.fontWeight="bold";
	$( "#all-phobies, #elements-naturels, #gustatifs, #animal, #vertige, #sante, #mythe-religion, #objet, #social, #transport, #inclassable" ).css({'font-weight':'normal'});
    $(".obscurite").animate({ opacity: 1 }, 400);
    $( ".elements-naturels, .gustatifs, .animal, .vertige, .sante, .mythe-religion, .objet, .social, .transport, .inclassable" ).animate({ opacity: 0.3 }, 400);
}

function PhobieSocial(){
	document.getElementById("social").style.fontWeight="bold";
	$( "#all-phobies, #elements-naturels, #gustatifs, #animal, #vertige, #sante, #mythe-religion, #obscurite, #objet, #transport, #inclassable" ).css({'font-weight':'normal'});
    $(".social").animate({ opacity: 1 }, 400);
    $( ".elements-naturels, .gustatifs, .animal, .vertige, .sante, .mythe-religion, .objet, .obscurite, .transport, .inclassable" ).animate({ opacity: 0.3 }, 400);
}

function PhobieTransport(){
	document.getElementById("transport").style.fontWeight="bold";
	$( "#all-phobies, #elements-naturels, #gustatifs, #animal, #vertige, #sante, #mythe-religion, #obscurite, #social, #social, #inclassable" ).css({'font-weight':'normal'});
    $(".transport").animate({ opacity: 1 }, 400);
    $( ".elements-naturels, .gustatifs, .animal, .vertige, .sante, .mythe-religion, .objet, .obscurite, .social, .inclassable" ).animate({ opacity: 0.3 }, 400);
}

function PhobieInclassable(){
	document.getElementById("inclassable").style.fontWeight="bold";
	$( "#all-phobies, #elements-naturels, #gustatifs, #animal, #vertige, #sante, #mythe-religion, #obscurite, #social, #transport" ).css({'font-weight':'normal'});
    $(".inclassable").animate({ opacity: 1 }, 400);
    $( ".elements-naturels, .gustatifs, .animal, .vertige, .sante, .mythe-religion, .objet, .obscurite, .social, .transport" ).animate({ opacity: 0.3 }, 400);
}