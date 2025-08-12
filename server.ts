//const fastify = require("fastify"); para js
//const crypton = require("crypto"); para js

import fastify from "fastify";
import crypton from "node:crypto";

const server = fastify({
  logger:{
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    }
  }
});

const courses = [
  {
    id: "1",
    title: "Curso de Node.js",
    description: "Descrição do Curso de Node.js",
  },
  {
    id: "2",
    title: "Curso de React.js",
    description: "Descrição do Curso de React.js",
  },
  {
    id: "3",
    title: "Curso de Vue.js",
    description: "Descrição do Curso de Vue.js",
  },
];

server.get("/courses", () => {
  return { courses };
});

server.get("/courses/:id", (request, reply) => {
  type Params = {
    id: string;
  };

  const params = request.params as Params;
  const courseId = params.id;

  const course = courses.find((course) => course.id === courseId);

  if (course) {
    return { course };
  }

  return reply.status(404).send({ message: "Course not found" });
});

server.post("/courses", (request, reply) => {
  type Body = {
    title: string;
    description: string;
  };

  const body = request.body as Body;

  const { title, description } = body;
  const courseId = crypton.randomUUID();

  if (!title) {
    return reply.status(400).send({ message: "Course title is required" });
  }
  
  courses.push({
    id: courseId,
    title,
    description,
  });

  return reply.status(201).send({ id: courseId });
});

server.listen({ port: 3333 }).then(() => {
  console.log("HTTP Server running");
});
