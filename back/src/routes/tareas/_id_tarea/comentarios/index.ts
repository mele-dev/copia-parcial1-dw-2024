import { FastifyPluginAsync } from "fastify";
import * as comentarioService from "../../../../services/comentarios.js";
import { Type } from "@sinclair/typebox";
import { ComentarioSchema } from "../../../../types/comentario.js";

const tareasRoutes: FastifyPluginAsync = async (
  fastify,
  opts
): Promise<void> => {
  fastify.get("/", {
    schema: {
      summary: "Listado de comentarios de una tarea.",
      tags: ["comentarios"],
      response: {
        200: {
          description: "Listado de comentarios de una tarea.",
          content: {
            "application/json": {
              schema: Type.Array(ComentarioSchema),
            },
          },
        },
      },
    },
    onRequest: [fastify.verifyJWT, fastify.verifyAdmin],
    handler: async function (request, reply) {
      const { id_tarea } = request.params as {
        id_tarea: number;
      };
      return comentarioService.findCommentsByTask(id_tarea);
    },
  });
};

export default tareasRoutes;
