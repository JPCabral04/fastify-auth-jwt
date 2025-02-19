import Fastify from "fastify";
import { connectDB } from "./plugins/db";

connectDB();

const fastify = Fastify({
  logger: true
})

fastify.get('/', (_request, _reply) => {
  _reply.send({ hello: 'world' });
})

fastify.listen({ port: 3000 }, (_err, _address) => {
  if (_err) {
    fastify.log.error(_err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${_address}`)
})