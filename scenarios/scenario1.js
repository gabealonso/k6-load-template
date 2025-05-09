import { login } from "../scripts/login.js";
import { bookings } from "../scripts/bookings.js";

export function scenario1() {
    
    login();
    
    for (let i = 0; i < 5; i++) {
        bookings();
    }
}