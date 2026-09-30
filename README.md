# WRONYX

WRONYX is a responsive digital innovation and AI product engineering website built with Next.js. It presents the company’s services, industry expertise, selected work, careers, project inquiry flow, client dashboard concept, and a knowledge-grounded website assistant.

**Live website:** [wronyx.netlify.app](https://wronyx.netlify.app/)  
**Repository:** [github.com/wareeshayy/wronyx](https://github.com/wareeshayy/wronyx)

## Highlights

- Dark, responsive WRONYX design system with branded blue gradients
- Service, work, industry, about, and careers experiences
- Dedicated Senior AI Engineer job page and application form
- Project brief/contact workflow
- Knowledge-grounded WRONYX chatbot
- MongoDB-backed lead and job application persistence
- Client dashboard interface
- Static hero intelligence visual and custom WRONYX favicon set
- Next.js API routes deployed through the Netlify Next.js runtime

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| UI | React 18, JavaScript, JSX |
| Styling | Global CSS, Tailwind CSS, PostCSS, Autoprefixer |
| Icons | Lucide React |
| Database | MongoDB with Mongoose |
| Server | Next.js Route Handlers |
| Hosting | Netlify |

## Main Routes

| Route | Purpose |
| --- | --- |
| `/` | Main landing page |
| `/about` | Company overview |
| `/services` | Services and capabilities |
| `/industries` | Industries WRONYX supports |
| `/work` | Work and delivery experience |
| `/careers` | Careers and open positions |
| `/careers/senior-ai-engineer` | Senior AI Engineer details and application |
| `/dashboard` | Client dashboard interface |

## API Routes

| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/api/contact` | `POST` | Submit a project brief or business inquiry |
| `/api/applications` | `POST` | Submit a job application and résumé metadata |
| `/api/chat` | `POST` | Query the WRONYX knowledge assistant |
| `/api/playground` | `POST` | Support the interactive AI playground |

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm
- MongoDB locally or a MongoDB Atlas connection string

### Installation

```bash
git clone https://github.com/wareeshayy/wronyx.git
cd wronyx
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Update `.env.local` with your own database connection, then start the development server:

```bash
npm run dev
```

Open [http://localhost:3006](http://localhost:3006).

## Environment Variables

| Variable | Required | Description |
| --- | --- | --- |
| `MONGODB_URI` | Recommended | MongoDB connection string used for project leads and job applications |

When `MONGODB_URI` is unavailable, the application handlers include a temporary in-memory fallback for local development. In-memory data is not persistent and should not be used for production.

Never commit `.env`, `.env.local`, credentials, private keys, or production secrets. Environment files are already excluded through `.gitignore`.

## Available Scripts

```bash
npm run dev     # Start the development server on port 3006
npm run build   # Create an optimized production build
npm run start   # Run the production server on port 3006
npm run lint    # Run the Next.js lint command
```

## Project Structure

```text
app/                  Next.js pages, global styles, and API routes
components/           Reusable UI and interactive components
lib/                  Database connection and chatbot knowledge data
models/               Mongoose schemas
public/assets/         Logos, favicons, and website imagery
netlify.toml           Netlify build and Next.js runtime configuration
```

## Production Build

Before opening a pull request or deploying changes, run:

```bash
npm run build
```

The build should complete successfully for all static pages and dynamic API routes.

## Deployment

The repository is configured for Netlify in [`netlify.toml`](./netlify.toml):

- Build command: `npm run build`
- Publish directory: `.next`
- Node.js version: `20`
- Runtime plugin: `@netlify/plugin-nextjs`

To deploy from GitHub:

1. Connect the repository to Netlify.
2. Set the production branch to `main`.
3. Add `MONGODB_URI` under **Site configuration → Environment variables**.
4. Trigger a production deploy.

Pushing a new commit to `main` triggers the connected Netlify production build.

## Security and Repository Hygiene

- `node_modules/`, `.next/`, environment files, logs, and local design references are ignored.
- Do not place secrets directly in source files.
- Use Netlify environment variables for production credentials.
- Résumé binary contents are not stored by the current application route; only uploaded file metadata is recorded.

## License

This project is proprietary. All rights reserved by WRONYX.

