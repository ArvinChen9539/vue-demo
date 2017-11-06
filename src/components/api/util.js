/**
 * Created by ArvinChen9539 on 2017/11/6.
 */
import cookie from 'vue-cookie'

const ApiUtil = {
    ticket(ticket) {
        if (arguments.length === 0) {
            return cookie.get('ticket');
        } else if (ticket === null) {
            cookie.delete('ticket');
        } else {
            cookie.set('ticket', ticket);
        }
    }
}

export default ApiUtil