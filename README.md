# Portfolio Web Site

> Build my Portfolio Web Site using React.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Portfolio Web Site Screenshot 1](public/images/PortfolioWebSite1.png)

![Portfolio Web Site Screenshot 2](public/images/PortfolioWebSite2.png)

![Portfolio Web Site Screenshot 3](public/images/PortfolioWebSite3.png)

![Portfolio Web Site Screenshot 4](public/images/PortfolioWebSite4.png)

## Live Demo

Available at the following hosting platforms:
1. React application hosted at [Netlify](https://netlify-portfolio.adafycheng.dev) (custom domain can be added freely).  [Another Live Demo for GitLab](https://netlify-portfolio-gitlab.adafycheng.dev).
2. React application hosted at [Heroku](https://adacheng-portfolio-website.herokuapp.com).
3. React application hosted at [Vercel](https://portfolio-website-react-six.vercel.app) (custom domain can be added freely if not used in hashnode.dev). [Another Live Demo for GitLab](https://portfolio-website-react-gitlab.vercel.app).
4. React application hosted at [AWS Amplify Hosting](https://aws-portfolio.adafycheng.dev) (custom domain can be added).  <a href="https://aws.amazon.com/amplify/pricing/" target="_blank">Pay as you go pricing scheme</a> applies.
5. Docker image hosted at [Google Cloud Run](https://gcp-portfolio.adafycheng.dev).  Cloud Build is configured for continuous deployment.
6. Static files hosted at [GitHub Pages](https://adafycheng.github.io) freely.

Continuous Integration is configured at the first five hosting platforms above such that automatic deployment will be triggered when any file is committed into the main branch of the GitHub repository.

| Platform | CI on main | CI on PR | GitHub | GitLab | Bitbucket | Configuration | Email Notification |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Netlify | Yes | Yes | [Yes](https://netlify-portfolio.adafycheng.dev) | [Yes](https://netlify-portfolio-gitlab.adafycheng.dev) | Yes | Easy | Yes |
| Heroku | Yes | No | [Yes](https://adacheng-portfolio-website.herokuapp.com) | No | TBC | Medium | No |
| Vercel | Yes | Yes | [Yes](https://portfolio-website-react-six.vercel.app) | [Yes](https://portfolio-website-react-gitlab.vercel.app) | Yes | Easy | No |
| AWS Amplify | Yes | No | [Yes](https://aws-portfolio.adafycheng.dev) | TBC | TBC | Medium | No |
| Google Cloud Run (Docker) | Yes | Yes | [Yes](https://gcp-portfolio.adafycheng.dev) |TBC | TBC | Medium | No |
| GitHub Pages | No | No | [Yes](https://adafycheng.github.io) | No | No | N/A | No |


## Development

1. Install the libraries.

    ```bash
    npm install react react-dom

    npm install -g create-react-app

    npm install bootstrap

    npm install react-bootstrap
  
    npm install jquery
   
    npm install sass
    ```

2. Create a React application.

    ```sh
    npx create-react-app portfolio-website-react
    ```
   
3. Modify source code /src/App.js.

4. Build the application.
    ```sh
    npm run build
    ```

5. Start the application locally.
    ```sh
    npm install -g serve
    serve -s build
    ```

6. Verify by opening the following URL in broswer.
    ```sh
    http://localhost:5000
    ```

## Security Scan

Before deployment, it's better to have security scan on the docker image and apply fix if any vulnerabilities found.

### 1. Docker Image

1. Build the docker image.

    ```sh
    docker build -f Dockerfile -t portfolio-website:latest .
    ```

2. Scan the docker image.

    ```sh
    docker scan portfolio-website:latest
    ```

## Deployment

A React application can be deployed to server via the following deployment types:
1. [React application](#1-react-application)
2. [Docker image](#2-docker-image)
3. [Static pages](#3-static-pages)

### 1. React application

1. Install and start the application.

```sh
npm install
npm start
```

2. Browser at `http://localhost:3000` should be opened for testing.

### 2. Docker image

1. Build the docker image.

    ```sh
    docker build -f Dockerfile -t portfolio-website .
    ```

2. Run docker image.

    ```sh
    docker run --name portfolio-website -it -p 5001:3000 -d portfolio-website
    ```

3. Test by opening browser at `http://localhost:5001`.


### 3. Static pages

1. Build the application.

    ```sh
    npm run build
    ```

2. Copy all the static files in the `build` folder to the web server.


## Acknowledgements

1. [Bootstrap with Create React App](https://www.npmjs.com/package/create-react-app).
2. [React component for rating](https://www.npmjs.com/package/reactjs-rating-component).
3. [React component for tabbed pane](https://www.npmjs.com/package/reactjs-tabbedpane-component).
4. [React component for top navigation bar](https://www.npmjs.com/package/reactjs-topnav-component).
5. [CI with Snyk using GitHub ](https://blog.adafycheng.dev/ci-with-snyk-using-github-actions).
6. [Dockerizing a Node.js web application](https://blog.adafycheng.dev/dockerizing-a-nodejs-web-application).
7. [Deploy a Docker image to Google Cloud using Cloud Run](https://blog.adafycheng.dev/deploy-a-docker-image-to-google-cloud-using-cloud-run).