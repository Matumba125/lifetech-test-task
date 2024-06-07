## LIFE TECH TEST TASK

## Overview

This project is a simplified version of GitHub, designed to display users and their repositories. The main objective is to create a GitHub user repository search application using the specified tools and technologies.

## Tools and Technologies

The following tools and technologies are required for this project:

- **eslint, prettier, husky:** Set up `pre-commit` and `commit-msg` hooks, and use `stylelint` for CSS.
- **vite:** Build tool for fast development.
- **FSD (feature-sliced-design):** Architecture approach.
- **typescript:** Strongly typed programming language.
- **react:** JavaScript library for building user interfaces.
- **module css:** CSS modules for styling components.
- **redux-toolkit + createAsyncThunk:** For state management.

Optional tasks include covering the code with e2e (Cypress or Playwright) and unit tests.

## Application Features

The application will allow users to search for GitHub users and display their repositories. It includes the following states:

1. **Initial State:** Prompt to search for a GitHub user.
2. **Main Screen:** Display user information and repositories when a valid user is found.
3. **User Not Found:** Show a message when the searched user does not exist.
4. **Repositories Not Found:** Indicate when the user has no repositories.

## Figma Design

The design for the project is provided in a Figma file:
[Figma Design](https://www.figma.com/design/lh6aJed0jGaqvmYLjlNC1S/Test-task-for-FE?node-id=0-1)

## GitHub API

Use the GitHub API to fetch user and repository data:
[GitHub API](https://api.github.com/)

## Setup and Installation

1. **Clone the repository:**
   ```bash
   https://github.com/Matumba125/lifetech-test-task.git
   cd lifetech-test-task


2. **Install dependencies:**
   ```bash
   npm install

3. **Set up environment variables:**

    Create a .env file in the root directory and add your GitHub API token:
   ```bash
   REACT_APP_GITHUB_TOKEN=your_github_token

4. **Run the development server:**
   ```bash
   npm install

## Linting and Formatting
- **eslint**: For JavaScript/TypeScript linting.
- **prettier**: For code formatting.
- **husky**: To set up pre-commit and commit-msg hooks.
- **stylelint**: For CSS linting.