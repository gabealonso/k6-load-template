export { scenario1 } from './scenarios/scenario1.js';

const configFile = __ENV.CONFIG_FILE || './config/test.json';
const testConfig = JSON.parse(open(configFile));

export const options = Object.assign({}, testConfig);

// used to store global variables
globalThis.VARS = [];

// global min/max sleep durations (in seconds):
globalThis.PAUSE_MIN = __ENV.PAUSE_MIN || 5;
globalThis.PAUSE_MAX = __ENV.PAUSE_MAX || 10;

export default function () {
  console.log("No scenarios found in config/test.json. Executing default function...");
}