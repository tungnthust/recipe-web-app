# Recipe-web-app
Recipe web app is a Node.js-based web application, which is created as a mini project for the course IT4542E of HUST. The project is written by group 10 ICT-K63.

The web app works as a digital recipe book, which help users quickly find intructions to prepare for a delicious meal and even share their own recipes to others.

## Prerequisites
Before continuing, ensure you meet one of the two following sets of requirements:
### 1. Direct setup
* Node.js 16.13.1 or higher
* MongoDB 5.0 or higher
### 2. Through Docker
* Docker 18.04 or higher
* Docker-compose 3.0 or higher

## Installations
The following guides is expected to be done in terminal (Linux) or command prompt (Windows).
### 1. Direct setup
* Git clone the source code.
```bash
git clone https://github.com/tungnthust/recipe-web-app.git
```
* Go to the recipe-web-app directory.
* Start the client engine:
```bash
cd ./client
npm install 
npm start
```
* Start the server engine:
```bash
cd ./server
npm ci
npm test
npm run dev
```
* Now, you can use the web app at `localhost:3000`
### 2. Through Docker
*  Git clone the source code.
* Go to the recipe-web-app directory.
* Compose the project:
```bash
docker-compose up
```
* Now, you can use the web app at `localhost:8080`

## Contributing
We are more than happy to receive your contribution to the project.
1. Git clone the source code.
2. Create and checkout to your own branch.
```bash
git checkout -b [your-branch]
```
3. Make your changes on the code.
4. Commit your changes.
```bash
git commit -m "[message]"
```
5. Push it.
```bash
git push
```
6. Create a [new pull request](https://github.com/tungnthust/recipe-web-app/pulls) in this repository.
