import { AuthRepository } from "./auth.repository";
import { comparePassword } from "../../libs/bcrypt";
import { signToken } from "../../libs/jwt";

export class AuthService {
  private repository = new AuthRepository();

  async login(data: any) {
    const client = await this.repository.findByEmail(data.email);

    if (!client) {
      throw new Error("Usuario no existe");
    }

    const isValid = await comparePassword(
      data.password,
      client.password
    );

    if (!isValid) {
      throw new Error("Credenciales inválidas");
    }

    const token = signToken({
      sub: client._id!.toString(),
      email: client.email,
      role: "client",
    });

    return {
      user: {
        id: client._id,
        name: client.name,
        email: client.email,
      },
      token,
    };
  }
}