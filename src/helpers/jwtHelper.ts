import jwtDecode from "jwt-decode";


export class JWTHelper {

  static getUserId(token: string): number {


    let decoded: { [key: string]: string } = jwtDecode(token);
    let id = parseInt(decoded['sub'])
    if (isNaN(id) && id <= 0) {
      throw Error('Invalid id')
    }
    return id;
  }

}