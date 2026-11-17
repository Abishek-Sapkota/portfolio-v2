import { useState } from 'react'
import PageMeta from '../components/PageMeta'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/portfolio'

// The project list is a static import, so the filter options are computed once.
const techs=['All',...new Set(projects.flatMap(p=>p.tech_stack.map(t=>t.name)))]
export default function Projects(){ const [filter,setFilter]=useState('All'); const shown=filter==='All'?projects:projects.filter(p=>p.tech_stack.some(t=>t.name===filter))
return <><PageMeta title="Projects" description="Selected Django and React product engineering case studies."/><section className="projects-head"><div className="container"><div className="page-head"><h1>Case studies</h1><p className="lead">Backend work I’ve built and shipped: a retrieval-augmented tutor, multi-tenant delivery, school report cards, ride matching and a real-time student forum.</p></div><div className="filter" role="group" aria-label="Filter projects by technology">{techs.map(tech=><button type="button" key={tech} onClick={()=>setFilter(tech)} aria-pressed={filter===tech} data-cursor="sort" className="chip">{tech}</button>)}</div><p className="count" aria-live="polite">{`${shown.length} project${shown.length===1?'':'s'} in view`}</p></div></section><section className="projects-list" aria-label="Projects"><div className="container"><ol className="index">{shown.map(p=><li key={p.slug}><ProjectCard project={p} level={2}/></li>)}</ol></div></section></> }
