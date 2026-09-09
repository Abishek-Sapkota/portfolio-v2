import { Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function Logo() { return <Link to="/" data-cursor="home" className="flex items-center gap-1.5 font-display text-lg font-semibold tracking-[-.05em]" aria-label="Abishek Sapkota home"><Terminal size={18} strokeWidth={2.25}/>AS<span className="text-accent">.</span></Link> }
