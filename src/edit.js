import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	AlignmentControl,
	BlockControls,
	InspectorControls,
	RichText,
	InnerBlocks,
} from '@wordpress/block-editor';

import { 
	PanelBody, 
	TextControl,
	__experimentalNumberControl as NumberControl,
	ToggleControl,
	RangeControl
} from '@wordpress/components';

import { useState, useEffect } from '@wordpress/element';

import './editor.scss';


export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { textAlign, atext, btext, displayNumber, showComma, distance, text, speed } = attributes;
	const blockProps = useBlockProps( {
		className: textAlign ? 'p-text-align-' + textAlign : '',
	} );

	const blockname = 'wp-block-create-block-counter-up-block';
	const options = {  maximumFractionDigits: 2   }   

	const [u_displayNumber, setu_displayNumber] = useState(displayNumber)

	const ALLOWED_BLOCKS = [ 'core/heading', 'core/paragraph' ];

	const TEMPLATE = [
		[
			'core/paragraph',
			{
				content: 'Counter Text'	
			}			
		]
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'General', 'engc-block' ) }>
					<TextControl
						label={ __( 'Before Number', 'engc-block' ) }
						value={ btext }
						onChange={ (newval) => setAttributes({btext: newval}) }					
					/>
					<TextControl
						label={ __( 'After Number', 'engc-block' ) }
						value={ atext }
						onChange={ (newval) => setAttributes({atext: newval}) }						
					/>

					<NumberControl
						label={ __( 'Final Number', 'engc-block' ) }
						isShiftStepEnabled={ true }
						onChange={  (newval)=> {
							setAttributes( { displayNumber: parseInt(newval) } );
							
						//	const newnumber = newval
							setu_displayNumber((newval))
						} }
						min={ 0 }
						//max={ 9999 }
						shiftStep={ 10 }
						value={ displayNumber }
					/>

				

					<NumberControl
						label={ __( 'Speed in ms', 'engc-block' ) }
						isShiftStepEnabled={ true }
						onChange={  (newval)=> {
							setAttributes( { speed: parseInt(newval) } );				
						} }
						min={ 0 }
						//max={ 9999 }
						shiftStep={ 10 }
						value={ speed }
					/>

					
					
					<RangeControl
						label={ __( 'Distance between texts(px)', 'engc-block' ) }
						value={ distance }
						min={ 0 }
						max={ 1000 }
						step={ 1 }
						onChange={ ( newval )=> { setAttributes({ distance: newval }) }  }
					/>
				
					<ToggleControl						
						checked={ showComma }
						help={
							showComma
								? __( 'Show ","', 'engc-block' )
								: __( 'Not Show ","', 'engc-block' )
						}
						onChange={ ( newval ) => {
							
							props.setAttributes( { showComma: newval } );
						} }
					/>

				</PanelBody>
			</InspectorControls>
			<BlockControls group="block">
				<AlignmentControl
					value={ textAlign }
					onChange={ ( nextAlign ) => {
						setAttributes( { textAlign: nextAlign } );
					} }
				/>
			</BlockControls>
	

			<div
				{ ...useBlockProps( {
					className: `p-text-align-${ textAlign }`,
					style: {
						gap: distance + 'px'
					}
				} ) }
			>
				<div className='count'>
					<span>{ btext }</span>
					<span>{ showComma ? Intl.NumberFormat("en-US",options).format(u_displayNumber) : u_displayNumber  }</span>
					<span>{ atext }</span>
				</div>
			
				<InnerBlocks
						allowedBlocks={ ALLOWED_BLOCKS }
						template={ TEMPLATE }
						orientation="vertical"
						// templateLock="insert" // insert //all
					>					
				</InnerBlocks>

			</div>
		</>
	);
}

