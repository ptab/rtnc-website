/*
 * Lightflow - HTML5 Template
 * File Description: This file contain all the jQuery/Javascript code for this template, for plugins see the plugins.js file
 * 
 * Author: Jaime Hernández Avitia (Jaheravy)
 * 
 * Website: http://www.jaheravy.com/
 * Twitter: http://www.twitter.com/jaheravy
 * 
 * Email: contact@jaheravy.com
 * Support: support@jaheravy.com
 * 
 * This template has been purchased at http://www.themeforest.net/
 * 
 * FILE CONTENTS:
 * 
 * 0. Twitter feed
 * 1. Header
 * 2. Meanmenu
 * 3. Localscroll & nicescrol
 * 4. Portfolio
 * 5. Caroufredsel
 * 6. News
 * 7. Center
 * 7. Backstretch
 * 8. Menu breakpoint
 * 9. Progress bar
 * 10. Title lines
 * 11. Image hover
 * 12. Service box (animation)
 * 13. Tooltipster
 * 14. Prettyphoto
 * 15. Contact form
 * 
 */

$(document).ready(function() {

	$(window).load(function(){
		// Execute only when all the files are loaded
		lightflowTitleLines();
		lightflowRcaroufredsel();
	
		// Parallax effect MUST BE AFTER CAROUFREDSEL OTHERWISE PARALLAX WILL CRASH
		$('#section-separator_1').parallax("50%", 0.5);
		$('#section-separator_2').parallax("50%", 0.5);
		$('#section-separator_3').parallax("50%", 0.5);
		$('#section-separator_4').parallax("50%", 0.5);
		$('#section-separator_5').parallax("50%", 0.5);
	});

	$(window).resize(function(){
		// update some things on resize (and after 200 milliseconds of that)
		if ( !$('html').hasClass('lt-ie9') ){
			$.doTimeout('resize', 200, function(){
				lightflowHeader();
				lightflowCenter();
				lightflowMenubp();
				lightflowTitleLines();
				lightflowRcaroufredsel();
				
				$('#section-separator_1').parallax("50%", 0.5);
				$('#section-separator_2').parallax("50%", 0.5);
				$('#section-separator_3').parallax("50%", 0.5);
				$('#section-separator_4').parallax("50%", 0.5);
				$('#section-separator_5').parallax("50%", 0.5);
			});
		}
	});
	
	
	
	// ========== HEADER ========== //
	
	lightflowHeader();
	
	function lightflowHeader()
	{
		// Helper variables
		var container = '#main-header';
		var contentHeight = 0;
		var windowHeight = ($(window).height());
		var firstElementType = 'div';
		var firstElementMargin = parseInt($(container + ' ' + firstElementType + ':first').css('marginTop'));
		var containerWidth = $(container).width();
		var ctaButton = '.big-dual-button';
		var ctaButtonWidth = $(ctaButton).width();
		
		
		// Set the header height with the window height value
		$(container).height(windowHeight + 'px');
		
		// Get the the total height of the elements in container
		$(container + ' > *:lt(2)').each(function(){ // <- Total elements in container, DON'T count elements that aren't part of the document flow!
			contentHeight = Math.round(contentHeight + $(this).outerHeight(true));
		});
		
		// Center the header content vertically in the container
		if (((windowHeight / 2) - ((contentHeight - firstElementMargin) / 2)) > 1){
			$(container + ' ' + firstElementType + ':first').css({
				'marginTop' : Math.round((windowHeight / 2) - ((contentHeight - firstElementMargin) / 2)) + 'px'
			});
		}
	}
		
	// ========== MEANMENU ========== //
	
	$('#main-nav').meanmenu({
		meanScreenWidth: "720"
	});
	
	// ========== LOCALSCROLL & NICESCROLL ========== //
	
	$('#main-nav').localScroll({
		target:'body'
	});
	
	// On mobile devices
	$('.mean-nav').localScroll({
		target:'body'
	});
	
	$('.big-dual-button').localScroll({
		target:'body'
	});
	
	$('.news-box').localScroll({
		target:'body',
		duration: 500
	});
	
	// ========== PORTFOLIO ========== //
	
	lightflowPortfolio();
	
	function lightflowPortfolio()
	{
		// Helper variables
		var portfolioMenu = '.portfolio-menu';
		var portfolioItems = '.portfolio-items';
										
		$(portfolioMenu + ' a').click(function(e){
			e.preventDefault();
			
			// Get the category of the element clicked
			var activeCat = $(this).data('portfoliocat');
			
			// Set the opacity
			if (activeCat == 'all'){
				$(portfolioItems + ' > *').stop().animate({
					'opacity' : 1
				}, 250 );
				$('.portfolio-item-disabled').removeClass('portfolio-item-disabled');
				$('.image-hover').removeClass('hidden');
			}
			else{
				$(portfolioItems + ' > *').each(function(){
					$(this).stop().animate({
						'opacity' : 0.25
					}, 250 );
					$(this).addClass('portfolio-item-disabled');
					$('.image-hover', this).addClass('hidden');
				});
				
				$(portfolioItems + ' > *[data-portfoliocat="' + activeCat + '"]').each(function(){
					$(this).stop().animate({
						'opacity' : 1
					}, 250 );
					$(this).removeClass('portfolio-item-disabled');
					$('.image-hover', this).removeClass('hidden');
				});
			}
		});
	}
	
	
	// ========== CAROUFREDSEL ========== //
		
	function lightflowRcaroufredsel()
	{
		$(".products-container").carouFredSel({
			circular: false,
			infinite: false,
			items: {
				visible: 4,
				minimum: 4
			},
			auto		: false,
			swipe		: {
				onTouch		: true,
				onMouse		: true
			}
		});
		
		$(".news-container").carouFredSel({
			circular: false,
			infinite: false,
			items: {
				visible: 3,
				minimum: 3
			},
			auto		: false,
			swipe		: {
				onTouch		: true,
				onMouse		: true
			}
		});
	
		if (document.documentElement.clientWidth < 801) {
			$(".products-container").carouFredSel({
				circular: false,
				infinite: false,
				items: {
					visible: 3,
					minimum: 3
				},
				auto		: false,
				swipe		: {
					onTouch		: true,
					onMouse		: true
				}
			});
			
			$(".news-container").carouFredSel({
				circular: false,
				infinite: false,
				items: {
					visible: 2,
					minimum: 2
				},
				auto		: false,
				swipe		: {
					onTouch		: true,
					onMouse		: true
				}
			});
		}
		
		if (document.documentElement.clientWidth < 604) {
			$(".products-container").carouFredSel({
				circular: false,
				infinite: false,
				items: {
					visible: 2,
					minimum: 2
				},
				auto		: false,
				swipe		: {
					onTouch		: true,
					onMouse		: true
				}
			});
			
			$(".news-container").carouFredSel({
				circular: false,
				infinite: false,
				items: {
					visible: 2,
					minimum: 2
				},
				auto		: false,
				swipe		: {
					onTouch		: true,
					onMouse		: true
				}
			});
		}
		
		if (document.documentElement.clientWidth < 361) {
			$(".products-container").carouFredSel({
				circular: false,
				infinite: false,
				items: {
					visible: 1,
					minimum: 1
				},
				auto		: false,
				swipe		: {
					onTouch		: true,
					onMouse		: true
				}
			});
			
			$(".news-container").carouFredSel({
				circular: false,
				infinite: false,
				items: {
					visible: 1,
					minimum: 1
				},
				auto		: false,
				swipe		: {
					onTouch		: true,
					onMouse		: true
				}
			});
		}
	}
	
	
	// ========== NEWS ========== //
	
	lightflowNews();
	
	function lightflowNews()
	{
		$('.news-menu_twitter').click(function(e){
			e.preventDefault();
						
			$('#news-article').slideUp('normal', function(){
				$('.news-wrap .caroufredsel_wrapper').animate({
					'marginLeft' : '-' + $('.news-wrap').width() + 'px'
				}, 250, function(){
					$('.twitter-container').slideDown('normal');
				});
				
				$('#section-separator_1').parallax("50%", 0.5);
				$('#section-separator_2').parallax("50%", 0.5);
				$('#section-separator_3').parallax("50%", 0.5);
				$('#section-separator_4').parallax("50%", 0.5);
				$('#section-separator_5').parallax("50%", 0.5);
			});
			
		});
		
		$('.news-menu_news').click(function(e){
			e.preventDefault();
			
			$('.twitter-container').slideUp('normal', function(){
				$('#news-article').slideUp('normal', function(){
					$('.news-wrap .caroufredsel_wrapper').animate({
						'marginLeft' : 0
					}, 250);
					
					$('#section-separator_1').parallax("50%", 0.5);
					$('#section-separator_2').parallax("50%", 0.5);
					$('#section-separator_3').parallax("50%", 0.5);
					$('#section-separator_4').parallax("50%", 0.5);
					$('#section-separator_5').parallax("50%", 0.5);
				});
			});

		});
		
		$('.read-article').click(function(e){			
			e.preventDefault();
							
			var link = $(this).data('news_file');
			
			$('#news-article').slideUp(1000, function(){
				$(this).load(link, function(){
					$(this).slideDown(1000, function(){
											
						$('#section-separator_1').parallax("50%", 0.5);
						$('#section-separator_2').parallax("50%", 0.5);
						$('#section-separator_3').parallax("50%", 0.5);
						$('#section-separator_4').parallax("50%", 0.5);
						$('#section-separator_5').parallax("50%", 0.5);
					});
				});
			});
									
		});
	}
	

	// ========== CENTER ========== //
	
	lightflowCenter();
	
	function lightflowCenter()
	{
		$('.center').each(function(){
			$(this).css('marginLeft', ($(this).parent().width() / 2) - ($(this).outerWidth() / 2) ) + 'px';
		});
	}
	
	
	// ========== BACKSTRETCH ========== //
	
	$.backstretch("img/backgrounds/bg_1.jpg");
	
	
	// ========== MENU BREAKPOINT ========== //
	if ( !$('html').hasClass('lt-ie9') ){
		lightflowMenubp();
	}
	
	function lightflowMenubp()
	{
		// Helper variables
		var navContainer = '#main-nav';
		var headerContainer = '#main-header';
		var scroll_pos = 0;
		var breakpoint = ($(headerContainer).outerHeight(true)) - ($(navContainer).outerHeight(true));
		var defaultColor = 'rgba(0,0,0,0.1)'; /* Change this if you change the background color in the CSS file */
		var newColor = '#333333';
		var i = 0;
				
		// Changes the menu background when it pass the main header
		$(window).scroll(function(){
			scroll_pos = $(this).scrollTop();
			
			if(scroll_pos > breakpoint) {
				if (i == 0){
					$(navContainer).stop().animate({
						backgroundColor: newColor
					}, 500);
					i = 1;
				}	
			} 
			else {
				if (i == 1){
					$(navContainer).stop().animate({
						backgroundColor: defaultColor
					}, 250 );
					i = 0;
				}					
			}
		});
		
	}
	
	
	// ========== PROGRESS BAR ========== //
	
	lightflowProgressBar();
	
	function lightflowProgressBar()
	{
		// Helper variable
		var progressBarName = '.skills-list_item-active';
		
		// Set the width with the progress value to each element
		$(progressBarName).each(function(){
			$(this).width($(this).data('progress') + '%')
		});
	}
	
	
	// ========== TITLE LINES ========== //

	function lightflowTitleLines()
	{
		// Helper variables
		var titleContainer = '.section-title';
		// Array with all the widths of the title containers
		var titleContainerWidths = [];
		// Array with all the widths of the h1 titles
		var title1Widths = [];
		// Array with all the widths of the h2 titles
		var title2Widths = [];
		
		// Delete existing lines
		if($('.title-lines_left').length || $('.title-lines_right').length){
			$('.title-lines_right').each(function(){
				$(this).remove();
			});
			$('.title-lines_left').each(function(){
				$(this).remove();
			});			
		}
		
		// Add the widths of the title containers to the array 'titleContainerWidths'
		$(titleContainer).each(function(){
			titleContainerWidths.push($(this).outerWidth());
		});
		
		// Add the widths of the titles to the arrays
		$(titleContainer + ' > h1, ' + titleContainer + ' > h2').each(function(index){
			
			// Get the title widths and add them to their arrays
			if ((this.outerHTML).indexOf('<h1') > -1){
				title1Widths.push($(this).width());
				title2Widths.push(false);
			}
			else if ((this.outerHTML).indexOf('<h2') > -1){
				title1Widths.push(false);
				title2Widths.push($(this).width());
			}

			// Center the titles
			$(this).css({
				marginLeft : Math.round((titleContainerWidths[index] / 2) - (($(this).width()) / 2)) + 'px'
			});
			
			// Create lines
			$(this).prepend('<div class="title-lines_left">&nbsp;</div>')
				   .append('<div class="title-lines_right">&nbsp;</div>');
				   
		});
		
		// Set the width of the lines in the left side
		$('.title-lines_left').each(function(index){
			if (title1Widths[index]){
				$(this).css({
					width : Math.round((titleContainerWidths[index] / 2) - (title1Widths[index] / 2) - 30) + 'px'
				});
			}
			else{
				$(this).css({
					width : Math.round((titleContainerWidths[index] / 2) - (title2Widths[index] / 2) - 30) + 'px'
				});
			}
		});
		
		// Set the width of the lines in the right side
		$('.title-lines_right').each(function(index){
			if (title1Widths[index]){
				$(this).css({
					width : Math.round((titleContainerWidths[index] / 2) - (title1Widths[index] / 2) - 30) + 'px'
				});
			}
			else{
				$(this).css({
					width : Math.round((titleContainerWidths[index] / 2) - (title2Widths[index] / 2) - 30) + 'px'
				});
			}
		});
	}
		
	
	// ========== IMAGE HOVER ========== //
	
	if ( !$('html').hasClass('lt-ie9') ){
		lightflowImageHover();
	}

	function lightflowImageHover()
	{
		// Helper variables
		var imageContainer = '.image';
		var imageHover = '.image-hover';
		
		// Show the imageHover
		$(imageContainer).hover(
			function(){
				if(!$(this).parent().hasClass('portfolio-item-disabled')){
				
					// Change opacity
					$(imageHover, this).stop().animate({
						'opacity': 0.75,
						'filter': 'alpha(opacity=75)'
					}, 250, function(){
						$('a', this).animate({
							'opacity': 1,
							'filter': 'alpha(opacity=100)'
						}, 250 );
					});
				}
			},
			function(){
				
				// Restore opacity						
				$('a', this).stop().animate({
					'opacity': 0,
					'filter': 'alpha(opacity=0)'
				}, 250, function(){
					$(this).parent().animate({
						'opacity': 0,
						'filter': 'alpha(opacity=0)'
					}, 250 );
				});	
			}
		);
	}
	
	
	// ========== SERVICE BOX (Animation) ========== //
	
	lightflowServiceBox();
	
	function lightflowServiceBox()
	{
		// Helper variables
		var boxName = '.service-box';
		var boxTitle = 'h3';
		var boxImage = '.icon';
					
		// Create animation			
		$(boxName).hover(
			function(){				
				// title animation
				$(boxTitle, this).stop().animate({
					'paddingRight' : '25px'
				}, 250 );
				// image animation
				$(boxImage, this).stop().animate({
					'paddingLeft' : '25px'
				}, 250 );								
			},
			function(){
				// restore title
				$(boxTitle, this).stop().animate({
					'paddingRight' : 0
				}, 250 );
				// restore image
				$(boxImage, this).stop().animate({
					'paddingLeft' : 0
				}, 250 );
			}
		);
	}
	
	
	// ========== TOOLTIPSTER ========== //
	
	$('*[title]').tooltipster();
	
	
	// ========== PRETTYPHOTO ========== //
	
	$("a[data-prettyphoto]").prettyPhoto();


	// ========== CONTACT FORM ========== //
	
	$('.contact-form').validate();
	
	$('.contact-form').submit(function(e){
		e.preventDefault();
		
		// Check if the form is OK, then send it
		if ($('.contact-form').valid()){
			$('.contact-form button[action="submit"]').html('Sending...');
			$.post('contact.php', $('.contact-form').serialize(),  function() {
				$('.contact-form button[action="submit"]').html('Your message has been sent');
				$('.contact-form button[action="submit"]').append('<span class="icon">&#10003;</span>');
				$('.contact-form')[0].reset();
			});
		}
	});

	$('.contact-form input').focus(function(){
		$('.contact-form button[action="submit"]').html('Send');
	})

});
