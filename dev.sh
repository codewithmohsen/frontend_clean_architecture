#!/bin/bash
tput reset;
#----------------------------------- CONSTANTs
DECORATION_REGULAR="0";
DECORATION_BOLD="1";
DECORATION_UNDERLINE="4";
COLOR_BLACK="30";
COLOR_RED="31";
COLOR_GREEN="32";
COLOR_YELLOW="33";
COLOR_BLUE="34";
COLOR_PURPLE="35";
COLOR_CYAN="36";
COLOR_WHITE="37";
NO_COLOR='\033[0m';
#----------------------------------- STYLE FUNCTIONS
generateStyleCode(){
    # code="\033[${1};${2}m";
    echo -e "\033[${1};${2}m";
}
#----------------------------------- PRINT FUNCTIONs
printLine(){
    # style=$(generateStyleCode ${1} ${2});
    echo -e "$(generateStyleCode ${1} ${2})${3}${NO_COLOR}";
}
printError(){
    printLine $DECORATION_BOLD $COLOR_RED "⏹ Error: ${1}" ;
    printLine $DECORATION_REGULAR $COLOR_BLACK "    ${2}" ;
    printLine $DECORATION_REGULAR $COLOR_BLACK "⏱ $(date '+%d/%m/%Y %H:%M:%S')" ;
    echo "";
}
printWarning(){
    printLine $DECORATION_BOLD $COLOR_YELLOW "! Warning: ${1}" ;
    printLine $DECORATION_REGULAR $COLOR_BLACK "    ${2}" ;
    printLine $DECORATION_REGULAR $COLOR_BLACK "⏱ $(date '+%d/%m/%Y %H:%M:%S')" ;
    echo "";
}
printSuccess(){
    printLine $DECORATION_BOLD $COLOR_GREEN "✔ Success: ${1}" ;
    printLine $DECORATION_REGULAR $COLOR_BLACK "    ${2}" ;
    printLine $DECORATION_REGULAR $COLOR_BLACK "⏱ $(date '+%d/%m/%Y %H:%M:%S')" ;
    echo "";
}
printInfo(){
    printLine $DECORATION_BOLD $COLOR_GREEN "ℹ Info: ${1}" ;
    printLine $DECORATION_REGULAR $COLOR_BLUE "    ${2}" ;
    printLine $DECORATION_REGULAR $COLOR_BLACK "⏱ $(date '+%d/%m/%Y %H:%M:%S')" ;
    echo "";
}
#----------------------------------- DEPENDENCIES
if [$(command -v kill-port)]
then
    printError "Package needed" "You have to install kill-port from https://www.npmjs.com/package/kill-port.";
    printInfo "Installing" "Please wait for installing kill-port package.";
    npm i -g kill-port;
    printSuccess "Installation Completed" "Now you have kill-port package.";
else
    printSuccess "Package Existed" "You have kill-port package.";
fi
#----------------------------------- RELEASE PORTS
printInfo "Wait for release ports" "Ports 1337 & 3000 are checking.";
npx kill-port 1337;
npx kill-port 3000;
printSuccess "Release Completed" "Ports 1337 & 3000 are free.";
#----------------------------------- RUN DEVELOP MODE
printInfo "Backend development mode is starting" "Please wait." &
npm run develop --prefix ./backend &
printSuccess "Backend server as development mode is runing" "You can access backend server from https://192.168.0.1/1337";
printInfo "Website development mode is starting" "Please wait." &
npm run dev --prefix ./frontend/web &
printSuccess "Website development mode is runing" "You can access website from https://192.168.0.1/3000";
printInfo "System is opening" "Please wait.";
open http://localhost:1337/admin/auth/login/ 
open http://localhost:3000/shop/products/;
printSuccess "Enjoy" ":)";

