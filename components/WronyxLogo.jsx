'use client';
import React from 'react';
export default function WronyxLogo({size='md',showText=true,className=''}){
 const heights={sm:34,md:48,lg:82,xl:120};const height=heights[size]||48;
 const src=showText?'/assets/wronyx_logo_new.png':'/assets/wronyx_emblem_new.png';
 return <span className={`wronyx-image-logo ${className}`} style={{height:`${height}px`}}><img src={src} alt="WRONYX — Innovate. Connect. Lead." /></span>;
}
