$(function(){

	//region Init Footer Form submit
/*
 $.getJSON('http://pypi.python.org/pypi/roundup/json', function(data) {
     h = 'Download: ' + data.info.version;
     for (var i=0, url; url=data.urls[i]; ++i) {
       h += '<br><a href="' + url.url + '">' + url.filename + '</a>';
     }
    // $('#testscript').html(h);
 });
*/

/*
				$.ajax({
					url: 'https://pypi.python.org/pypi/django-allauth/json',
					dataType: 'json',
					type: 'GET',
					processData: false,
                    crossDomain: true,
					success: function (data) {
						//alert("success");
						sdata = JSON.stringify(data);
                    console.log(sdata);

						$('.modal-body').html(sdata);
						$('#pypi_pretty_modal').modal('show');
					},
					error: function () {
						alert("failure");
					}
				});
		});

*/
/*

var Game = Backbone.Model.extend({
        initialize: function(){
			$.ajax({
				url: 'https://pypi.python.org/pypi/django-allauth/json',
					dataType: 'json',
					type: 'GET',
					contentType: 'application/json',
					processData: false,
					success: function (data) {
						$(".modal-title").html('<p style="color:darkgreen;">Yay! We got your mail</p>');

						$("#webpyd").modal('show');
						alert('mani');
					},
					error: function () {
						$(".modal-title").html('<p style="color:orangered;">Oops! Something is broken</p>');
						$(".modal-body").html('<p>Server Busy. Please try again.</p>');
						$("#webpyd").modal('show');
						alert('fail');
					}
			});
        },
          defaults: {
            name: 'Default title',

        }
    });

//var portal = new Game({ name: "Portal 2", releaseDate: 2011});

var GamesCollection = Backbone.Collection.extend({
  model : Game,
  url: 'https://pypi.python.org/pypi/django-allauth/json'

});

//var games = new GamesCollection();
//games.fetch();

*/