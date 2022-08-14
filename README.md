    

## Application setup
``` 
Create the application:
        1.  Init the project and package.json file:
                cd /path/to/typescript-express-init
                npm init
        2.  Create the start script (first as js later as ts):
                touch index.js
        3.  Install any required packages using npm:
                npm i <package_name> --save
                npm install express dotenv
        4.  Run application:
                node index.js
            where:
                http://localhost:8000

2. Install typescript as devDependencies:
        npm i -D typescript @types/express @types/node

3.  Generating tsconfig.json... could do this... but just generates limited subset:
        cd /path/to/typescript-express-init
        npx tsc --init
    Instead copy in a file we use across projects. Example used here.
    
4.  Convert application file to typescript:
        mv index.js index.js-works
        touch index.ts
    Add content as per file.
       
5.  Install nodemon to detect file changes to reload during development:
        npm install -D concurrently nodemon
        
6.  Modify package.json 
          "scripts": {
            "build": "npx tsc",
            "start": "node dist/index.js",
            "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
          }
    where:
        build = compiles typescript to javascript
        dev = run server in dev mode
        
7.  Run the server using typescript:
        npm run build
        npm run dev
```
