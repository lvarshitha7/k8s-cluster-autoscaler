import http from 'k6/http';

import { sleep } from 'k6';

export const options = {

  stages: [

    { duration: '1m', target: 50 },   // Ramp up

    { duration: '3m', target: 200 },  // Heavy load

    { duration: '1m', target: 0 },    // Ramp down

  ],

};

export default function () {

  http.get('http://13.203.159.95:32206/api/health');

  sleep(1);

}
