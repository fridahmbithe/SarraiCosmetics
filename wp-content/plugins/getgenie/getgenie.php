<?php

/**
 * Plugin Name: GetGenie AI
 * Description:  Genie AI is the most intuitive A.I Content Wordpress Plugin that can help you save time and write smarter.
 * Plugin URI: https://getgenie.ai/
 * Author: getgenieai
 * Version: 2.0.1
 * Author URI: https://getgenie.ai/
 *
 * Text Domain: getgenie
 *
 * @package Genie AI
 * @category Pro
 *
 * License: GPLv3 or later
 */

defined('ABSPATH') || exit;

define('GETGENIE_VERSION', '2.0.1');
define('GETGENIE_TEXTDOMAIN', 'getgenie');
define('GETGENIE_URL', trailingslashit(plugin_dir_url(__FILE__)));
define('GETGENIE_DIR', trailingslashit(plugin_dir_path( __FILE__ )));

define('GETGENIE_NLP_REMOTE_ADDR',              'https://nlp.getgenie.ai/');
define('GETGENIE_ACCOUNT_REMOTE_ADDR',          'https://getgenie.ai/account/');
define('GETGENIE_ACCOUNT_REMOTE_ADDR_FALLBACK', 'https://app.getgenie.ai/');


define('GETGENIE_BLOGWIZARD_PREFIX', 'getgenie_blogwizard_');
define('GETGENIE_HISTORY_PREFIX', 'getgenie_history_');

function getgenie_on_activation( $plugin) {

    if('getgenie/getgenie.php' != $plugin){
        return;
    }

    wp_redirect(admin_url('admin.php?page=getgenie')."#getting-started");
    die();
}
add_action('activated_plugin', 'getgenie_on_activation');


function getgenie_blogwizard_store_objects()
{
    return [
        'keyword',
        'seoEnabled',
        'selectedCountry',
        'titleCreativityLevel',

        'introCreativityLevel',

        'outlineCreativityLevel',

        'generatedTitles',
        'generatedIntros',
        'generatedOutlines',

        'selectedTitle',
        'selectedIntro',
        'selectedOutlines',

        'serpData',
        'keywordData'
    ];
}

function getgenie_templates()
{
    $data = null;
    $cache_key = 'getgenie_writing_templates_languages';
    $cached = get_option($cache_key, ['time' => 0]);
    if (!empty($cached['data']) && !empty($cached['time']) && $cached['time'] + (1 * 60 * 60) >= time()) {
        return $cached['data'];
    }
    
    $remote_url = GETGENIE_NLP_REMOTE_ADDR . 'writer-default/get-template-infos';
    $response = wp_remote_request($remote_url, array(
        'method'      => 'POST',
        'timeout'     => 30,
        'redirection' => 3,
        'httpversion' => '1.0',
        'sslverify' => false,
        'blocking'    => true,
        'headers' => array(
            'Content-Type' => 'application/json',
        ),
    ));

    if (200 === wp_remote_retrieve_response_code($response)) {
        $response_body = wp_remote_retrieve_body($response);
        $response_body_decoded = json_decode($response_body);

        if((is_array($response_body_decoded) || is_object($response_body_decoded)) && !empty($response_body_decoded)) {
            $data = $response_body;
        }
        unset($response_body_decoded);
        unset($response_body);
    }

    if($data === null) {
        if(!empty($cached['data'])) {
            $cached_data_decoded = json_decode($cached['data']);
        }
        
        if((is_array($cached_data_decoded) || is_object($cached_data_decoded)) && !empty($cached_data_decoded)) {
            $data = $cached['data'];
            unset($cached_data_decoded);
        }else{
            $data = file_get_contents(GETGENIE_DIR . 'config/templates.json');
        }
    }
    
    update_option($cache_key, [
        'data' => $data,
        'time' => time()
    ]);

    return $data;
}

function getgenie_admin_notice() {

    echo "<div class='notice notice-warning is-dismissible getgenie-notice-wrapper'>
            <div class='getgenie-notice'>
                <p class='notice-message'>
                    <img src='".GETGENIE_URL."/assets/dist/admin/images/genie-head.svg"."' class='notice-icon' />
                     I've noticed that you haven't activated the Pro/Free license yet. Click the button below to unleash my magic. Sincerely — GetGenie AI
                </p>
                <div class='notice-link'>
                    <a href='https://app.getgenie.ai/license/?product=free-trial' target='_blank'>Claim your license</a>
                    <a href='".admin_url('admin.php?page=' .  GETGENIE_TEXTDOMAIN)."#license'>Finish setup with your license.</a>
                </div>
            </div>
          </div>"; 
    }

if(empty(get_option('getgenie_site_token', ''))){
    add_action( 'admin_notices', 'getgenie_admin_notice' );
}

add_action( 'elementor/editor/after_enqueue_scripts', 'genei_editor_script' );
add_action( 'elementor/editor/after_enqueue_scripts', 'genie_header_script_data' );
add_action('admin_head', 'genie_header_script_data');

function genei_editor_script(){
	wp_enqueue_script('editor-panel-script', GETGENIE_URL . 'assets/dist/admin/js/elementor.js', [], GETGENIE_VERSION, true);
}

