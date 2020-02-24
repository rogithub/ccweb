requirejs.config({
    baseUrl: 'lib',
        paths: {
	        jquery: 'jquery/dist/jquery.min',
		bootstrap: 'bootstrap/dist/js/bootstrap.min',
		knockout: 'knockout/dist/knockout'
	}
});

require(["jquery"], function($) {
    $(function(){
	alert("document ready");
    });
});
