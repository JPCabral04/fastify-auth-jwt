import Fastify from "fastify";
import { connectDB } from "./plugins/db";
import { authRoutes } from "./routes/auth.routes";

connectDB();

const fastify = Fastify({
  logger: true
})

fastify.get('/', (_request, _reply) => {
  _reply.send({ hello: 'world' });
})

fastify.register(authRoutes);

fastify.listen({ port: 3000 }, (_err, _address) => {
  if (_err) {
    fastify.log.error(_err);
    process.exit(1);
  }
})