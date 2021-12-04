# portfolio-website-react

> Build my Portfolio Web Site using React.

## Install

```bash
npm install --save react-bootstrap
npm install --save jquery
npm uninstall node-sass
npm install node-sass@4.14.1
```

`Error: Node Sass version 6.0.1 is incompatible with ^4.0.0.`
This error comes from sass-loader. There is a semantic versioning mismatch since node-sass @latest is v5.0.0 and sass-loader expects ^4.0.0.

There is an open issue on their repository with an associated fix that needs to be reviewed. Until then, refer to the solution below.

Ref: https://stackoverflow.com/questions/64625050/error-node-sass-version-5-0-0-is-incompatible-with-4-0-0

## Build

```bash
npm run fuild
serve -s build
```
