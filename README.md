# Hapi React Transform Boilerplate

A hapi starter kit for React based on the [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate) for hot module replacement (HMR) in development, and with a useful project structure for production. Uses [hapi-redux-router](https://github.com/prashaantt/hapi-redux-router) to provide isomorphic routing to components that manage state using a Redux store.

[![Dependency Status](https://david-dm.org/prashaantt/hapi-react-transform-boilerplate.svg)](https://david-dm.org/prashaantt/hapi-react-transform-boilerplate)
[![devDependency Status](https://david-dm.org/prashaantt/hapi-react-transform-boilerplate/dev-status.svg?theme=shields.io)](https://david-dm.org/prashaantt/hapi-react-transform-boilerplate#info=devDependencies)


## Usage

```bash
git clone https://github.com/prashaantt/hapi-react-transform-boilerplate.git
cd hapi-react-transform-boilerplate
npm install
npm start

open http://localhost:3000
```

HMR will happen for any edits in the React components (```src/screens```).

To simulate production mode with isomorphic routing:

```bash
npm run production

open http://localhost:8080
```

HMR is not available in production. 


## License

MIT
