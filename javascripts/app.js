/*

// JS

assumes jquery loaded, but can be easily done without. just finding the <ul>, caching the <li>s, and then doing a bit of AJAX, DOM-manip onclick.

*/

$(function(){

	var $html = $('html');

	// cache elements
	var $list = $('#list');
	var $list_items = $list.find('a');
	var $list_trigger = $list.find('span');
	var $drop_loading = '<h3 id="loading" class="loading">Loading&hellip;</h3>';

	//is JS available?
	$html.removeClass('no-js');

	//tech drop hover
	/*$list.hover(function(){
		var $this = $(this);
		$this.addClass('show');
	},function(){
		var $this = $(this);
		$this.removeClass('show');
	});*/

	//touch shutff
	//since :hover don't exist in touch
	$list_trigger.on('click',function(){
		if($list.hasClass('show')){
			$list.removeClass('show');
		}else{
			$list.addClass('show');
		}
	});

	//tech drop loading
	$list_items.on('click',function(){
		var $this = $(this);
		var $content = $('#content');
		var $this_url = $this.attr('href');
		if(!$list.hasClass('show')){
			$list.addClass('show');
			return false;
		}
		$list_items.parent().removeClass('selected init');
		$this.parent().addClass('selected');
		$content.prepend($drop_loading);
		$content.load($this_url+' #contentttt', 
			function(){
				$content.find('#loading').remove();
			}
		);
		$list.removeClass('show');

		return false;
	});

	/*$list_items.on('touchend',function(){
		var $this = $(this);
		$this.blur();
	});*/

	/*$(window).unload(
		function(){
			$('a').blur();
		});*/

});
/*

by not using a <select> element, we inherently give meaning to this content via the list items and anchor links therein each.
plus, if JS is turned off, the behavior will still work as browsers expect them to

*/