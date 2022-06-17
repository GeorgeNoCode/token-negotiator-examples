
//	Dependencies
import React from 'react';

// Styles
import styles from "./logo.module.scss";


//
//	TokenScript / UI / Components / Logo
//


const Logo = () => {
	return (
		<div className={ styles[ 'c-logo' ] }>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211 40">
				<g fill="none">
					<path fill="#000" d="M31.155 14.016V8.944h-4.348v15.803h2.739v2.628h-8.62v-2.628h2.685V8.944h-4.349v5.072h-2.598v-7.69h17.089v7.69zm18.621 6.039a7.663 7.663 0 0 1-1.022 3.942 7.606 7.606 0 0 1-6.685 3.845 7.81 7.81 0 0 1-3.979-1.032 7.301 7.301 0 0 1-2.761-2.813 7.858 7.858 0 0 1-.99-3.91 7.988 7.988 0 0 1 .99-3.997 7.041 7.041 0 0 1 2.74-2.758 8.006 8.006 0 0 1 4-1 7.615 7.615 0 0 1 6.696 3.889 7.664 7.664 0 0 1 1.01 3.834zm-7.707 4.941a4.405 4.405 0 0 0 2.37-.662 4.693 4.693 0 0 0 1.674-1.803 5.21 5.21 0 0 0 .597-2.476 5.08 5.08 0 0 0-.597-2.444 4.91 4.91 0 0 0-1.674-1.825 4.35 4.35 0 0 0-2.392-.695 4.351 4.351 0 0 0-2.37.684 4.629 4.629 0 0 0-1.685 1.825 5.177 5.177 0 0 0 0 4.91 4.61 4.61 0 0 0 1.707 1.824c.71.441 1.533.671 2.37.662zm20.197-9.905H59.94v-2.4h8.142v2.4H65.81l-5.49 4.562 5.186 5.148h2.576v2.574h-3.816l-7.36-7.407V24.8h2.49v2.574h-8.011V24.8h2.63V8.868h-2.63V6.326h5.522v13.327zm22.883 5.648H72.832a5.135 5.135 0 0 0 1.642 3.323 4.807 4.807 0 0 0 3.348 1.228 6.138 6.138 0 0 0 2.707-.598 5.273 5.273 0 0 0 2.076-1.846l2.544 1.086a7.696 7.696 0 0 1-3.153 2.835 9.408 9.408 0 0 1-4.24.955 8.802 8.802 0 0 1-4.228-.988 7.181 7.181 0 0 1-2.87-2.77 8.321 8.321 0 0 1 0-7.971 7.247 7.247 0 0 1 2.772-2.78 8.255 8.255 0 0 1 7.936 0 7.175 7.175 0 0 1 2.717 2.932 10.329 10.329 0 0 1 1.066 4.594zm-7.784-6.071a4.22 4.22 0 0 0-2.87 1.086 5.083 5.083 0 0 0-1.576 2.9h9.197a5.148 5.148 0 0 0-1.718-2.9 4.635 4.635 0 0 0-3.033-1.054v-.032zm23.969 2.812v7.3h2.457v2.573h-5.36v-9.699a3.775 3.775 0 0 0-.39-1.976 1.464 1.464 0 0 0-1.305-.609 7.33 7.33 0 0 0-4.348 1.901v7.81h2.533v2.573h-7.979V24.78h2.587v-9.47h-2.587v-2.586h5.435v1.782a8.7 8.7 0 0 1 5.077-1.977 3.482 3.482 0 0 1 2.913 1.216 6.176 6.176 0 0 1 .967 3.737zm15.904-9.84V6.197h2.577v6.386h-2.577v-1.455a5.084 5.084 0 0 0-4.468-2.455 4.352 4.352 0 0 0-2.663.695 2.394 2.394 0 0 0-.924 2.01 2.264 2.264 0 0 0 .88 1.922c.814.53 1.722.898 2.675 1.086l2.478.663a9.505 9.505 0 0 1 3.63 1.661 4.866 4.866 0 0 1 1.643 2.173c.27.834.403 1.707.39 2.585a5.917 5.917 0 0 1-1.793 4.54 6.733 6.733 0 0 1-4.794 1.672 7.614 7.614 0 0 1-5.218-2.096v1.748h-2.706v-7.667h2.63v1.857c1.29 2.375 2.95 3.562 4.979 3.562 1 .063 1.986-.264 2.75-.912a3.381 3.381 0 0 0 .978-2.585c0-1.499-1.087-2.552-3.185-3.139l-2.63-.738a9.439 9.439 0 0 1-4.196-2.173 5.001 5.001 0 0 1-1.348-3.649 5.596 5.596 0 0 1 1.641-4.344 6.385 6.385 0 0 1 4.533-1.532 7.614 7.614 0 0 1 4.718 1.63zm17.012 6.115V12.67h2.555v5.56h-2.576a3.35 3.35 0 0 0-1.283-2.454 4.24 4.24 0 0 0-2.587-.836 4.004 4.004 0 0 0-2.261.663 4.53 4.53 0 0 0-1.544 1.824 5.79 5.79 0 0 0-.543 2.498 5.644 5.644 0 0 0 1.228 3.758 4.03 4.03 0 0 0 3.261 1.466 4.492 4.492 0 0 0 4.348-2.889l2.402 1.14a7.07 7.07 0 0 1-6.935 4.345 7.43 7.43 0 0 1-3.902-1.032 7.115 7.115 0 0 1-2.63-2.834 8.679 8.679 0 0 1-.936-3.997 8.132 8.132 0 0 1 .946-3.91 6.89 6.89 0 0 1 2.598-2.748 6.985 6.985 0 0 1 3.674-.988 6.178 6.178 0 0 1 4.186 1.52zm10.164 7.722v3.324h3.262v2.574h-9.023V24.8h2.946v-9.493h-2.946v-2.585h5.24v3.324a5.69 5.69 0 0 1 2.174-2.737 7.32 7.32 0 0 1 3.74-.782h.651v2.922h-.608a7.616 7.616 0 0 0-3.49.619 2.956 2.956 0 0 0-1.522 1.857 13.103 13.103 0 0 0-.424 3.551zm14.697 3.323v2.575h-7.425V24.8h2.294v-9.493h-2.294v-2.585h5.197v12.11l2.228-.032zm-2.065-17.05a1.66 1.66 0 0 1-.522 1.226 1.653 1.653 0 0 1-1.228.522 1.633 1.633 0 0 1-1.218-.522 1.688 1.688 0 0 1-.5-1.227 1.672 1.672 0 0 1 .5-1.227A1.632 1.632 0 0 1 155.296 6a1.709 1.709 0 0 1 1.75 1.748zm20.947 12.359a8.003 8.003 0 0 1-.967 3.888 7.29 7.29 0 0 1-2.588 2.824 6.764 6.764 0 0 1-3.641 1.032 7.005 7.005 0 0 1-5.163-2.26v5.833h2.869V34h-8.425v-2.617h2.664V15.308h-2.457v-2.585h5.36v2.346a7.409 7.409 0 0 1 2.402-1.911 6.394 6.394 0 0 1 2.815-.63 6.798 6.798 0 0 1 3.707 1.032 7.052 7.052 0 0 1 2.522 2.77 8.222 8.222 0 0 1 .902 3.779zm-7.229 5.061a3.643 3.643 0 0 0 2.174-.695 4.717 4.717 0 0 0 1.511-1.9 6.01 6.01 0 0 0 .544-2.542 5.236 5.236 0 0 0-.598-2.498 4.675 4.675 0 0 0-1.652-1.814 4.22 4.22 0 0 0-2.36-.684 4.35 4.35 0 0 0-2.467.728 4.915 4.915 0 0 0-1.685 1.9 5.703 5.703 0 0 0-.609 2.618 4.574 4.574 0 0 0 1.457 3.584 5.298 5.298 0 0 0 3.685 1.303zm16.752-12.48v2.618h-2.686v7.7a2.983 2.983 0 0 0 .261 1.554 1.015 1.015 0 0 0 .88.358 4.755 4.755 0 0 0 1.545-.26v2.595a8.169 8.169 0 0 1-2.175.391 3.264 3.264 0 0 1-2.62-.912 4.786 4.786 0 0 1-.793-3.139v-8.287h-1.924v-2.585h1.924v-2.172l2.892-2.639v4.855l2.696-.076z"/>
					<path fill="#0019FF" d="M210.474 6.283h-3.185v21.06h3.185z"/>
					<path fill="#000" d="M204.256 18.089v1.77l-10.534 5.43v-2.747l7.197-3.54-7.197-3.53v-2.76zM0 19.816v-1.77l10.544-5.431v2.759l-7.207 3.53 7.207 3.54v2.748z"/>
				</g>
			</svg>
		</div>
	);
}

export default Logo;