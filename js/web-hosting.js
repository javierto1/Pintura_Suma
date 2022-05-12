$( document ).ready( function () {

    /* CARGA FUENTES GOOGLE WEB FONTS */    
    WebFontConfig = {
        google: {families:['Open+Sans:300,400,600:latin','Fjalla+One']}
    };
   
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);

});

