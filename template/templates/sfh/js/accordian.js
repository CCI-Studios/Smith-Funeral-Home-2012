window.addEvent('domready', function() {
	var container = $$('div.items-leading'),
		titles = container.getElements('.accordian-title'),
		contents = container.getElements('.accordian-content'),
		acc = null;

	acc = new Fx.Accordion(titles, contents, {
		display: -1,
		//alwaysHide: true,
		duration: 300
	});
});