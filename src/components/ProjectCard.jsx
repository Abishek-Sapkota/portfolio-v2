import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
// One row of the work index. The heading level follows the page: an h3 under a
// section head on Home, an h2 straight under the h1 on /projects.
export default function ProjectCard({project,level=3}) { const H=`h${level}`
return <article data-cursor="show me" className="row relative"><H className="row__title"><Link className="row__link after:absolute after:inset-0" to={`/projects/${project.slug}`}>{project.title}</Link></H><p className="row__desc">{project.short_description}</p><ul className="row__tech">{project.tech_stack.slice(0,5).map((tech)=><li key={tech.id||tech.name}>{tech.name}</li>)}</ul><ArrowUpRight className="row__arrow" size={24} aria-hidden="true"/></article> }
