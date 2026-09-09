import { Helmet } from 'react-helmet-async'
export default function PageMeta({title,description}){ return <Helmet><title>{title} — Abishek Sapkota</title><meta name="description" content={description}/><meta property="og:title" content={`${title} — Abishek Sapkota`}/><meta property="og:description" content={description}/></Helmet> }
