# NgxBsn

An Angular directive to validate Dutch BSN numbers.

See it in action [here](https://mmjmanders.github.io/ngx-bsn).

## Installation
Install `ngx-bsn` using your favorite package manager.

## Usage

```typescript
import { BsnDirective } from 'ngx-bsn';

@Component({
  imports: [BsnDirective]
})
```

```html
<input type="text" ngxBsn>
```
