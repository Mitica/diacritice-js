
# diacritice - Adaugă diacritice la text

Un client Javascript/node pentru diacritice.ai

## Utilizare

```js

import diacritice from 'diacritice'

diacritice('Acasa crestem fericiti mereu')
    .then(data => console.log(data.text))
// output: Acasă creștem fericiți mereu

```
