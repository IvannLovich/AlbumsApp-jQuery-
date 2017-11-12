(function(){
    
    //---------------------------Reading albums-------------------------------------- 
   $.ajax({
        type: 'GET',
        url: 'http://www.json-generator.com/api/json/get/cgkxjUtOsy?indent=2',
        dataType: 'json'
    })
    .done(function (data){
       
         $.each(data.items, function(index){
            
            var nom = data.items[index].name;
            var art = data.items[index].artist;
            var pic = data.items[index].thumbnail;
            var gen = data.items[index].genres;
            var pop = data.items[index].popularity;
            var ide = data.items[index].id;
            
            //----------------------Decide Popularity Stars--------------------------
            if(pop <= 5){
                var stars = 'assets/img/'+pop+'.png';
            }   
            
            //----------------------Show albums in main content-----------------------
            var albums = '<div class="container col-md-8">' +
                         '<div class="row">' +
                         '<img class="foto" id="foto" src='+pic+'>' +
                         '<ul class="list">' +
                         '<li class="title"><a href="#" id="'+ide+'">'+nom+'</a></li>' +
                         '<li class="artist">'+art+'</li>' +
                         '<li class="stars"><img src='+stars+'></li>' +
                         '<li class="gender">'+gen+'</li>' +
                         '</ul>' +
                         '</div>' +
                         '<hr>' +
                         '</div>';
                      
                

            $('.main').append(albums);  
            
            
            
            //-------------Reading tracks files when click in one album---------------
            $(document).on( "click", "#"+ide, function() {
              
                                    
            $.ajax({
             type: 'GET',
             url: 'http://localhost:8080/api/v1/albums/'+ide+'/',
             dataType: 'json'
            })
            
            .done(function(data1){
                
                 //---------------Show header with album information-----------------
                var datosVista2 = '<div class="container col-lg-8">' + 
                                  '<div class="row principal">' +
                                  '<div class="caja">' +
                                  '<img src="'+pic+'" alt="">' +
                                  '<img class="estrellas" src="'+stars+'" alt="">' +
                                  '</div>' +
                                  '<div class="t"><a href="#">'+nom+'</a></div>' +
                                  '<h3>'+art+'</h3>' +
                                  '<h2>Album track</h2>' +
                                  '</div>' +
                                  '</div>';
                
                $('.main').hide();    
                $('.disc').append(datosVista2);
                
              
        
                //----------------------Show Album's tracks-------------------------
                $.each(data1.tracks, function(index1){

                    var n = data1.tracks[index1].name;
                    var dur = data1.tracks[index1].duration;
                    var tra = data1.tracks[index1].number;
                    var sound = data1.tracks[index1].preview;
                    

                    var vista2 = '<div class="container col-lg-8">' + 
                                 '<div class="row principal">' +
                                 '<div class="info">' +
                                 '<ul class="tra">' +
                                 '<li >'+tra+'</li>' +
                                 '</ul>' +
                                 '<ul>' +
                                 '<li class="nametrack">'+n+'</li>' +
                                 '</ul>' +
                                 '<ul>' +
                                 '<li>'+dur+'</li>' +
                                 '</ul>' +
                                 '<ul class="play">' +
                                 '<li>' +
                                 '<audio class="audios" controls preload="none">' + 
                                 '<source src='+sound+' type="audio/mpeg">' +
                                 '</audio>' +
                                 '</li>' +
                                 '</ul>' +
                                 '</div>' +
                                 '</div>';

                    $('.disc').append(vista2);

                });
                
                
                 //----------------------Return Buttom-------------------------
                $('body').append('<input type="button" class="btn btn-primary" value="Volver" onClick="window.location.reload()">');

            })      
            });
        });
       
    })
    .fail(function(){
        console.log('Something goes wrong...');
    })
    .always(function(){
        console.log('Complete');
    });
   
    //----------------------Return Buttom function-------------------------
    function reloadPage(){
    location.reload(true);
    }           
                  

})();















