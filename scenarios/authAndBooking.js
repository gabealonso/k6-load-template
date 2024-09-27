import { auth } from "../scripts/auth.js";
import { booking } from "../scripts/booking.js";

export function authAndBooking() {
    auth();
    booking();
}