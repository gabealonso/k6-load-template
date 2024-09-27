import { sleep, group } from "k6";
import http from "k6/http";
import { checkStatus } from "../common/utils.js";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";
import { path } from "../config/path.js";

export function sendVerificationCode() {
  group("Send Verification Code", function () {
    let payload = {
      number_to: "555555555"
    };

    let response = http.post(`${process.env.BASE_URL}${path.sendverificationcode}`, JSON.stringify(payload), { 
      headers: {
          "Content-Type": "application/json",
          "User-Agent": "iOS",
          "X-API-Version": "2.0",
          "X-Timestamp": "1597938715.938225",
          "X-Token": `${process.env.TOKEN}`
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