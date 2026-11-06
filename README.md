# Dibyendu Chatterjee ("DC") — Personal Portfolio & Engineering Command Center

> **AWS Student Builder Challenge Submission**  
> *1x MLH Hackathon Winner • Oracle & Gemini Certified • Agentic AI Workflows*

![AWS Amplify](https://img.shields.io/badge/Deployed%20on-AWS%20Amplify-FF9900?logo=awsamplify&logoColor=white)
![React 18](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

A high-velocity, cyber-glass personal portfolio and developer command center built for Dibyendu Chatterjee ("DC"). Designed from the ground up to showcase production builds, hackathon wins, AI certifications, and high-leverage agentic coding workflows.

---

## ⚡ The Creative Feature: "DC-OS Terminal"

The centerpiece interactive experience of this portfolio is **DC-OS Terminal**, an in-browser cyber command line interface designed for engineers, hackathon judges, and builders who prefer terminal ergonomics over standard mouse clicks.

### Key Capabilities:
- **Instant Activation**: Toggle anywhere using the global backtick key (<kbd>`</kbd> or <kbd>~</kbd>), the header badge, the hero hint bar, or the floating pulsing launch button.
- **Full Shell Ergonomics**:
  - Command history navigation with `Up` and `Down` arrow keys.
  - Tab autocomplete for all registered commands.
  - Scanline retro-CRT phosphor overlay effect.
  - Responsive mobile drawer support with one-tap directive shortcuts.
- **Live Interface Reskinning**:
  - `theme neon` — Shifts the entire site to high-voltage electric violet and hot pink.
  - `theme pastel` — Shifts to soothing cyber-slate and lavender glass.
  - `theme dark` — Restores the deep navy cyberpunk dark aesthetic.
- **Commands Catalog**:
  - `help` — Prints the command reference manual.
  - `about` — Biographical narrative, education, and credentials.
  - `skills` — Full technical stack grouped with superpower markers.
  - `projects` — Shipped builds catalog.
  - `open <project>` — Opens the project's repository or live deployment directly.
  - `certs` — Verified Oracle, Google, Microsoft, and McKinsey certifications.
  - `badges` — Honors, Arcade Legend status, and ambassadorial roles.
  - `experience` — Career timeline and leadership milestones.
  - `contact` — Direct channels, social links, and email dispatch.
  - `superpower` — Witty, transparent breakdown of DC’s core edge: shipping hackathon projects 5x faster using agentic AI loops.
  - `secret` — Triggers an interactive confetti explosion celebrating the Arcade Legend & MLH Winner tier.
  - `clear` — Wipes the terminal screen buffer.

---

## 🏗️ Architecture & Sections

1. **Hero**: Typewriter title animation, real-time stat strip (1x MLH Winner, 6+ Certifications, 2 Ambassador Roles, 100% Cloud Deploy), direct project CTAs, and ambient glow fields.
2. **About Me**: Engineering story, B.Tech CSE education card (JIS College of Engineering 2024), leadership timeline (Google Student Ambassador, Campus Ambassador at eDC IIT Delhi, McKinsey Forward Alumni), and recognition badges.
3. **Skills / Tech Superpowers**: Multi-category filterable arsenal (AI & Agentic Systems, Languages, Web, Data, Design & Tools) with animated superpower badges.
4. **Certifications**: Card grid with verification indicators covering Oracle Certified Generative AI Professional, Gemini Certified University Student, Microsoft/LinkedIn Generative AI, Deloitte Australia, and McKinsey Forward.
5. **Projects**: Card grid featuring ZeroHour, NeuralQuery, envguard, agentshield, Fieldnotes, and the featured MLH Hackathon Winning Project ribbon.
6. **Contact**: Instant mailto dispatcher, one-click copy email button with feedback tooltip, and social media channels.
7. **Footer**: AWS Amplify badge, architecture notes, and keyboard shortcuts.

---

## ☁️ AWS Services Used

This web application leverages modern AWS cloud-native hosting for performance, low latency, and continuous deployment:

| AWS Service | Architecture Role | Benefit |
| :--- | :--- | :--- |
| **AWS Amplify Hosting** | CI/CD Git integration and managed static website hosting | Automatic atomic builds upon `git push` to `main`, preview branches, and zero-downtime rollouts. |
| **Amazon CloudFront** | Global Content Delivery Network (CDN) behind Amplify | Caches static assets (HTML, CSS, JS, SVG) across 600+ edge points of presence with TLS 1.3. |
| **Amazon S3** | Durable object storage backend behind Amplify | Stores versioned production build artifacts (`dist/`) with 99.999999999% durability. |

### Continuous Deployment Configuration (`amplify.yml`)
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Amplify SPA Rewrite Rule
For Single Page Applications (SPA), client-side routing rewrites are configured under **Amplify Console > App Settings > Rewrites and redirects**:
- **Source**: `</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json|webp)$)([^.]+$)/>`
- **Target**: `/index.html`
- **Type**: `200 (Rewrite)`

---

## 🚀 Running Locally

### Prerequisites
- Node.js 18+ (tested on Node v22.17.0)
- npm or pnpm

### Quickstart
```bash
# 1. Clone repository
git clone https://github.com/dibyendu-coder/My-portfolio.git
cd My-portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 🛠️ Step-by-Step Deployment Guide (AWS Amplify Console)

Follow these exact steps to connect and host this portfolio live on AWS Amplify:

1. **Log in to AWS Console**:
   - Open [AWS Management Console](https://console.aws.amazon.com/).
   - Ensure you are in your preferred region (e.g. `us-east-1` or `ap-south-1`).

2. **Navigate to AWS Amplify**:
   - In the top search bar, type **Amplify** and select **AWS Amplify**.

3. **Create New App**:
   - Click **Deploy an app** or **Create new app**.
   - Select **GitHub** under *Deploy your app with Git* and click **Next**.
   - Authorize AWS Amplify to access your GitHub repositories.

4. **Select Repository & Branch**:
   - Repository: `dibyendu-coder/My-portfolio`
   - Branch: `main`
   - Click **Next**.

5. **Configure Build Settings**:
   - Amplify will automatically detect the `amplify.yml` present in the repository root.
   - Leave the build settings as default (it reads `npm ci` and `npm run build` targeting `dist`).
   - Click **Next**.

6. **Review and Save & Deploy**:
   - Review your app details and click **Save and deploy**.
   - Amplify Provision, Build, and Deploy phases will complete in ~90 seconds.

7. **Verify SPA Rewrites**:
   - In the Amplify Console sidebar, navigate to **Rewrites and redirects**.
   - Verify that rule `</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json|webp)$)([^.]+$)/>` routes to `/index.html` with status `200`.

8. **Access Live Site**:
   - Amplify will assign a live URL: `https://main.<unique-id>.amplifyapp.com`.
   - Your site is now globally live, cached on CloudFront, and automated on every future `git push`!

---

## 💡 Challenges & Learnings

1. **Strict Type Safety & Peer Dependency Resolutions**:
   - *Challenge*: Balancing bleeding-edge Vite 5/6 builds alongside strict TypeScript 5.7 flags (`noUnusedLocals`, `noUnusedParameters`).
   - *Solution*: Designed clean component boundaries with explicit interface models (`src/types/index.ts`) and centralized copy (`src/data/content.ts`).

2. **Terminal Overlay Ergonomics**:
   - *Challenge*: Building a keyboard-accessible terminal overlay that provides full autocomplete, command history, and dynamic live re-theming without conflicting with native browser inputs or scrolling.
   - *Solution*: Implemented global key listeners with element tag inspection, focus-trapping refs, and dynamic root CSS variable manipulations via `document.documentElement.setAttribute('data-theme', theme)`.

3. **High-Velocity Deadline Delivery**:
   - *Challenge*: Tight competition timelines for the AWS Student Builder Challenge requiring an immediate production deploy before deep polishing.
   - *Solution*: Adhered to an agentic coding strategy: scaffold deterministic boilerplate, build robust static build outputs, link Git remotes, and automate CI/CD pipeline triggers.

---

## 👤 Author

**Dibyendu Chatterjee ("DC")**  
- **GitHub**: [@dibyendu-coder](https://github.com/dibyendu-coder)  
- **LinkedIn**: [Dibyendu Chatterjee](https://www.linkedin.com/in/dibyendu-chatterjee-5a218b330/)  
- **X / Twitter**: [@Dibyend41532078](https://x.com/Dibyend41532078)  
- **YouTube**: [@dibyenduchatterjee4877](https://youtube.com/@dibyenduchatterjee4877)  
- **Email**: [chatterjeedibyendu166@gmail.com](mailto:chatterjeedibyendu166@gmail.com)

