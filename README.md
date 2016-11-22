# Maxdome config for ESLint

Extends AirBnB's ESLint config and provides linting for Node & React.

## Usage

1. Install eslint & dependencies in your project directory

        npm install --save-dev eslint eslint-config-airbnb eslint-config-maxdome
        npm install --save-dev eslint-plugin-react // if necessary

2. Add this config to your local `.eslintrc` file:

        {
            "extends": "maxdome",
            // add project-specific options here
        }

3a. For React projects, you can use the react config that extends the main config.

        {
           "extends": "maxdome/react",
           // add project-specific options here
        }

    Inside your `/test` directory, you can use the react-test config that extends the main test config.

         {
            "extends": "maxdome/react-test",
            // add project-specific options here
         }

3b. For Node.js projects, you can use the node config that extends the main config.

        {
           "extends": "maxdome/node",
           // add project-specific options here
        }

    Inside your `/test` directory, you can use the node-test config that extends the main test config.

         {
            "extends": "maxdome/node-test",
            // add project-specific options here
         }
