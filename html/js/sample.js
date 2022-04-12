



$(document).ready(function () {
    session = new QiSession();

    $('#johnny').hide();
    $('#francis').hide();
    $('#acdc').hide();
    $('#goldman').hide();
    $('#nirvana').hide();
    $('#deep').hide();
    $('#booba').hide();
    $('#niska').hide();
    $('#freeze').hide();
    $('#liste_artistes').hide();
    $('#Message_start').show();
    $('#johnny_son').hide();
    $('#francis_son').hide();
    alert("hello start");


    session.service("ALMemory").done(function (ALMemory) {

        ALMemory.subscriber("SimpleWeb/Page_start").done(function (subscriber) {

            subscriber.signal.connect(function () {
                $('#message_start').hide();
                $('#johnny').hide();
                $('#francis').hide();
                $('#acdc').hide();
                $('#goldman').hide();
                $('#nirvana').hide();
                $('#deep').hide();
                $('#booba').hide();
                $('#niska').hide();
                $('#freeze').hide();
                $('#liste_artistes').show();
                $('#johnny_son').hide();
                $('#francis_son').hide();
                alert("On connect");
            });
        });


        ALMemory.subscriber("SimpleWeb/Page_Johnny").done(function(subscriber) {

            subscriber.signal.connect(function() {
                $('#message_start').hide();
                $('#liste_artistes').hide();
                $('#johnny').show();
                $('#francis').hide();
                $('#acdc').hide();
                $('#goldman').hide();
                $('#nirvana').hide();
                $('#deep').hide();
                $('#booba').hide();
                $('#niska').hide();
                $('#freeze').hide();
                $('#johnny_son').hide();
                $('#francis_son').hide();



                alert("On Johnny");
            });
        });

        ALMemory.subscriber("SimpleWeb/Page_Françis").done(function(subscriber) {

            subscriber.signal.connect(function() {
                $('#message_start').hide();
                $('#liste_artistes').hide();
                $('#johnny').hide();
                $('#francis').show();
                $('#acdc').hide();
                $('#goldman').hide();
                $('#nirvana').hide();
                $('#deep').hide();
                $('#booba').hide();
                $('#niska').hide();
                $('#freeze').hide();
                $('#johnny_son').hide();
                $('#francis_son').hide();



            });
        });

         ALMemory.subscriber("SimpleWeb/Page_Goldman").done(function(subscriber) {

             subscriber.signal.connect(function() {
                 $('#message_start').hide();
                 $('#liste_artistes').hide();
                 $('#johnny').hide();
                 $('#francis').hide();
                 $('#acdc').hide();
                 $('#goldman').show();
                 $('#nirvana').hide();
                 $('#deep').hide();
                 $('#booba').hide();
                 $('#niska').hide();
                 $('#freeze').hide();
                 $('#johnny_son').hide();
                 $('#francis_son').hide();



             });
         });

         ALMemory.subscriber("SimpleWeb/Page_ACDC").done(function(subscriber) {

             subscriber.signal.connect(function() {
                 $('#message_start').hide();
                 $('#liste_artistes').hide();
                 $('#johnny').hide();
                 $('#francis').hide();
                 $('#acdc').show();
                 $('#goldman').hide();
                 $('#nirvana').hide();
                 $('#deep').hide();
                 $('#booba').hide();
                 $('#niska').hide();
                 $('#freeze').hide();
                 $('#johnny_son').hide();
                 $('#francis_son').hide();



            });
        });

        ALMemory.subscriber("SimpleWeb/Page_Deep_Purple").done(function(subscriber) {

            subscriber.signal.connect(function() {
                $('#message_start').hide();
                $('#liste_artistes').hide();
                $('#johnny').hide();
                $('#francis').hide();
                $('#acdc').hide();
                $('#goldman').hide();
                $('#nirvana').hide();
                $('#deep').show();
                $('#booba').hide();
                $('#niska').hide();
                $('#freeze').hide();
                $('#johnny_son').hide();
                $('#francis_son').hide();



            });
        });

        ALMemory.subscriber("SimpleWeb/Page_Nirvana").done(function(subscriber) {

            subscriber.signal.connect(function() {
                $('#message_start').hide();
                $('#liste_artistes').hide();
                $('#johnny').hide();
                $('#francis').hide();
                $('#acdc').hide();
                $('#goldman').hide();
                $('#nirvana').show();
                $('#deep').hide();
                $('#booba').hide();
                $('#niska').hide();
                $('#freeze').hide();
                $('#johnny_son').hide();
                $('#francis_son').hide();



            });
        });

        ALMemory.subscriber("SimpleWeb/Page_Booba").done(function(subscriber) {

            subscriber.signal.connect(function() {
                $('#message_start').hide();
                $('#liste_artistes').hide();
                $('#johnny').hide();
                $('#francis').hide();
                $('#acdc').hide();
                $('#goldman').hide();
                $('#nirvana').hide();
                $('#deep').hide();
                $('#booba').show();
                $('#niska').hide();
                $('#freeze').hide();
                $('#johnny_son').hide();
                $('#francis_son').hide();



            });
        });

        ALMemory.subscriber("SimpleWeb/Page_Niska").done(function(subscriber) {

            subscriber.signal.connect(function() {
                $('#message_start').hide();
                $('#liste_artistes').hide();
                $('#johnny').hide();
                $('#francis').hide();
                $('#acdc').hide();
                $('#goldman').hide();
                $('#nirvana').hide();
                $('#deep').hide();
                $('#booba').hide();
                $('#niska').show();
                $('#freeze').hide();
                $('#johnny_son').hide();
                $('#francis_son').hide();
            });
        });

        ALMemory.subscriber("SimpleWeb/Page_Freeze_Corleone").done(function(subscriber) {

            subscriber.signal.connect(function() {
                $('#message_start').hide();
                $('#liste_artistes').hide();
                $('#johnny').hide();
                $('#francis').hide();
                $('#acdc').hide();
                $('#goldman').hide();
                $('#nirvana').hide();
                $('#deep').hide();
                $('#booba').hide();
                $('#niska').hide();
                $('#freeze').show();
                $('#johnny_son').show();
                $('#francis_son').hide();
            });
        });
        
        ALMemory.subscriber("SimpleWeb/Page_Johnny_1").done(function(subscriber) {

            subscriber.signal.connect(function() {
                var b = document.querySelector("#johnny_son");
                b.setAttribute("src","https://www.youtube.com/embed/-TkrMyXYbik");
                $('#message_start').hide();
                $('#liste_artistes').hide();
                $('#johnny').hide();
                $('#francis').hide();
                $('#acdc').hide();
                $('#goldman').hide();
                $('#nirvana').hide();
                $('#deep').hide();
                $('#booba').hide();
                $('#niska').hide();
                $('#freeze').hide();
                $('#johnny_son').show();
                $('#francis_son').hide();

            });
        });

        ALMemory.subscriber("SimpleWeb/Page_Johnny_2").done(function(subscriber) {

            subscriber.signal.connect(function() {
                var b = document.querySelector("#johnny_son");
                b.setAttribute("src","https://www.youtube.com/embed/s3O1Xro7oAI");
                $('#message_start').hide();
                $('#liste_artistes').hide();
                $('#johnny').hide();
                $('#francis').hide();
                $('#acdc').hide();
                $('#goldman').hide();
                $('#nirvana').hide();
                $('#deep').hide();
                $('#booba').hide();
                $('#niska').hide();
                $('#freeze').hide();
                $('#johnny_son').show();
                $('#francis_son').hide();

            });
        });

        ALMemory.subscriber("SimpleWeb/Page_Johnny_3").done(function(subscriber) {

            subscriber.signal.connect(function() {
                var b = document.querySelector("#johnny_son");
                b.setAttribute("src","https://www.youtube.com/embed/aOLW_R9-E4");
                $('#message_start').hide();
                $('#liste_artistes').hide();
                $('#johnny').hide();
                $('#francis').hide();
                $('#acdc').hide();
                $('#goldman').hide();
                $('#nirvana').hide();
                $('#deep').hide();
                $('#booba').hide();
                $('#niska').hide();
                $('#freeze').hide();
                $('#johnny_son').show();
                $('#francis_son').hide();
            
            });

        });

        ALMemory.subscriber("SimpleWeb/Page_Francis_1").done(function(subscriber) {

            subscriber.signal.connect(function() {
                var b = document.querySelector("#francis_son");
                b.setAttribute("src","https://www.youtube.com/embed/bMZVtFCU0ZQ");
                $('#message_start').hide();
                $('#liste_artistes').hide();
                $('#johnny').hide();
                $('#francis').hide();
                $('#acdc').hide();
                $('#goldman').hide();
                $('#nirvana').hide();
                $('#deep').hide();
                $('#booba').hide();
                $('#niska').hide();
                $('#freeze').hide();
                $('#johnny_son').hide();
                $('#francis_son').show();
            
            });

        });

        ALMemory.subscriber("SimpleWeb/Page_Francis_2").done(function(subscriber) {

            subscriber.signal.connect(function() {
                var b = document.querySelector("#francis_son");
                b.setAttribute("src","https://www.youtube.com/embed/85lKsSCZm4k");
                $('#message_start').hide();
                $('#liste_artistes').hide();
                $('#johnny').hide();
                $('#francis').hide();
                $('#acdc').hide();
                $('#goldman').hide();
                $('#nirvana').hide();
                $('#deep').hide();
                $('#booba').hide();
                $('#niska').hide();
                $('#freeze').hide();
                $('#johnny_son').hide();
                $('#francis_son').show();
            
            });

        });

        ALMemory.subscriber("SimpleWeb/Page_Francis_3").done(function(subscriber) {

            subscriber.signal.connect(function() {
                var b = document.querySelector("#francis_son");
                b.setAttribute("src","https://www.youtube.com/embed/7Q6S19Vvh6s");
                $('#message_start').hide();
                $('#liste_artistes').hide();
                $('#johnny').hide();
                $('#francis').hide();
                $('#acdc').hide();
                $('#goldman').hide();
                $('#nirvana').hide();
                $('#deep').hide();
                $('#booba').hide();
                $('#niska').hide();
                $('#freeze').hide();
                $('#johnny_son').hide();
                $('#francis_son').show();
            
            });

        });







        // DEBUG
        $('#message_start').on('click', function () {
            console.log("click start");
            raise('SimpleWeb/Page_start', 1);
        });
        // END DEBUG
    });
});