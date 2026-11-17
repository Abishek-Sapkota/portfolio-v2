import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import ProjectCard from '../components/ProjectCard'
import { featuredProjects, profile } from '../data/portfolio'

const practice=['Django / DRF','PostgreSQL / Redis','JavaScript / React','AWS delivery']
const method=['Clear models.','Small feedback loops.','Quality you can observe.']

export default function Home(){
  const projects=featuredProjects
  return <><PageMeta title="Software Engineer" description={profile.tagline}/>
  <section className="sheet bleed" style={{'--from':6}}>
    <div className="bleed__field" aria-hidden="true"/>
    <div className="container">
      <h1 className="sheet__head overprint" data-text={profile.name}>{profile.name}</h1>
      <div className="sheet__foot grid12">
        <div className="sheet__copy">
          <p className="lead">{profile.tagline}</p>
          <div className="actions"><Link data-cursor="let's see" className="btn" to="/projects">View work</Link><Link data-cursor="yay" className="link" to="/contact">Start a conversation</Link></div>
        </div>
        <p className="sheet__figure"><span className="sheet__role">{profile.title}</span><b>{profile.years_of_experience}+</b><span>years in production</span></p>
      </div>
    </div>
  </section>
  <section className="section" aria-labelledby="work-head"><div className="container"><div className="head-split"><h2 id="work-head">Selected work</h2><Link to="/projects" data-cursor="more" className="link">All projects</Link></div><ol className="index">{projects.slice(0,4).map(p=><li key={p.slug}><ProjectCard project={p}/></li>)}</ol></div></section>
  <section className="field field--mark section--tight"><div className="container grid12 practice"><h2>Core practice</h2><ul className="practice__list">{practice.map(item=><li key={item}>{item}</li>)}</ul></div></section>
  <section className="section"><div className="container grid12"><div className="method__head"><h2>How I work</h2><p className="lead">I like to work end to end. First I learn how people actually do the job, then I model the domain, put a stable API in front of it and build the screens on top.</p><div className="actions"><Link to="/about" data-cursor="who" className="link">More about me</Link>{profile.resume&&<a href={profile.resume} data-cursor="grab it" className="link">Resume</a>}</div></div><ol className="method__rows">{method.map(line=><li key={line}>{line}</li>)}</ol></div></section></> }
