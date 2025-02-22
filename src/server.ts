import Fastify from 'fastify';
import { authRoutes } from './routes/auth.route';
import { statusRoute } from './routes/status.route';
import { connectDB } from './plugins/db';

const fastify = Fastify({
  logger: true,
});

async function startServer() {
  try {
    await connectDB();

    fastify.get('/', (request, reply) => {
      reply.send({ hello: 'world' });
    });

    fastify.register(statusRoute);
    fastify.register(authRoutes);

    await fastify.listen({ port: 3000 });

  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
}

startServer();
