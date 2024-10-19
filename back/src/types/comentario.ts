import { Static, Type } from "@sinclair/typebox";

export const ComentarioSchema = Type.Object(
  {
    id_comentario: Type.Integer({
      description: "Identificador del comentario",
    }),
    id_tarea: Type.Integer({
      description: "Identificador de la tarea a la que pertenece el comentario",
    }),
    id_usuario: Type.Integer({
      description: "Identificador del usuario al que esta asignada esta tarea",
    }),
    fecha_ingresado: Type.Date({
      description: "Fecha en la que se creo el comentario",
    }),
    titulo: Type.String({ description: "Titulo de la tarea" }),
    descripcion: Type.String({
      description: "Detalles/desglose de un comentario",
    }),
  },
  {
    examples: [
      {
        id_comentario: 1,
        id_tarea: 1,
        id_usuario: 1,
        fecha_ingresado: new Date(),
        titulo: "Mi primer comentario",
        descripcion: "Me gusta esta tarea!",
      },
    ],
  }
);
export type TareaType = Static<typeof ComentarioSchema>;
