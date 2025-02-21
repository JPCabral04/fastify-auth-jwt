import { FastifyInstance } from 'fastify';
import mongoose from 'mongoose';
import { connectDB } from '../plugins/db';

export async function statusRoute(app: FastifyInstance) {
  app.get('/status', async (request, reply) => {
    try {

      const mongoState = mongoose.connection.readyState;
      const status = mongoState === 1 ? 'connected' : 'disconnected';

      if (status === 'connected') {
        return reply.code(200).send({
          status: 'ok',
          database: 'connected',
          uptime: process.uptime(),
        });
      }

      return reply.code(500).send({
        status: 'error',
        database: 'disconnected',
      });
    } catch (error) {
      return reply.code(500).send({
        status: 'error',
        message: (error as Error).message,
      });
    }
  });
}
