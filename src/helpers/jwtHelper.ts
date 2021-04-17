import jwtDecode, { InvalidTokenError } from "jwt-decode";


export class JWTHelper {

  static getUserId(token: string): number {


    let decoded: { [key: string]: string } = jwtDecode(token);
    console.log(decoded);
    let id = parseInt(decoded['sub'])
    console.log(id)
    if (isNaN(id) && id <= 0) {
      throw Error('Invalid id')
    }
    return id;
  }

}