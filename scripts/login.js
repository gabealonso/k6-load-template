import { sleep, group } from "k6";
import http from "k6/http";
import { checkStatus } from "../common/utils.js";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";
import { path } from "../config/path.js";
import env from "../config/env.js";

export function login() {
  group("POST - Login", function () {
    let payload = {
      username: `${env.USERNAME}`,
      password: `${env.PWD}`
    };

    let response = http.post(`${env.HOST}${path.login}`, JSON.stringify(payload), { 
      headers: {
          "Content-Type": "application/json"
      },
    });

    checkStatus({
      response: response,
      expectedStatus: 200,
      failOnError: true,
      printOnError: true
    });

    const jsonResponse = JSON.parse(response.body);
    globalThis.token = jsonResponse.token;

  });

  sleep(randomIntBetween(globalThis.PAUSE_MIN, globalThis.PAUSE_MAX));
}