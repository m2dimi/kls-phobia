// **************
// **************
// Forcer le gototop au reload
$(document).ready(function(){
    $(window).scrollTop(0);
});

// **************
// **************
// Faire apparaitre les consignes
$(function() {
	setTimeout(function($) {
		document.getElementById("content-nav").style.visibility = "visible";
		document.getElementById("liste-phobies").style.visibility = "visible";
		document.getElementById("echelle").style.visibility = "visible";
	}, 1000); 
    setTimeout(function($) {
    	jQuery( ".wallpaper-loading" ).slideToggle();
	}, 4000); 
});

$(function() {
    setTimeout(function($) {
    jQuery('#consigne-01').animate({'top': '90', opacity: 1}, 1000);
	}, 4300);  
});

$(function() {
	$('.bt-compris-01').bind("click touchstart", function(){
		    jQuery('#consigne-01').animate({'top': '70', opacity: 0}, 1000);
			jQuery('#consigne-02').animate({'top': '90', opacity: 1}, 1000);
	});
});

$(function() {
	$('.bt-compris-02').bind("click touchstart", function(){
    	jQuery('#consigne-02').animate({'top': '70', opacity: 0}, 1000);
		jQuery('#consigne-03').animate({'top': '200', opacity: 1}, 1000);
	});
});

$(function() {
	$('.bt-compris-03').bind("click touchstart", function(){
    	jQuery('#consigne-03').animate({'top': '180', opacity: 0}, 1000);
		jQuery("#contenu-consignes").fadeOut();
		jQuery(".overlay-gris").fadeOut();
		document.body.style.overflowY = "auto";
		jQuery('html, body').animate({scrollTop:25332}, 6000);
	});
});

// **************
// **************
// Smooth scroll sur la page
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

// **************
// **************
// Afficher les scrolls pixels
(function(window, document, $, undefined) {
  $(function() {
    var win = $(window),
        ele = $('.pixels');

    win.scroll(function() {ele.text(win.scrollTop());});
  });
})(window, document, jQuery);

// **************
// **************
// Système de filtre
function PhobieAll(){
	document.getElementById("all-phobies").style.fontWeight="bold";
	$( "#elements-naturels, #gustatifs, #animal, #vertige, #sante, #mythe-religion, #objet, #obscurite, #social, #transport, #inclassable" ).css({'font-weight':'normal'});
    $( ".elements-naturels, .gustatifs, .animal, .vertige, .sante, .mythe-religion, .objet, .obscurite, .social, .transport, .inclassable" ).animate({ opacity: 1 }, 400);    
}

function PhobieElementsNaturels(){
	document.getElementById("elements-naturels").style.fontWeight="bold";
	$( "#all-phobies, #gustatifs, #animal, #vertige, #sante, #mythe-religion, #objet, #obscurite, #social, #transport, #inclassable" ).css({'font-weight':'normal'});
    $(".elements-naturels").animate({ opacity: 1 }, 400);
    $( ".gustatifs, .animal, .vertige, .sante, .mythe-religion, .objet, .obscurite, .social, .transport, .inclassable" ).animate({ opacity: 0.1 }, 400);   
}

function PhobieGustatifs(){
	document.getElementById("gustatifs").style.fontWeight="bold";
	$( "#all-phobies, #elements-naturels, #animal, #vertige, #sante, #mythe-religion, #objet, #obscurite, #social, #transport, #inclassable" ).css({'font-weight':'normal'});
    $(".gustatifs").animate({ opacity: 1 }, 400);
    $( ".elements-naturels, .animal, .vertige, .sante, .mythe-religion, .objet, .obscurite, .social, .transport, .inclassable" ).animate({ opacity: 0.1 }, 400);
}

function PhobieAnimal(){
	document.getElementById("animal").style.fontWeight="bold";
	$( "#all-phobies, #elements-naturels, #gustatifs, #vertige, #sante, #mythe-religion, #objet, #obscurite, #social, #transport, #inclassable" ).css({'font-weight':'normal'});
    $(".animal").animate({ opacity: 1 }, 400);
    $( ".elements-naturels, .gustatifs, .vertige, .sante, .mythe-religion, .objet, .obscurite, .social, .transport, .inclassable" ).animate({ opacity: 0.1 }, 400);
}

function PhobieVertige(){
	document.getElementById("vertige").style.fontWeight="bold";
	$( "#all-phobies, #elements-naturels, #gustatifs, #animal, #sante, #mythe-religion, #objet, #obscurite, #social, #transport, #inclassable" ).css({'font-weight':'normal'});
    $(".vertige").animate({ opacity: 1 }, 400);
    $( ".elements-naturels, .gustatifs, .animal, .sante, .mythe-religion, .objet, .obscurite, .social, .transport, .inclassable" ).animate({ opacity: 0.1 }, 400);
}

function Phobiesante(){
	document.getElementById("sante").style.fontWeight="bold";
	$( "#all-phobies, #elements-naturels, #gustatifs, #animal, #vertige, #mythe-religion, #objet, #obscurite, #social, #transport, #inclassable" ).css({'font-weight':'normal'});
    $(".sante").animate({ opacity: 1 }, 400);
    $( ".elements-naturels, .gustatifs, .vertige, .animal, .mythe-religion, .objet, .obscurite, .social, .transport, .inclassable" ).animate({ opacity: 0.1 }, 400);
}

