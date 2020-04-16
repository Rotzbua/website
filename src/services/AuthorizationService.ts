import {AuthDetails, BlizzardToken} from "@/store/oauth/types";
import {API_URL, REDIRECT_URL} from "@/main";
import Vue from 'vue';

export default class AuthorizationService {
  public async authorize(code: string): Promise<BlizzardToken> {
    const url = `${API_URL}api/oauth/token?code=${code}&redirectUri=${REDIRECT_URL}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    return await response.json();
  }

  public async loadAuthCookie(): Promise<AuthDetails> {
    const cookie =  Vue.cookies.get("BnetAuth");
    return cookie as AuthDetails ?? {} as AuthDetails;
  }

  public async saveAuthToken(token: AuthDetails) {
    Vue.cookies.set("BnetAuth", token, { expires: token.expiresIn });
  }

  public async getProfileName(bearer: string): Promise<string> {
    const url = `${API_URL}api/oauth/battleTag?bearer=${bearer}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    return data.battletag;
  }
}
