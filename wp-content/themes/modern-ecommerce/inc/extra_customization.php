<?php 

	$modern_ecommerce_sticky_header = get_theme_mod('modern_ecommerce_sticky_header');

	$modern_ecommerce_custom_style= "";

	if($modern_ecommerce_sticky_header != true){

		$modern_ecommerce_custom_style .='.menu_header.fixed{';

			$modern_ecommerce_custom_style .='position: static;';

		$modern_ecommerce_custom_style .='}';
	}

	/*---------------------------Width -------------------*/
	
	$modern_ecommerce_theme_width = get_theme_mod( 'modern_ecommerce_width_options','full_width');

    if($modern_ecommerce_theme_width == 'full_width'){

		$modern_ecommerce_custom_style .='body{';

			$modern_ecommerce_custom_style .='max-width: 100%;';

		$modern_ecommerce_custom_style .='}';

	}else if($modern_ecommerce_theme_width == 'container'){

		$modern_ecommerce_custom_style .='body{';

			$modern_ecommerce_custom_style .='max-width: 1140px; width: 100%; padding-right: 15px; padding-left: 15px; margin-right: auto; margin-left: auto;';

		$modern_ecommerce_custom_style .='}';

	}else if($modern_ecommerce_theme_width == 'container_fluid'){

		$modern_ecommerce_custom_style .='body{';

			$modern_ecommerce_custom_style .='width: 100%;padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;';

		$modern_ecommerce_custom_style .='}';

	}

	/*---------------------------Scroll-top-position -------------------*/
	
	$modern_ecommerce_scroll_options = get_theme_mod( 'modern_ecommerce_scroll_options','right_align');

    if($modern_ecommerce_scroll_options == 'right_align'){

		$modern_ecommerce_custom_style .='.scroll-top button{';

			$modern_ecommerce_custom_style .='';

		$modern_ecommerce_custom_style .='}';

	}else if($modern_ecommerce_scroll_options == 'center_align'){

		$modern_ecommerce_custom_style .='.scroll-top button{';

			$modern_ecommerce_custom_style .='z-index: 999; right: 0; left:0; margin: 0 auto; top:85% !important';

		$modern_ecommerce_custom_style .='}';

	}else if($modern_ecommerce_scroll_options == 'left_align'){

		$modern_ecommerce_custom_style .='.scroll-top button{';

			$modern_ecommerce_custom_style .='right: auto; left:5%; margin: 0 auto';

		$modern_ecommerce_custom_style .='}';
	}