# portfolio-website-react

> Build my Portfolio Web Site using React.

## Install

```bash
npm install
```


## Build

* Build the application.
```sh
npm run build
serve -s build
```

* Verify by opening the following URL in broswer.

```sh
http://localhost:5000
```

* Build the docker image.
```sh
docker build -f Dockerfile -t portfolio-website .
```

## Deployment

```sh
docker run --name portfolio-website -it -p 5001:3000 -d portfolio-website
```