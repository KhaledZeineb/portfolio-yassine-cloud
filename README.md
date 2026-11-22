# Développeur Full Stack

Portfolio professionnel dédié à mes projets en développement web, conteneurisation Docker et automatisation CI/CD.

Projet généré automatiquement par le template Backstage `portfolio-nextjs-template`.

## Contenu

| Fichier | Rôle |
|---|---|
| `app/`, `data/portfolio.json` | Application Next.js (le contenu se modifie dans `data/portfolio.json`) |
| `Dockerfile`, `.dockerignore` | Conteneurisation multi-étapes |
| `docker-compose.yml` | Déploiement local sur http://localhost:3000 |
| `.github/workflows/ci-cd.yml` | Build, push Docker Hub, déploiement local, health check |
| `catalog-info.yaml` | Métadonnées du composant dans le catalogue Backstage |

## Pipeline

```
Modification du code -> Build -> Image Docker -> Docker Hub -> Déploiement local -> Validation
```

Image : `zeinebkhaled/portfolio-yassine-cloud:<version>`

## Nouvelle version

Depuis Backstage, lancer le template **Publier une nouvelle version du Portfolio**
(ou pousser sur `main` : le pipeline se déclenche automatiquement).

## Vérification

```
http://localhost:3000
http://localhost:3000/api/health
```
