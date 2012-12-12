window.addEvent('domready', function() {
	var displayers = $$('.show-menu'),
		menu = $$('.mobile-menu')[0],
		menuContainer = $('mobile-menu'),
		resize = function() {
			menu.setStyle('max-height', menu.getElement('ul').getSize().y);
		};


	resize();
	window.addEvent('resize', function(){
		resize();
	});

	displayers.addEvent('click', function(event) {
		event = new Event(event);
		event.stop();
		menu.toggleClass('menu-close');
		menuContainer.toggleClass('menu-close');
	});
});