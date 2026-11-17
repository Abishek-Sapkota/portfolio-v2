import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
export default function NotFound(){return <section className="section--top"><PageMeta title="Page not found" description="The requested page does not exist."/><div className="container nf"><p className="nf__code" aria-hidden="true">404</p><h1>Wrong turn.</h1><p>This route doesn’t lead anywhere yet.</p><Link className="btn" to="/">Back home</Link></div></section>}