function PhobieMytheReligion(){
	document.getElementById("mythe-religion").style.fontWeight="bold";
	$( "#all-phobies, #elements-naturels, #gustatifs, #animal, #vertige, #sante, #objet, #obscurite, #social, #transport, #inclassable" ).css({'font-weight':'normal'});
    $(".mythe-religion").animate({ opacity: 1 }, 400);
    $( ".elements-naturels, .gustatifs, .animal, .vertige, .sante, .objet, .obscurite, .social, .transport, .inclassable" ).animate({ opacity: 0.1 }, 400);
}

function PhobieObjet(){
	document.getElementById("objet").style.fontWeight="bold";
	$( "#all-phobies, #elements-naturels, #gustatifs, #animal, #vertige, #sante, #mythe-religion, #obscurite, #social, #transport, #inclassable" ).css({'font-weight':'normal'});
    $(".objet").animate({ opacity: 1 }, 400);
    $( ".elements-naturels, .gustatifs, .animal, .vertige, .sante, .mythe-religion, .obscurite, .social, .transport, .inclassable" ).animate({ opacity: 0.1 }, 400);
}

function PhobieObscurite(){
	document.getElementById("obscurite").style.fontWeight="bold";
	$( "#all-phobies, #elements-naturels, #gustatifs, #animal, #vertige, #sante, #mythe-religion, #objet, #social, #transport, #inclassable" ).css({'font-weight':'normal'});
    $(".obscurite").animate({ opacity: 1 }, 400);
    $( ".elements-naturels, .gustatifs, .animal, .vertige, .sante, .mythe-religion, .objet, .social, .transport, .inclassable" ).animate({ opacity: 0.1 }, 400);
}

function PhobieSocial(){
	document.getElementById("social").style.fontWeight="bold";
	$( "#all-phobies, #elements-naturels, #gustatifs, #animal, #vertige, #sante, #mythe-religion, #obscurite, #objet, #transport, #inclassable" ).css({'font-weight':'normal'});
    $(".social").animate({ opacity: 1 }, 400);
    $( ".elements-naturels, .gustatifs, .animal, .vertige, .sante, .mythe-religion, .objet, .obscurite, .transport, .inclassable" ).animate({ opacity: 0.1 }, 400);
}

function PhobieTransport(){
	document.getElementById("transport").style.fontWeight="bold";
	$( "#all-phobies, #elements-naturels, #gustatifs, #animal, #vertige, #sante, #mythe-religion, #obscurite, #social, #social, #inclassable" ).css({'font-weight':'normal'});
    $(".transport").animate({ opacity: 1 }, 400);
    $( ".elements-naturels, .gustatifs, .animal, .vertige, .sante, .mythe-religion, .objet, .obscurite, .social, .inclassable" ).animate({ opacity: 0.1 }, 400);
}

function PhobieInclassable(){
	document.getElementById("inclassable").style.fontWeight="bold";
	$( "#all-phobies, #elements-naturels, #gustatifs, #animal, #vertige, #sante, #mythe-religion, #obscurite, #social, #transport" ).css({'font-weight':'normal'});
    $(".inclassable").animate({ opacity: 1 }, 400);
    $( ".elements-naturels, .gustatifs, .animal, .vertige, .sante, .mythe-religion, .objet, .obscurite, .social, .transport" ).animate({ opacity: 0.1 }, 400);
}

// Timeline avec position entre deux valeurs en pixels
// ******
// ******
// Paradis
$(window).scroll(function() { 
    if(window.scrollY >= 0 && window.scrollY <= 3665) {
         $(".nav-univers-paradis").addClass("selector-timeline");
    } else{
	    $(".nav-univers-paradis").removeClass("selector-timeline");
    }
});

// ******
// ******
// Neige
$(window).scroll(function() { 
    if(window.scrollY >= 3666 && window.scrollY <= 7331) {
         $(".nav-univers-neige").addClass("selector-timeline");
    } else{
	    $(".nav-univers-neige").removeClass("selector-timeline");
    }
});

// ******
// ******
// Verdure
$(window).scroll(function() { 
    if(window.scrollY >= 7332 && window.scrollY <= 10997) {
         $(".nav-univers-verdure").addClass("selector-timeline");
    } else{
	    $(".nav-univers-verdure").removeClass("selector-timeline");
    }
});

// ******
// ******
// Automne
$(window).scroll(function() { 
    if(window.scrollY >= 10998 && window.scrollY <= 14664) {
         $(".nav-univers-automne").addClass("selector-timeline");
    } else{
	    $(".nav-univers-automne").removeClass("selector-timeline");
    }
});

// ******
// ******
// Desert
$(window).scroll(function() { 
    if(window.scrollY >= 14665 && window.scrollY <= 18331) {
         $(".nav-univers-desert").addClass("selector-timeline");
    } else{
	    $(".nav-univers-desert").removeClass("selector-timeline");
    }
});

// ******
// ******
// Crepuscule
$(window).scroll(function() { 
    if(window.scrollY >= 18332 && window.scrollY <= 22431) {
         $(".nav-univers-crepuscule").addClass("selector-timeline");
    } else{
	    $(".nav-univers-crepuscule").removeClass("selector-timeline");
    }
});

// ******
// ******
// Enfer
$(window).scroll(function() { 
    if(window.scrollY >= 22432){
         $(".nav-univers-enfer").addClass("selector-timeline");
    } else{
	     $(".nav-univers-enfer").removeClass("selector-timeline");
    } 
});

// Fonction hover touch
$(document).ready(function() {
    $('.tooltip').bind('touchstart touchend', function(e) {
        e.preventDefault();
    });
});

// *****************
// Partager sur facebook
// Bouton partager Facebook
function fbShare(url, title, descr, image, winWidth, winHeight) {
        var winTop = (screen.height / 2) - (winHeight / 2);
        var winLeft = (screen.width / 2) - (winWidth / 2);
        window.open('http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}