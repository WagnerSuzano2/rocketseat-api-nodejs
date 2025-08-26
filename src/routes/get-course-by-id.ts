import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { courses } from "../database/schema.ts";
import { db } from "../database/client.ts";
import z from "zod";
import { eq } from "drizzle-orm";

export const getCourseByIdRoute: FastifyPluginAsyncZod = async (server) => {
 server.get("/courses/:id",{
   schema: {
      tags: ['Courses'],
      summary: 'Get course by ID',
      description: 'This route allows you to retrieve a course by its ID',
      params: z.object({
       id: z.uuid(),
     }),
     response: {
       200: z.object({
         course: z.object({
           id: z.uuid(),
           title: z.string(),
           description: z.string(),
         }),
       }),
       404: z.object({
         message: z.string().describe("Course not found"),
       }),
     },
   },
 }, async (request, reply) => {
 
   const courseId = request.params.id;
 
   const result = await db.select().from(courses).where(eq(courses.id, courseId));
 
   if (result.length > 0) {
     return { course: result[0] };
   }
 
   return reply.status(404).send({ message: "Course not found" });
 });
};