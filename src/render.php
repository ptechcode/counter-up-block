<?php  //vardump($attributes); 
//var_dump( $content );  var_dump( $block );?>



<?php $args = ''; ?>
<?php $args .= ( isset( $attributes['textAlign'] ) && $attributes['textAlign'] !='' ) ? ' p-text-align-' . $attributes['textAlign'] : ''; ?>

<?php $style = ''; ?>
<?php $style .= ( isset( $attributes['distance'] ) ) ? ' gap:' . $attributes['distance'] . 'px;' : ''; ?>



<?php $wrapper_attributes = get_block_wrapper_attributes(	array( 'class' => $args, 'style' => $style )	); ?>

<?php $datatarget = ( isset( $attributes['displayNumber'] ) ) ? $attributes['displayNumber'] : ''; ?>
<?php $atext = ( isset( $attributes['atext'] ) ) ? $attributes['atext'] : ''; ?>
<?php $btext = ( isset( $attributes['btext'] ) ) ? $attributes['btext'] : ''; ?>
<?php $text = ( isset( $attributes['text'] ) ) ? $attributes['text'] : ''; ?>
<?php $showComma = ( ( $attributes['showComma'] ) ) ? 'yesComma' : 'noComma'; // From ToggleControl 1 or '' boolean from gettype ?>
<?php $speed = ( isset( $attributes['speed'] ) ) ? $attributes['speed'] : ''; ?>


<div <?php echo $wrapper_attributes; ?>>
	
      <div class="count">
            <span><?php echo $btext; ?></span><span class="counter" data-speed="<?php echo $speed;?>" data-comma ="<?php echo $showComma;?>" data-target="<?php echo $datatarget; ?>"></span><span><?php echo $atext; ?></span>
      </div>
     
      <?php echo $content;?>
      

</div>

