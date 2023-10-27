const axios = require("axios");
const { processes } = require("./listProccesses");
let data = JSON.stringify({
  username: "username of who created this container",
  Image: "ubuntu:latest",
  Hostname: "playground",
  Domainname: "test-updateContainer",
  name: "ubuntu-test62",
  WorkingDir: "/app",
  Cmd: [],
  Tty: true,
  Detached: true,
  Env: ["HOME=/home/myuser"],
  Volumes: {
    "/home/myuser": {},
  },
  User: "nobody",
});

let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://localhost:3000/containers/create",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTIwMWZjMzcwNDc2M2E1NmIzMGFjZTAiLCJpYXQiOjE2OTgxMDMzNjQsImV4cCI6MTY5ODE4OTc2NH0.qXJO3mvPYAqT1MofPuo7dWkKwBJP2yNJvfLgrLcrmrk",
    "Content-Type": "application/json",
  },
  data: data,
};

async function create({image, domainname, user, cmd,dir,env,volume}) {
    console.log(image, domainname, user, cmd,dir,env,volume);
  let data = JSON.stringify({
    username: process.env.USERNAME,
    Image: "ubuntu:latest",
    Hostname: "playground",
    Domainname: "test-updateContainer",
    name: "ubuntu-test62",
    WorkingDir: "/app",
    Cmd: [],
    Tty: true,
    Detached: true,
    Env: ["HOME=/home/myuser"],
    Volumes: {
      "/home/myuser": {},
    },
    User: "nobody",
  });
  try {
    // const response = await axios.request(config);
    // console.log(JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
}

module.exports = { create };
