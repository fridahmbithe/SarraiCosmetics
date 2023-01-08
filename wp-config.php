<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'sarrai_cosmetics' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'AA|Lz+PABcE>fAd+RQ[du}0eJg`+6a2-f$&olVR9M(y^ )EDr`WS3R{&JYFd+6|d' );
define( 'SECURE_AUTH_KEY',  '>mxV8Usl,oG6>B0?meV1]eSLENXA$Dym=SEarud3/{VZ=`_%ez.^M&-w)C%T)q[<' );
define( 'LOGGED_IN_KEY',    'P9ge|!1fZ^}6,wh9%}|yywdVTd5=-%E^O)Q8>6~1*r^`x#W^nZ#fe8_R@Nw%s<-n' );
define( 'NONCE_KEY',        'RH6d.e}uF(BgZB~r/68N*_:LP#/F7u4=Li/0@3;ZQpau6jvM*TKS`01{7FrB3SLh' );
define( 'AUTH_SALT',        'n6}rw!o #RS$Zv:N`}@-E6mWEl,E;`D9r{_r,MXumkvRJu!^n<8kk)2?T,cV#z~!' );
define( 'SECURE_AUTH_SALT', '-bWhlkWv)CT)L G/3Hn.Nmi$olh&31MoP&@Ka>h^z=Wt5P0v6T UY~9PIOqR/oUa' );
define( 'LOGGED_IN_SALT',   'Y8&p}nSn,4/{X2GUZ:CeT|@/7MA/eF;euh}mdW@o<<l?v/=W,z/EMo%xio.Q0P,?' );
define( 'NONCE_SALT',       'yOeB8B.]|N:y@w=2K_(h<S4(eBC*SZ]^PGwWp2490*_69Fa8s(,8yvPRV.XP4(l{' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */


define('FS_METHOD', 'direct');
define('FS_CHMOD_DIR',0755);
define('FS_CHMOD_FILE',0644);
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
