Initial Setup:
01. Install nodejs and npm
02. (on console) node -v (prints node version)
03. (on console) npm -v (prints npm version)
04. (on console) npm install -g typescript (installs typescript globally)
05. (on console) tsc -v
06. Open VS Code 2 along with integrated console (this is a one of the light weight TS/JS editor)
07. (on VS Code 2) ctrl/command+shift+P -> select 'Configure Task' -> select tsc build xxx (it creates tasks.json under .vscode)

Project Setup
01. Create project folder in the workspace using console and move to the folder on console
02. (on console) tsc --init (creates tsconfig.json)
03. Develope main.js (refer illustrated projects like glarimy-typescript-00 for help)

Building using VSCode
01. ctrl/command+shift+B -> select build <your-project>/tsconfig.json (it builds the project and generates main.js)

Building using node
01. (on console) tsc --target es5 main.ts (generates main.js)

Running (no magic)
01. (on console) node main.js (runs the generated js)

Illustrations
00: Printing on terminal
01: Linking to browser and printing on console 
02. User defined datatypes 
03. Optional Parameters 
04. Classes 
05. Constructors 
06. Access 
07. Getters and Setters 
08. Any 
09. Statics 
10. Defaults & Readonly 
11. Interface Implementations 
12. Abstract Classes
13. Promises
14. Decorators
15. Modules
16. Ajax Calls
17. Brwoser Application