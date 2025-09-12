import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { courses } from "../database/schema.ts";
import { db } from "../database/client.ts";
import z from "zod";
import { checkUserRole } from "./hooks/check-user-role.ts";
import { checkRequestJWT } from "./hooks/check-request-jwt.ts";

export const createCourseRoute: FastifyPluginAsyncZod = async (server) => {
  server.post("/courses",{
    preHandler: [
      checkRequestJWT,
      checkUserRole('manager'),
    ],
    schema: {
      tags: ['Courses'],
      summary: 'Create a new course',
      description: 'This route allows you to create a new course',
      body: z.object({
        title: z.string().min(5,"Título deve ter pelo menos 5 caracteres").max(100,"Título deve ter no máximo 100 caracteres"),
        description: z.string().min(10,"Descrição deve ter pelo menos 10 caracteres").max(500,"Descrição deve ter no máximo 500 caracteres"),
      }),
      response: {
        201: z.object({
          id: z.uuid(),
        }).describe("Course created successfully"),
      },
    },
  }, async (request, reply) => {
  
    const body = request.body;
  
    const { title, description } = body;
  
    const result = await db.insert(courses).values({
      title,
      description
    }).returning();
  
    return reply.status(201).send({ id: result[0].id });
  });
};