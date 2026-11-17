import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Logo from './Logo'

const links = [['About','/about','who'],['Projects','/projects','peek'],['Contact','/contact','talk']]
export default function Navbar() {
  const [open,setOpen] = useState(false); const { theme,toggleTheme } = useTheme()
  const nextTheme = theme==='dark'?'light':'dark'
  return <header className="masthead container"><nav className="nav" aria-label="Primary navigation"><Logo />
    <div className="nav__links">{links.map(([label,to,word])=><NavLink key={to} to={to} data-cursor={word} className="nav__link">{label}</NavLink>)}<Link to="/contact" data-cursor="yay" className="btn btn--accent nav__cta">Connect</Link><button type="button" onClick={toggleTheme} data-cursor={nextTheme} className="icon-btn" aria-label={`Switch to ${nextTheme} theme`}>{theme==='dark'?<Sun size={20}/>:<Moon size={20}/>}</button></div>
    <button type="button" className="icon-btn nav__menu-btn" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open?<X size={24}/>:<Menu size={24}/>}</button>
    {open&&<div className="nav__drawer">{links.map(([label,to,word])=><NavLink onClick={()=>setOpen(false)} key={to} to={to} data-cursor={word} className="nav__link">{label}</NavLink>)}<button type="button" onClick={toggleTheme} data-cursor={nextTheme} className="btn">Switch to {nextTheme} theme</button></div>}</nav></header>
}
