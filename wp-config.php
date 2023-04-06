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
define( 'DB_NAME', "recovery-juice" );

/** Database username */
define( 'DB_USER', "root" );

/** Database password */
define( 'DB_PASSWORD', "" );

/** Database hostname */
define( 'DB_HOST', "localhost" );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

if ( !defined('WP_CLI') ) {
    define( 'WP_SITEURL', 'http://localhost/recovery-juice/' );
    define( 'WP_HOME', 'http://localhost/recovery-juice' );
}



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
define( 'AUTH_KEY',         'GdjBLPH1VSElhsqXJGsHVGexGOkMwO91TF9pXoCTjWnAL7J36NIFxBDcrXWU6yrd' );
define( 'SECURE_AUTH_KEY',  'OdM2t82U7e8DQXXELMxAUNDUNmyV4vyWmJmaRh2PE3MuiH8t2zO4mzBEr3clShqf' );
define( 'LOGGED_IN_KEY',    'Tyzho7GoahMKS227U4vJB0RyzCdVGNDq2ObUXh2wZp9gZLLE6DBtmPcpWfedizD3' );
define( 'NONCE_KEY',        'ZJICHJa5iZRrGjkauJ3frnG5w3EuLinD6ocasddlk91B7AhY6z4nhsuvHUSSpAds' );
define( 'AUTH_SALT',        'SDoIYxJ3K7J3K5sQlAo1XrdZDQCwaQNYs7jkQDeaINTdCxHgxJIaZ9Zszm1hFFtz' );
define( 'SECURE_AUTH_SALT', 'qYehCW1pkZS9ZqvCFYnwxS8SgxYJ7Ffww1HkwNjxaYJPUyw6FIZVPrXRCT0ilWQT' );
define( 'LOGGED_IN_SALT',   'hBuygOISrsWcVXSDurSKz2TjyA9IzvmlIL9uakj8DIM0ld87adKqOmNO7LtcTr5u' );
define( 'NONCE_SALT',       'EvdXh3UIqphMc1ZDwpfSXa7svPMYiB0LviOT9UpD0a0Cs8I3GiTxm6FqwxJKqut9' );

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



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname(__FILE__) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
