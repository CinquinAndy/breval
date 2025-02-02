import React, { useRef, useState } from 'react'

export function SocialIcons() {
	return (
		<div className="absolute bottom-0 right-0 z-20 mb-14 flex flex-col items-center justify-evenly gap-8 p-4 xl:mb-0 xl:gap-10 xl:p-20">
			{/* todo changer reséaux sociaux */}

			{/* FACEBOOK */}

			{/*<a className='text-slate-300 hover:text-slate-50'*/}
			{/*   href='https://www.facebook.com/Cinquin.Andy.Developpeur.Freelance' rel='noopener nofollow noreferrer'*/}
			{/*   target='_blank'>*/}
			{/*  <svg className='w-6 h-6 xl:w-8 xl:h-8' viewBox='0 0 24 24' fill='currentColor'>*/}
			{/*    <path*/}
			{/*      d='m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z'></path>*/}
			{/*  </svg>*/}
			{/*</a>*/}

			{/* todo changer reséaux sociaux */}

			{/* INSTAGRAM */}

			{/*<a className='text-slate-300 hover:text-slate-50' href='https://www.instagram.com/cinquin.andy/'*/}
			{/*   rel='noopener nofollow noreferrer' target='_blank'>*/}
			{/*  <svg className='w-6 h-6 xl:w-8 xl:h-8' viewBox='0 0 24 24' fill='currentColor'>*/}
			{/*    <path*/}
			{/*      d='m12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c.001 2.208-1.788 3.997-3.997 3.997z'></path>*/}
			{/*    <path*/}
			{/*      d='m16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941-2.308 2.308-2.013 5.418-2.013 9.979 0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z'></path>*/}
			{/*    <circle cx='18.406' cy='5.595' r='1.439'></circle>*/}
			{/*  </svg>*/}
			{/*</a>*/}

			<a
				className="text-slate-300 hover:text-slate-50"
				href="https://www.linkedin.com/in/breval-lefloch/"
				rel="noopener nofollow noreferrer"
				target="_blank"
				aria-label="Linkedin"
			>
				<svg
					className="h-6 w-6 xl:h-8 xl:w-8"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"></path>
					<path d="m.396 7.977h4.976v16.023h-4.976z"></path>
					<path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"></path>
				</svg>
			</a>

			<a
				className="text-slate-300 hover:text-slate-50"
				href="https://github.com/LightInn"
				rel="noopener nofollow noreferrer"
				target="_blank"
				aria-label="Github"
			>
				<svg
					className="h-6 w-6 xl:h-8 xl:w-8"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path d="m12.29 21.499c3.73 0 8.94.09 10.835-3.701.715-1.449.875-3.122.875-4.7h-.001c0-2.073-.575-4.047-1.95-5.651.255-.766.385-1.573.385-2.385 0-1.064-.24-1.598-.73-2.563-2.24 0-3.69.42-5.39 1.742-1.31-.311-2.67-.455-4.02-.455-1.495 0-2.986.154-4.435.495-1.725-1.336-3.175-1.781-5.44-1.781-.484.965-.729 1.499-.729 2.563 0 .811.125 1.632.385 2.414-1.38 1.589-2.075 3.548-2.075 5.621 0 1.578.281 3.266 1.01 4.701 1.97 3.835 7.49 3.7 11.28 3.7zm-5.289-9.99c.95 0 1.865.168 2.8.297 3.418.52 5.215-.297 7.31-.297 2.339 0 3.675 1.915 3.675 4.087 0 4.349-4.015 5.012-7.53 5.012h-2.41c-3.5 0-7.52-.667-7.52-5.012 0-2.172 1.334-4.087 3.675-4.087z"></path>
					<path d="m16.655 18.323c1.29 0 1.835-1.692 1.835-2.727s-.545-2.727-1.835-2.727-1.835 1.692-1.835 2.727.545 2.727 1.835 2.727z"></path>
					<path d="m7.47 18.323c1.29 0 1.835-1.692 1.835-2.727s-.546-2.726-1.835-2.726-1.835 1.692-1.835 2.727.545 2.726 1.835 2.726z"></path>
				</svg>
			</a>
		</div>
	)
}
