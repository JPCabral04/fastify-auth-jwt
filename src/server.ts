import Fastify from 'fastify';
import { authRoutes } from './routes/auth.routes';
import { statusRoute } from './routes/status.route';

const fastify = Fastify({
  logger: true,
});

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' });
});

fastify.register(statusRoute);

fastify.register(authRoutes);

fastify.listen({ port: 3000 }, (_err, _address) => {
  if (_err) {
    fastify.log.error(_err);
    process.exit(1);
  }
});
