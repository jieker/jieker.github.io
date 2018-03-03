$(function () {
	
	//首页轮播图
	var loopBanner = new Swiper ('.home-page-banner .swiper-container', {
	    loop: true,
	    paginationClickable :true,
	    autoplay : 4000,
	    pagination: '.home-page-banner .swiper-pagination',
	    nextButton: '.home-page-banner .swiper-button-next',
	    prevButton: '.home-page-banner .swiper-button-prev',
	})
	
	//下拉菜单
	var navMenuDropdown = function() {
		var $DropdownToggle = $('.mes-dropdown-toggle'),
			$DropdownMenu = $('.mes-dropdown-menu'),
			windowsWidth = $(window).width()
		
		if (windowsWidth > 650) {
			$DropdownToggle.on('mouseenter',function() {
				$(this).children('a').addClass('active')
				$(this).find($DropdownMenu).css('display','block')
				$(this).find('span').removeClass('fa-angle-down').addClass('fa-angle-up')
				$(this).on('mouseleave',function () {
					$(this).children('a').removeClass('active')
					$(this).find('span').removeClass('fa-angle-up').addClass('fa-angle-down')
					$(this).find($DropdownMenu).css('display','none')
				});
			});
		} else {
				$DropdownToggle.on('click',function() {
					if ($(this).find('.mes-dropdown-menu').css('display') === 'none') {
						$(this).children('a').addClass('active')
						$(this).find($DropdownMenu).css('display','block')
						$(this).find('span').removeClass('fa-angle-down').addClass('fa-angle-up')
					} else {
						$(this).children('a').removeClass('active')
						$(this).find('span').removeClass('fa-angle-up').addClass('fa-angle-down')
						$(this).find($DropdownMenu).css('display','none')
					}
					
				})
			}
		}
	
	//功能模块特效
	var moduleAnimation = function() {
		var $moudule = $('.home-page-module .section-body .col-md-4'),
			$mouduleOverlay = $moudule.find('.module-overlay')
		
		$moudule.on('mouseover',function(event) {
			$(this).find('.module-content').css('opacity',0)
			$(this).find('.module-overlay').css('visibility','visible').removeClass('flipOutY').addClass('flipInY')
			$(this).find('.module-overlay').find('span').css('font-size',100)
			$(this).on('mouseout',function(event) {
				$(this).find('.module-overlay').removeClass('flipInY').addClass('flipOutY')
				$(this).find('.module-overlay').find('span').css('font-size',20)
				$(this).find('.module-content').css('opacity',1)
			})
		})
		
	}
	
	//主页合作伙伴特效
	var partnerNameShow = function() {
		var $toggleObject = $('.home-page-partner .partner-body-img')
		
		$toggleObject.on('mouseenter',function() {
			$(this).css('filter','grayscale(0%)').css('border-color','#007aff')
			$(this).find('.partner-body-name').css('height',50)
			$toggleObject.on('mouseleave',function() {
				$(this).css('filter','grayscale(100%)').css('border-color','rgba(0,0,0,0.5)')
				$(this).find('.partner-body-name').css('height',0)
			})
		})
		
	}

	//返回顶部
	var goToTop = function() {
		var $btn = $('.gototop')

		$(window).scroll(function() {
			var $windowH = $(window).height()
			var $scrollTop = $(window).scrollTop()
			if ($scrollTop > $windowH ) {
				$btn.css('opacity',1).css('visibility','visible')
			}else {
				$btn.css('opacity',0).css('visibility','hidden')
			}
		})
		
		$btn.on('click',function (ev) {
			ev.preventDefault()

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);
		})
	}
	
	
	//导航侧栏
	var toggleNavslide = function() {
		var toggleBtn = $('.mes-navbar-toggle .fa-navicon'),
			slideNavbarMenu  = $('#navbar-collapse'),
			navbarBackground = $('.home-navbar')
		
		toggleBtn.on('click',function() {
			slideNavbarMenu.toggleClass('hidden-xs')
			if (! slideNavbarMenu.hasClass('hidden-xs')) {
				navbarBackground.css('background','rgba(0,0,0,0.8)')
			} else {
				navbarBackground.css('background','rgba(0,0,0,0.0)')
			}
		})
	}

	
	//运行
	navMenuDropdown() //下拉菜单
	moduleAnimation() //功能模块特效
	partnerNameShow() //主页合作伙伴特效
	goToTop() //返回顶部
	toggleNavslide() //导航侧栏
	
})
