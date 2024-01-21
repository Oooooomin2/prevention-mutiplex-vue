# Overview

This is a Vue component designed to prevent multiplexing actions. It disables the component with a single click, and if the user navigates back in the browser, the action will be reverted.

## How to Use

You can install it using npm:

```bash
npm install prevention-multiplex-vue
```

## Npm

https://www.npmjs.com/package/prevention-mutiplex-vue

## Component

### import

```ts
import { Button, Link } from "prevention-multiplex-vue";
```

### Button

The props `:isDisabledButton` operates on the button's disabled element.

If set to true, the button's disabled element becomes true.

*Default is false.
*No matter which option you select, multiple transmission will not be performed. The only thing that changes is how the button looks after you click it.

```vue
<Button
    :text="'Your ButtonText'"
    :func="YourFunc"
    :isDisabledButton="false"
></Button>
```

### Link

```vue
<Link :text="'Your LinkText'" :func="YourFunc"></Link>
```
