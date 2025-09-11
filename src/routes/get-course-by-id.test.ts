import { test, expect } from 'vitest'
import request from 'supertest'
import { server } from '../app.ts'
import { makeCourse } from '../tests/factories/make-course.ts'


test('get a course by id', async () => {
  await server.ready()

  const course = await makeCourse()

  const response = await request(server.server)
    .get(`/courses/${course.id}`)


  expect(response.status).toEqual(200)
  expect(response.body).toEqual({
    course: {
        id: expect.any(String),
        title: expect.any(String),
        description: expect.any(String),
    }
  })
})

test('return 404 for non existing course', async () => {
  await server.ready()


  const response = await request(server.server)
    .get(`/courses/b94f068c-f052-4740-9f1e-35582c68f6d6`)


  expect(response.status).toEqual(404)
  
})