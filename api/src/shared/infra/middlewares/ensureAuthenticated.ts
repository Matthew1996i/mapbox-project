import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { EnsureAuthenticatedError } from "../../errors/EnsureAuthenticatedError";
import { NotFoundError } from "../../errors/not-found-error";
import auth from "../../../config/auth";

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new EnsureAuthenticatedError.TokenMissing();
    }

    if (!auth.secret_token) {
      throw new NotFoundError("Secret token not provided");
    }

    const [, token] = authHeader.split(" ");

    if (!token) {
      throw new NotFoundError("Token not provided or Mal Formated");
    }

    const data = verify(String(token), auth.secret_token);

    request["user"] = data;

    next();
  } catch (error) {
    response.status(500).json({ local: "Authenticated", description: error });
  }
}
