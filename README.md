

<h1 align="center">
  <br>
  <a href="https://forms-manager.vercel.app/" target="_blank" ><img src="/client/public/icons/logo.svg" alt="Formr" width="120"></a>
  <br>
  Formr
  <br>
</h1>

<h4 align="center">Drag-and-drop form builder with tracking.</h4>
<p align="center" >Formr is a Google Forms clone that simplifies form creation with a drag-and-drop builder, multiple question types, and real-time tracking. It offers seamless invite sending and custom link sharing, making form management efficient and user-friendly.</p>



<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#related">Related</a> •
</p>

![screenshot](https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.gif)

## Key Features

* **Drag-and-Drop Form Builder**  
  - Easily create forms with an intuitive drag-and-drop interface.

* **Multiple Question Types**  
  - Customize forms with a variety of question types, from text to multiple-choice.

* **Custom Link Sharing**  
  - Generate unique links for easy sharing and quick access.

* **Invite Sending and Tracking**  
  - Send invites and track who has responded, all in one place.

* **Real-Time Response Tracking**  
  - Monitor form responses as they come in, instantly.

* **User-Friendly Interface**  
  - Designed for a smooth and efficient form-building experience.
 
## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

### Installation

This project have two parts, backend and frontend.

#### Backend installation


1. Clone the repo
   ```sh
   git clone https://github.com/milanb0z/forms-manager.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create Environment Variables `.env`
   ```env
   PORT=3001
   MONGO_URI=<MONGO_DB_URL>

   JWT_SECRET=<JWT_SECRET>
   
   NODE_ENV=development
   ```
4. Run Server
   ```sh
   npm start
   ```

#### FrontEnd installation

1. Enter /client folder
   ```sh
   cd client
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run App
   ```sh
   npm run dev
   ```

4. View app [Here](http://127.0.0.1:3000/)

## Tech Stack

This project was developed using the MERN (MongoDB, Express.js, React, Node.js) stack, along with several other essential technologies and tools.

- [![mongodb][mongodb]][mongodb-url]
- [![express][express]][express-url]
- [![React][React.js]][React-url]
- [![Next][Next.js]][Next-url]

## Related

[Portfolio Blog Post](https://www.milanb0z.dev/project/forms-manger) - Learn more about story and features of app

## You may also like...

- [Pomolectron](https://github.com/amitmerchant1990/pomolectron) - A pomodoro app
- [Correo](https://github.com/amitmerchant1990/correo) - A menubar/taskbar Gmail App for Windows and macOS


---

> [milanb0z.dev](https://www.milanb0z.dev) &nbsp;&middot;&nbsp;
> GitHub [@milanb0z](https://github.com/milanb0z) &nbsp;&middot;&nbsp;
> Instagram [@milanb0z](https://instagram.com/milanb0z)

[Next.js]: https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Next-url]: https://nodejs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[express]: https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=4FC08D
[express-url]: https://expressjs.com/
[mongodb]: https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[mongodb-url]: https://www.mongodb.com/

