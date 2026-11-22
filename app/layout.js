import './globals.css';

export const metadata = {
  title: 'Développeur Full Stack',
  description: 'Portfolio professionnel dédié à mes projets en développement web, conteneurisation Docker et automatisation CI/CD.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