function genie_header_script_data(){

    $wizard_screen = null;
    $is_block_editor = null;

    if(function_exists('get_current_screen')){
        $current_screen = get_current_screen();
        $elementor_action = isset($_GET['action']) && $_GET['action'] == 'elementor';
        $is_block_editor = $current_screen->is_block_editor();
        
        if($elementor_action){
            $wizard_screen = 'elementor';
        }

        if( 
            $current_screen->id == 'post' 
            && $current_screen->base == 'post' 
            && $current_screen->post_type == 'post'
            && !$elementor_action
        ){
            $wizard_screen = 'post';
        }
    
        if( 
            $current_screen->id == 'product' 
            && $current_screen->base == 'post' 
            && $current_screen->post_type == 'product'
        ){
            $wizard_screen = 'woo_product';
        }
    }
 
 
	$blog_wizard_data = [
	    'post_id' => get_the_ID(),
	];
 
	$blogwizard_objects = getgenie_blogwizard_store_objects();
	foreach ($blogwizard_objects as $object) {
	    $blog_wizard_data[$object] = json_decode(get_post_meta(get_the_ID(), GETGENIE_BLOGWIZARD_PREFIX . $object, true));
	}
 
	$token = new \GenieAi\App\Auth\TokenManager();
	$_nonce = wp_create_nonce( 'wp_rest' );
 
	$config = [
	    'version' => GETGENIE_VERSION,
	    'restNonce' => $_nonce,
	    'siteUrl' => get_site_url(),
	    'assetsUrl' => GETGENIE_URL . 'assets/',
	    'baseApi' => get_rest_url(null, 'getgenie/v1/'),
	    'parserApi' => GETGENIE_NLP_REMOTE_ADDR,
	    'parserApiWp' => get_rest_url(null, 'getgenie/v1/parser/'),
	    'usageLimitStatsApi' => get_rest_url(null, 'getgenie/v1/limit_usage_stats/'),
	    'storeApi' => get_rest_url(null, 'getgenie/v1/store/'),
	    'licenseApi' => get_rest_url(null, 'getgenie/v1/license/'),
	    'licenseKeyLength' => 46,
	    'feedbackApi' => get_rest_url(null, 'getgenie/v1/feedback/'),
	    'historyApi' => get_rest_url(null, 'getgenie/v1/history/'),
	    'templateAssets' => json_decode(getgenie_templates()),
	    'siteToken' => get_option('getgenie_site_token', ''),
	    'authToken' => $token->generate(), // access_denied or 4gb3rv3dyvy3h59gvwscdt3rerf23
	    'authTokenLeaserApi' => admin_url('admin-ajax.php?action=lease_auth_token'), // wp-ajax
        'isBlockEditor' => $is_block_editor,
	    'wizardScreen' => $wizard_screen,
        'wcActivated' => is_plugin_active( 'woocommerce/woocommerce.php' ),
        'wizardScreenUrl' => [
            'post' => admin_url('post-new.php#getgenie-open-blogwizard'),
            'woo_product' => admin_url('post-new.php?post_type=product#getgenie-open-wooWizard'),
        ],
	];
 
	?>
	<script>
	    window.getGenie = window.getGenie ?? {};
	    window.getGenie.config = <?php echo json_encode($config); ?>;
	    window.getGenie.blogWizardData = <?php echo json_encode($blog_wizard_data); ?>;
	    window.getGenie.Components  = window.getGenie.Components ?? {};
        
	</script>
 <?php
 }


function getgenie_remote_request($remote_url_partial, $body, $header = []){
    $remote_url = GETGENIE_ACCOUNT_REMOTE_ADDR . $remote_url_partial;
    $response = getgenie_remote_request_try($remote_url, $body, $header);

    if($response === null){
        $remote_url = GETGENIE_ACCOUNT_REMOTE_ADDR_FALLBACK . $remote_url_partial;
        $response = getgenie_remote_request_try($remote_url, $body, $header);
    }

    return $response;
}

function getgenie_remote_request_try($remote_url, $body, $header = []){
    $response = wp_remote_post($remote_url, array(
        'method'      => 'POST',
        'timeout'     => 300,
        'redirection' => 3,
        'httpversion' => '1.0',
        'sslverify' => false,
        'blocking'    => true,
        'body' => $body,
        'headers' => array_merge($header, array(
            'Content-Type' => 'application/json',
        )),
    ));

    if(200 === wp_remote_retrieve_response_code($response)) {
        $response_body = wp_remote_retrieve_body($response);
        $data          = json_decode($response_body);

        return $data;
    }

    return null;
}
 
include 'vendor/autoload.php';


new \GenieAi\App\ProLabel\ProLabelInit();

new \GenieAi\App\Providers\EnqueueProvider();
new \GenieAi\App\Providers\SideMenuProvider();

new \GenieAi\App\Api\Feedback();
new \GenieAi\App\Api\Parser();

new \GenieAi\App\Api\License();
new \GenieAi\App\Api\UsageLimitStats();
new \GenieAi\App\Api\LeaseToken();

new \GenieAi\App\Services\History\Cpt();
new \GenieAi\App\Api\Store();
new \GenieAi\App\Api\History();

