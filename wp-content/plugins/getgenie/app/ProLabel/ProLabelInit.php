<?php 
namespace GenieAi\App\ProLabel;

class ProLabelInit{
    public function __construct()
    {
        add_action('wp_loaded', function(){
            $this->includeFiles();
            $this->filterString = self::active_plugins();
            \Oxaim\Libs\Notice::init();
    
            $this->initBanner();
            // $this->initStories();
        });
    }

    private function includeFiles(){
        include 'Notice.php';
        include 'Banner.php';
        // include 'Stories.php';
    }

    public static function active_plugins() {
		require_once ABSPATH . 'wp-admin/includes/plugin.php';
		$apl           = get_option( 'active_plugins' );
		$plugins       = get_plugins();
		$filter_string = '';
		foreach ( $apl as $p ) {
			if ( isset( $plugins[ $p ] ) && isset( $plugins[ $p ]['TextDomain'] ) ) {
				$filter_string .= ',' . $plugins[ $p ]['TextDomain'];
			}
		}
		return ltrim( $filter_string, ',' );
	}

    private function initBanner(){
        /**
         * Show WPMET banner (codename: jhanda)
         */
        \Wpmet\Libs\Banner::instance( 'getgenie' )
        // ->is_test(true)
        ->set_filter( $this->filterString )
        ->set_api_url( 'https://api.wpmet.com/public/jhanda' )
        ->set_plugin_screens( 'toplevel_page_getgenie' )
        ->call();
    }
}