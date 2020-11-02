# ccjudge
ServerSide cross judgement of Client request information for Client-Hints and User-Agent

## Installation
```
npm i ccjudge
```

## Usage
```ts
import { judgeIsMobile } from 'ccjudge';

/**
 * ＠NOTE
 * Req can be substituted if it is of type `IncomingMessage` or an overlap of it.
 */
const legacyUA = req.headers['user-agent'];
const CHUAM = req.headers['sec-ch-ua-mobile'];

const isMobile = judgeIsMobile(legacyUA, CHUAM);

/** Use isMobile logics */
// ...
```