import { NotFoundError } from "../util/errors.js";
import db from "./db.js";

export const findCommentsByTask = async (id_tarea: number) => {
  const res = await db.query(
    `
        SELECT * FROM comentarios where id_tarea = $1    
    `,
    [id_tarea]
  );
  if (res.rowCount === 0) throw new NotFoundError("");
  return res.rows;
};
