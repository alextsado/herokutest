function generateMovieLink(movie){
                 return '<li><a href="javascript:void(0)" onclick="goToMovieDetailPage(\''+ movie.title + '\',\'' + movie.stream_url + '\')">'+ movie.artist + " - " + movie.title + '</a></li>';
                 }

                function goToMovieDetailPage(songTitle, stream_url){
                
                    var moviePage = $("<div data-role='page' data-url=dummyUrl> <div data-role='header'><h1>" + songTitle + "</h1><a href='#home' data-icon='home' data-iconpos='notext'>home</a></div><div data-role='content'><img border='0' src='" + stream_url + "' width=284 height=288></img></div><div data-role='footer'><h4>" + songTitle + "</h4></div></div>");
                    
                    moviePage.appendTo($.mobile.pageContainer);
                    
                    $.mobile.changePage( moviePage );
                }
           
            //http://jsonlint.com/
            $.ajax({
                       url: "http://new-host-2.home:8888/songs.json",
                       dataType: 'json',
                       success: function(movies){
                         // alert("token recieved: " + result.token);

                   //Start of with empty list each time to get latest from server
                   $("#movieList").empty();
                   
                   //add the movie items as List
                   $.each(movies, function(i, movie){
                          $('#movieList').append(generateMovieLink(movie));
                          });
                   
                   //refresh the list view to show the latest changes
                   $('#movieList').listview('refresh');
                   
                       },
                       error: function(request, textStatus, errorThrown) {
                       alert(textStatus);
                       },
                       complete: function(request, textStatus) { //for additional info
                       }
                       });
                

