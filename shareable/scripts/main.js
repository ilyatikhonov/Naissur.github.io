$(document).ready(function(){
	var $result = $('.result');
	$result.hide();

	$('#getCode').on('click', function(){
		
		var $template_html = $('#template_html').html();
		var $template_css = $('#template_css').html();
		var $template_js = $('#template_js').html();

		var data = {
			url: $('#data_url').val(),
			title: $('#data_title').val(),
			desc: $('#data_desc').val(),
			image: $('#data_image').val(),
		};
		var html_res = Mustache.render($template_html, data);
		var css_res = Mustache.render($template_css, data);
		var js_res = Mustache.render($template_js, data);

		$('#result_html').val(html_res);
		$('#result_css').val(css_res);
		$('#result_js').val(js_res);

		$result.slideDown(200);
	});
});
