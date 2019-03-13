window.onload = function (){
    function showTime(){
        var date = new Date(),
            h = date.getHours(), // 0 - 23
            m = date.getMinutes(), // 0 - 59
            s = date.getSeconds(), // 0 - 59
            text = document.getElementById("text");


//Wanneer het deze tijd of hoger is, doe dan dit
        if(h >= 0){
            text.innerHTML = "Goedenacht",
            document.body.style.backgroundImage = "url('img/goodnight.jpg')";

        }

        if(h >= 6){
            text.innerHTML = "Goedemorgen",
            document.body.style.backgroundImage = "url('img/goodmorning.jpg')";

        }

        if(h >= 12){
            text.innerHTML = "Goedemiddag",
            document.body.style.backgroundImage = "url('img/midday.jpg')";

        }

        if(h >= 18){
            text.innerHTML = "Goedenavond",
            document.body.style.backgroundImage = "url('img/evening.jpg')";

        }

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        document.getElementById("uren").innerText = h;
        document.getElementById("minuten").innerText = m;
        document.getElementById("secondes").innerText = s;


        setTimeout(showTime, 1000);

    }


    showTime();
    
    //Animaties van Tweenmax
    
    var tlm = new TimelineMax ();
    
    //animatie van de titel
     tlm.from("#headerspace", 2.5, { ease: Power4.easeOut, x: -1000 },0);
    
    //animatie van de klokken
    tlm.staggerFrom("#clockdiv > div", 2.5, { ease: Bounce.easeOut, autoAlpha: 0, scale: 0 }, 0.2, 0.5, "#stagger");
    
    //animatie van de tekst
    tlm.from("#text", 2.0, { ease: Bounce.easeOut, y: -700 },2 );
}