import { sleep, group } from "k6";
import http from "k6/http";
import { checkStatus } from "../common/utils.js";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";
import { path } from "../config/path.js";

export function auth() {
  group("POST - Authentication", function () {
    let payload = {
      username: "admin",
      password: `${process.env.PWD}`
    };

    let response = http.post(`${process.env.HOST}${path.auth}`, JSON.stringify(payload), { 
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

  });

  sleep(randomIntBetween(globalThis.PAUSE_MIN, globalThis.PAUSE_MAX));
}