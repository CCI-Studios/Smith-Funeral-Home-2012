window.addEvent('domready', function() {
	$$('div.items-leading > div').each(function(dl) {
		var dts = dl.getElements('.accordian-title'),
			dds = dl.getElements('.accordian-content'),
			acc,
			span = new Element('span', { 'class': 'arrow' });

		dts.each(function(dt) {
			span.clone().inject(dt);
		});

		acc = new Fx.Accordion(dts, dds, {
			display: -1,
			alwaysHide: true,
			duration: 300
		});	
	});
});