<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo_name, twitter_handle, email, project_title, project_description
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Full Stack Shopping Cart</h3>

  <p align="center">
    A backend app that stores a shopping cart in a database with a frontend app that serves the user the cart.
    <br />
    <a href="https://github.com/MoFarid/cart"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/MoFarid/cart">View Demo</a>
    ·
    <a href="https://github.com/MoFarid/cart/issues">Report Bug</a>
    ·
    <a href="https://github.com/MoFarid/cart/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

### Built With

- [Node.js v16.6.0](https://nodejs.org/)
- [Yarn v1.22.11](https://yarnpkg.com/)
- [Docker v20.10.2](https://www.docker.com/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Make sure that the following prerequisites are installed with the required version.

- node
  ```sh
  node --version
  ```
- yarn

  ```sh
  yarn --version
  ```

- docker
  ```sh
  docker --version
  ```

### Installation

A quick way to run the apps without installing all dependencies locally is through Docker.

1. Clone the repo
   ```sh
   git clone https://github.com/MoFarid/cart.git
   ```
2. Navigate to `backend` and run the server using Docker
   ```sh
   cd backend
   yarn docker:start
   ```
3. Navigate to `frontend` and run the client app using
   ```sh
   cd frontend
   yarn start
   ```

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [node-express-boilerplate](https://github.com/hagopj13/node-express-boilerplate)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
