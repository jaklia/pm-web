import { LoginResponse } from "../../models/loginResponse";
import { network } from "../network"

let authUrl = '/api/auth'
export class AuthApi {
  static login(username: string, password: string) {
    return network.post<LoginResponse>(`${authUrl}/login`, { username, password });
  }
}