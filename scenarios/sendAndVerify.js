import { sendVerificationCode } from "../scripts/sendVerificationCode.js";
import { verifyUser } from "../scripts/verifyUser.js";

export function sendAndVerify() {
    sendVerificationCode();
    verifyUser();
}