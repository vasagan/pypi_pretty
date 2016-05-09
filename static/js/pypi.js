$(function(){

	//region Init Footer Form submit

 $.getJSON('http://pypi.python.org/pypi/roundup/json', function(data) {
     h = 'Download: ' + data.info.version;
     for (var i=0, url; url=data.urls[i]; ++i) {
       h += '<br><a href="' + url.url + '">' + url.filename + '</a>';
     }
     $('#testscript').html(h);
 });



				$.ajax({
					url: 'https://pypi.python.org/pypi/django-allauth/json',
					dataType: 'json',
					type: 'GET',
					processData: false,
                    crossDomain: true,
					success: function (data) {
					//	alert("success");
                    //    $("#page-wrapper").html(JSON.stringify(data));
					},
					error: function () {
						alert("failure");
					}
				});
		});




