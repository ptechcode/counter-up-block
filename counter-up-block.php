<?php
/**
 * Plugin Name:       Counter Up Block
 * Description:       A block to count up to display a number in specific time.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            PTechCode
 * Author URI:        https://github.com/ptechcode
 * Github URI:        https://github.com/ptechcode/counter-up-block
 * License:           GPL-3.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       counter-up-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly  

function create_block_counter_up_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_counter_up_block_block_init' );
