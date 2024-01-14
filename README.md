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

```vue
<Button :text="'Your ButtonText'" @click="YourFunc"></Button>
```

### Link

```vue
<Link :text="'Your LinkText'" @click="YourFunc"></Link>
```
