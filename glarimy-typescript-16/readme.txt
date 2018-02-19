tsc -target es6 -experimentalDecorators true -module commonjs  main.ts

create a folder in the deployment directory of your web server (ex: <tomcat>/webapps/tslibrary)
copy the html/css/js/json files into the newly created folder 
open the index.html in the browser (http://localhost:8080/tslibrary/index.html)