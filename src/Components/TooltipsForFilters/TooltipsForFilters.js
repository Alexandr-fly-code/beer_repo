/*eslint-disable */
import React from "react";
import styles from './TooltipsForFilters.css'

const tooltipsArrInit = [
    'A glass of lager from Bitburger, a top German brewery <br />' +
    'Lager is a type of beer conditioned at low temperatures. <br />' +
    'The term "lager" may also be used as a verb to describe <br />' +
    'the cold-conditioning process that marks the style.',
    'Ale is a type of beer brewed using a warm fermentation method,<br />' +
    'resulting in a sweet, full-bodied and fruity taste.Historically,<br />' +
    'the term referred to a drink brewed without hops.',
    'Manns Brown Ale - the original modern Brown ale Brown ale is a style<br />' +
    'of beer with a dark amber or brown colour. The term was first used<br />' +
    'by London brewers in the late 17th century to describe their products,<br />' +
    'such as mild ale, though the term had a rather different meaning than it<br />' +
    'does today. 18th-century brown ales were lightly hopped and brewed<br />' +
    'from 100% brown malt.'

];

const TooltipsForFilters = ({
                                style = {},
                                fill = "#FFDA44",
                                width = "20%",
                                className = "svgIcon",
                                viewBox = "0 0 512 512",
                                tooltipId = 0,
                                dataTip = 'svgTooltip',
                                tooltipsArr = tooltipsArrInit[tooltipId],

                            }) => (

        <svg
            width={width}
            style={style}
            height={width}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svgIcon}
            xmlnsXlink="http://www.w3.org/1999/xlink"
            data-tip= {tooltipsArr}
            data-for={dataTip}


        >
            <path
                fill={fill}
                d="M409.133,109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.736,9.801,259.058,0,219.273,0   c-39.781,0-76.47,9.801-110.063,29.407c-33.595,19.604-60.192,46.201-79.8,79.796C9.801,142.8,0,179.489,0,219.267   c0,39.78,9.804,76.463,29.407,110.062c19.607,33.592,46.204,60.189,79.799,79.798c33.597,19.605,70.283,29.407,110.063,29.407   s76.47-9.802,110.065-29.407c33.593-19.602,60.189-46.206,79.795-79.798c19.603-33.596,29.403-70.284,29.403-110.062   C438.533,179.485,428.732,142.795,409.133,109.203z M255.82,356.309c0,2.662-0.862,4.853-2.573,6.563   c-1.704,1.711-3.895,2.567-6.557,2.567h-54.823c-2.664,0-4.854-0.856-6.567-2.567c-1.714-1.711-2.57-3.901-2.57-6.563v-54.823   c0-2.662,0.855-4.853,2.57-6.563c1.713-1.708,3.903-2.563,6.567-2.563h54.823c2.662,0,4.853,0.855,6.557,2.563   c1.711,1.711,2.573,3.901,2.573,6.563V356.309z M325.338,187.574c-2.382,7.043-5.044,12.804-7.994,17.275   c-2.949,4.473-7.187,9.042-12.709,13.703c-5.51,4.663-9.891,7.996-13.135,9.998c-3.23,1.995-7.898,4.713-13.982,8.135   c-6.283,3.613-11.465,8.326-15.555,14.134c-4.093,5.804-6.139,10.513-6.139,14.126c0,2.67-0.862,4.859-2.574,6.571   c-1.707,1.711-3.897,2.566-6.56,2.566h-54.82c-2.664,0-4.854-0.855-6.567-2.566c-1.715-1.712-2.568-3.901-2.568-6.571v-10.279   c0-12.752,4.993-24.701,14.987-35.832c9.994-11.136,20.986-19.368,32.979-24.698c9.13-4.186,15.604-8.47,19.41-12.847   c3.812-4.377,5.715-10.188,5.715-17.417c0-6.283-3.572-11.897-10.711-16.849c-7.139-4.947-15.27-7.421-24.409-7.421   c-9.9,0-18.082,2.285-24.555,6.855c-6.283,4.565-14.465,13.322-24.554,26.263c-1.713,2.286-4.093,3.431-7.139,3.431   c-2.284,0-4.093-0.57-5.424-1.709L121.35,145.89c-4.377-3.427-5.138-7.422-2.286-11.991   c24.366-40.542,59.672-60.813,105.922-60.813c16.563,0,32.744,3.903,48.541,11.708c15.796,7.801,28.979,18.842,39.546,33.119   c10.554,14.272,15.845,29.787,15.845,46.537C328.904,172.824,327.71,180.529,325.338,187.574z"
            />
        </svg>
);

export default TooltipsForFilters;