# CI/CD Demo App

A small web application used to demonstrate a complete CI/CD pipeline with GitHub Actions.
Built for Assignment No. 2, BS Information Technology, Semester 7.

**Live site:** https://YOUR-USERNAME.github.io/YOUR-REPO/

## About the Application

A simple static web page with an addition calculator. The user enters two numbers,
clicks **Add**, and the result is displayed. The logic lives in `src/app.js` and is
covered by automated tests.

## Technologies

- HTML, CSS, JavaScript
- Node.js 20
- Jest (automated testing)
- ESLint (code quality / linting)
- GitHub Actions (CI/CD)
- GitHub Pages (hosting)

## Project Structure

```
.
├── .github/workflows/
│   ├── ci.yml          # Continuous Integration workflow
│   └── deploy.yml      # Deployment workflow
├── scripts/
│   └── build.js        # Packages src/ into dist/
├── src/                # Application source code
│   ├── index.html
│   ├── app.js
│   └── style.css
├── tests/
│   └── app.test.js     # Automated tests
├── eslint.config.js    # Linting rules
├── package.json
└── README.md
```

## Running Locally

```bash
npm install          # install dependencies
npm run lint         # run code-quality checks
npm test             # run automated tests
npm run build        # create the dist/ folder
```

Open `src/index.html` in a browser to view the app.

## CI/CD Pipeline

**CI (`ci.yml`)** runs on every push and on pull requests targeting `main`:

1. Check out the code
2. Set up Node.js 20
3. Install dependencies (`npm ci`)
4. Lint with ESLint
5. Run tests with Jest
6. Build the application into `dist/`
7. Upload `dist/` as a build artifact

**Deployment (`deploy.yml`)** runs after CI succeeds on `main`:

1. Download the validated build artifact
2. Smoke-test it in the **staging** environment
3. Wait for manual approval on the **production** environment
4. Deploy to GitHub Pages

**Deployment model:** Continuous Delivery. Production release requires manual approval.

## Development Workflow

1. Create a feature branch from `main`
2. Commit changes and push the branch
3. Open a Pull Request targeting `main`
4. CI checks must pass and the PR must be reviewed
5. Merge, then approve the production deployment

## Security

- No credentials are stored in the repository
- Workflows use least-privilege permissions
- GitHub Pages deployment authenticates via the built-in `GITHUB_TOKEN` and OIDC
- Production deployment is protected by required reviewers

## Author

Sharjeel Ikhlaq, 58129, BSIT(7).