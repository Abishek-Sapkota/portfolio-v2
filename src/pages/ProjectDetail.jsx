import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { getProjectBySlug } from '../data/portfolio'

export default function ProjectDetail(){ const {slug}=useParams(); const p=getProjectBySlug(slug); if(!p) return <section className="section--top"><div className="container nf"><h1>Project not found.</h1><Link className="btn" to="/projects">Back to projects</Link></div></section>
return <><PageMeta title={p.title} description={p.short_description}/><header className="detail"><div className="container"><Link to="/projects" data-cursor="back" className="link back"><ArrowLeft size={16} aria-hidden="true"/>All projects</Link><h1 className="detail__title">{p.title}</h1><div className="detail__intro grid12"><p className="lead">{p.short_description}</p><ul className="tags" aria-label="Technologies">{p.tech_stack.map(t=><li key={t.id||t.name}>{t.name}</li>)}</ul></div></div></header>
<section className="field section"><div className="container grid12 pair"><div><h2>The problem</h2><p>{p.problem}</p></div><div><h2>The response</h2><p>{p.solution}</p></div></div></section>
<section className="section notes"><div className="container"><div className="notes__row grid12"><h2>Challenges</h2><p>{p.challenges}</p></div><div className="notes__row grid12"><h2>Learnings</h2><p>{p.learnings}</p></div>{(p.live_url||p.github_url)&&<div className="actions">{p.live_url&&<a className="btn" data-cursor="go live" href={p.live_url}>View live</a>}{p.github_url&&<a className={p.live_url?'link':'btn'} data-cursor="code" href={p.github_url}>Source code</a>}</div>}</div></section></> }
