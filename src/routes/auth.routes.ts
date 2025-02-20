import { FastifyInstance } from "fastify";
import User from "../models/User"
import { userSchema, UserInput } from "../schemas/user.schema"

export async function authRoutes(app: FastifyInstance) {

  app.post('/register', async (request, reply) => {
    try {

      // Validate input with zod
      const userData: UserInput = userSchema.parse(request.body);

      // Check if the email already exists
      const existingUser = await User.findOne({ email: userData.email })

      if (existingUser) {
        return reply.status(400).send({ message: "Email already registered" });
      }

      //Create new User
      const newUser = new User(userData);
      await newUser.save();

      return reply.status(201).send({ message: "User created with sucess!" })

    } catch (error) {
      return reply.status(400).send(error);
    }
  })

}