# Contributing to CI/CD Node.js Application

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to this project. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Getting Started

1.  **Fork the repository** on GitHub.
2.  **Clone your fork** locally:
    ```bash
    git clone https://github.com/YOUR_USERNAME/ci-cd-node-app.git
    cd ci-cd-node-app
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Create a branch** for your feature or bugfix:
    ```bash
    git checkout -b feature/amazing-feature
    ```

## Development Workflow

-   **Run the app locally**:
    ```bash
    npm run dev
    ```
-   **Run tests**:
    ```bash
    npm test
    ```
-   **Lint your code**:
    ```bash
    npm run lint
    ```

## Commit Guidelines

We use **Husky** to enforce code quality before commits.
-   Pre-commit hooks will automatically run **Prettier** to format your code.
-   Ensure `npm test` passes before pushing.

## Pull Requests

1.  Push your branch to your fork.
2.  Open a Pull Request against the `main` branch.
3.  Fill out the PR template (if available) or describe your changes clearly.
4.  Ensure all CI checks pass (Lint, Test, Build).

## Reporting Bugs

Please open an issue on GitHub and include:
-   Steps to reproduce
-   Expected behavior
-   Actual behavior
-   Environment details (Node version, OS)

Thank you for contributing!
