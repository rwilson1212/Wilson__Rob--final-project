# @atomico/markdown

Default package @uppercod/markdown-inline for Atomico

## Install

```
npm install @atomico/markdown
```

## Example

```jsx
import { c } from "atomico";
import md from "@atomico/markdown";

function component() {
    return (
        <host>{md`
            # Title

            Markdown content:

            **bold**

            _italic_

            | col     | col     |
            | ------- | ------- |
            | Value 1 | value 2 |

            and more
        `}</host>
    );
}

customElements.define("my-component", c(component));
```
