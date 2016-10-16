var xaraSwidgets_cycleFadeTemplates = {

	entry:	'<img src="{image}" border="0" class="cycleFade_slideshow"/>',
			
	main:	 '<div id="{component_id}OuterDiv" class="cycle1">'
			+ 	'{entryhtml}'
			+ '</div>'
			+ '<div id="cycleFade_nav"></div>'
			
			
	        
};

// this is the constructor for a component
// it loops through each 'entry' in the array of data and compiles the entry template for it
// it then applies the resulting HTML to the main template before writing the whole lot to the div on the page
// it then initialises the actual jquery plugin for the div (that now contains the required HTML as a result of writing the template to it)
function xaraSwidgets_cycleFadeConstructor(divID, data)
{
	
	
	var entryHTML = '';
	// loop through each entry in the array and compile the entry template for it
	for(var i=0; i<data.length; i++)
	{
		entryHTML += xaraSwidgets_compileTemplate(xaraSwidgets_cycleFadeTemplates.entry, data[i]);
	}
	
	// now lets compile the 'main' template which acts as a wrapper for each entry
	
	var mainData = {
		component_id:divID,
		entryhtml:entryHTML
	};
	
	var mainTemplate = xaraSwidgets_compileTemplate(xaraSwidgets_cycleFadeTemplates.main, mainData);
	
	// now lets apply the resulting HTML for the whole component to the main DIV that was exported by XARA
	
	$('#' + divID).html(mainTemplate);
	
	
	// now we have the components DOM on the page - we can use the 'OuterDiv' as the jquery initiation point
	
	$('#' + divID + 'OuterDiv').cycle({
						
						fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
						pager:      '#cycleFade_nav'
						
							
							
	});
}