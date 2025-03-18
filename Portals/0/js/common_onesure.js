(function($) {
    'use strict';
    $(function() {
/*=============================================
    edit
=============================================*/
        var optMode = $('input:radio[name="IconBar.ascx$optMode"]:checked');
        if(optMode.length > 0 && optMode.val() == 'EDIT'){
            $('body').addClass('adminMode');
        } else if(optMode.length > 0 && optMode.val() === 'VIEW'){
            $('body').addClass('previewMode');
        } else {
            $('body').addClass('viewMode');
        }

/*=============================================
　　global
=============================================*/
        var $body = $('body'),
        device_mode = 'pc',
        spWidth = 767,
        tbWidth = 1000,
        view = 'pc',
        animSpd = 300,
        headFix = $('#header').css('position') == 'fixed' || $('#header').css('position') == 'absolute' ? true : false;

/*=============================================
　　mode / view
=============================================*/
        // device_mode
		if ($body.hasClass('spMode')) {
			device_mode = 'sp';
		} else if ($body.hasClass('tbMode')) {
			device_mode = 'sp';
		}
		if (device_mode === 'sp') {} else {}

/* =============================================
    load
============================================= */
		if (window.innerWidth <= spWidth) {
			view = 'sp';
		} else if (window.innerWidth <= tbWidth) {
			view = 'tb';
		} else {
			view = 'pc';
		}
		$body.attr('data-view', view);
		responsiveMotion('load');

/*=============================================
    resize
=============================================*/
		$(window).resize(function() {
			if (window.innerWidth <= spWidth) {
				if (view !== 'sp') {
					view = 'sp';
					$body.attr('data-view', view);
					responsiveMotion('resize');
				}
			} else if (window.innerWidth <= tbWidth) {
				if (view !== 'tb') {
					view = 'tb';
					$body.attr('data-view', view);
					responsiveMotion('resize');
				}
			} else {
				if (view !== 'pc') {
					view = 'pc';
					$body.attr('data-view', view);
					responsiveMotion('resize');
				}
			}
			responsiveMotion('always');
		});

/* =============================================
    responsive function
============================================= */
		function responsiveMotion(event_mode) {
			switch (event_mode) {
				case 'load':
					initialize();
					// smoothScrollMotion();
					headerFixMotion();
					// slickSliderMotion();
					// tableControlMotion();
					// accordionMotion(event_mode);
					// megaMenuMotion(event_mode);
					// burgerMotion(event_mode, 'main');
					if (!$body.hasClass('editMode') && !$body.hasClass('adminMode')) {
						$('#header + *').css('padding-top', $('#header').outerHeight());
					}
					if ($body.attr('data-view') == 'pc') {} else if ($body.attr('data-view') == 'sp') {}
					break;
				case 'resize':
					// accordionMotion(event_mode);
					// megaMenuMotion(event_mode);
					if (!$body.hasClass('editMode') && !$body.hasClass('adminMode')) {
						$('#header + *').css('padding-top', $('#header').outerHeight());
					}
					if ($body.attr('data-view') == 'pc') {
						// burgerMotion(event_mode, 'main');
					} else if ($body.attr('data-view') == 'sp') {}
					break;
				case 'always':
					if ($body.attr('data-view') == 'pc') {} else if ($body.attr('data-view') == 'sp') {}
					break;
			}
		}

/*=============================================
flag function
=============================================*/
        function sizeDataControl(data){
        $body.attr('data-view', data);
        }

/*=============================================
global resize function
=============================================*/
        function FuncControl(data){
        }

/*=============================================
global function
=============================================*/
        initialize();
        // toTopMotion();
        accordion('.accordionMotion', '.accordionItem', '.accordionBtn', animSpd);

/*=============================================
    headFix
=============================================*/
        function headerFixMotion(){
            $('#header').headFix({
                mode : view,
                headerMargin : true,
                targetMargin : $('#main'),
                cssMargin : 'padding-top',
                fixMode : 'default',
                headScrollX : '.headTop',
                scrollBefore: function() {},
				scrollAfter: function() {}
            });
        }

/*=============================================
    megaMenu
=============================================*/
        // function megaMenuMotion(){
        //     $('#gNav .tokenMenu > ul > li').megaMenu({
        //         mode : view,
        //         triggerMode : 'hover',
        //         pullDown : false,
        //         item : '.tokenMenu > ul > li > ul > li > ul > li',
        //         overlayPosi : '#skin > header',
        //         closeBtn : false,
        //         closeTag : '<p><span>close</span></p>',
        //         speed : 300,
        //         delay : 0,
        //         loadDelay : 0,
        //         scrollHide : false,
        //         existJudg : false
        //     });
        // }

/*=============================================
    burgerMenu
=============================================*/
        // function burgerMotion(){
        //     $('#skin > header .headBottom').burgerMenu({
        //         toggleSetPosi: '#skin > header',
        //         toggleHTML: '<p><span></span></p>',
        //         toggleClass: 'active',
        //         close: false,
        //         closeSetPosi: '.headBottom',
        //         closeHTML: '<p><span>close</span></p>',
        //         overlay: false,
        //         overlaySetPosi: '#skin > header',
        //         navInit: false,
        //         speed: 300,
        //         moveType: 'default'
        //     });
        // }

/*=============================================
    toTop
=============================================*/
        // function toTopMotion(){
        //     $('.pagetop').toTop({
        //         showStart: 100,
        //         showStyle: {'position': 'fixed'},
        //         fix: false,
        //         fixPosi: 'footer',
        //         addNum: 0,
        //         fixStyle: {'position': 'absolute'}
        //     });
        // }

/*=============================================
    matchHeight
=============================================*/
        if($('.matchHeight')[0]){
            $('.matchHeight > *').matchHeight();
        }

/*=============================================
    fontSizeControl
=============================================*/
        // function fontsizeChangeMotion(){
        //     if($('#fontSizer')[0]){
        //         $('#fontSizer').fontsizeChange({
        //             defaultSize: 0,
        //             target: 'body',
        //             activeClass: 'active',
        //             defaultClass: 'defaultFont',
        //             cookieExpires: 30,
        //             onAfter: function() {}
        //         });
        //     }
        // }

/*=============================================
    SmoothScroll
=============================================*/
        // $('a[href*="#"]:not([href="#"]):not(.noSmooth):not([href*="TabModule"])').smoothScroll({
        //     speed: animSpd,
        //     fix: false,
        //     fixItem: '#header'
        // });

/*=============================================
    pluginExists
=============================================*/
        function pluginExists(pluginName) {
            return $.fn[pluginName] ? true : false;
        }

/*=============================================
    Accordion
=============================================*/
        function accordion(wrap, items, trigger, speed){
            if($(wrap)[0]){
                var opt = {
                    activeClass: 'active',
                    btnHTML: '<span class="actBtn"></span>'
                };
                $(trigger).each(function(){
                    var $this = $(this);
                    if($this.closest(wrap).hasClass('spOnly') && view === 'pc' || $this.closest(wrap).hasClass('pcOnly') && view === 'sp'){
                        $this.removeClass('accordionBtn').next(items).stop().show();
                    }
                    else {
                        $this.append(opt.btnHTML).next(items).stop().hide();
                        if($this.hasClass('show')){
                            $this.next(items).stop().show().closest(wrap).addClass(opt.activeClass);
                        }
                    }
                });
                $(window).load(function(){
                    var target = location.hash;
                    $(target).next(items).stop().slideDown(speed).closest(wrap).addClass(opt.activeClass);
                });
                $('a[href^="#"]').on('click', function(){
                    var href = $(this).attr('href');
                    $(href).next(items).stop().slideDown(speed).closest(wrap).addClass(opt.activeClass);
                });
                $(trigger).on('click', function(){
                    if($(this).closest(wrap).hasClass('init') && !$(this).closest(wrap).hasClass(opt.activeClass)){
                        $(wrap + '.init').children(trigger).removeClass(opt.activeClass).next(items).slideUp(speed);
                    }
                    $(this).next(items).stop().slideToggle(speed).closest(wrap).toggleClass(opt.activeClass);
                    var position = $(window).scrollTop();
                    var userAgent = window.navigator.userAgent.toLowerCase();
                    var isIE = (userAgent.indexOf('msie') >= 0 || userAgent.indexOf('trident') >= 0);
                    if (view === 'sp') {
                        $('body').animate({ scrollTop: position }, speed);
                    } else {
                        $('html, body').animate({ scrollTop: position }, speed);
                        if (isIE) {
                            document.documentElement.scrollTop = position;
                        }
                    }
                    return false;
                });
            }
        }

/*=============================================
    animCssReset
=============================================*/
		function animCssReset(target) {
			$(target).css({ 'height': '', 'padding-top': '', 'margin-top': '', 'padding-bottom': '', 'margin-bottom': '' });
		}

/*=============================================
    Initialize
=============================================*/
        function initialize(){
            $('a[href="#"]').on('click', function(e){
                e.preventDefault();
            });
        }
    });
})(jQuery);