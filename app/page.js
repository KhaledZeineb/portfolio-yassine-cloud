import data from '../data/portfolio.json';

export default function Home() {
  return (
    <main className="container">
      <header className="hero">
        <h1>{data.fullName}</h1>
        <p className="tagline">{data.tagline}</p>
      </header>

      <section>
        <h2>À propos</h2>
        <p>{data.about}</p>
      </section>

      <section>
        <h2>Compétences</h2>
        <ul className="tags">
          {data.skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Projets</h2>
        <div className="grid">
          {data.projects.map((p) => (
            <article className="card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <a href={'mailto:' + data.email}>{data.email}</a>
        <span> · version {process.env.APP_VERSION || 'dev'}</span>
      </footer>
    </main>
  );
}
