### Basic Types

- **Type**: refer to the different properties and functions an object has
- primitive types: `string`, `numebr`, `boolean`, `void`, `null`, `undefined`
- object types: `functions`, `arrays`, `classes`, `objects`, `Date`

### Type Inference

- when declare variable and init later
- want a variable to have a type that can't be inferred
- want to specify function return type (allow different types)
- function params must be declared, return value can be inferenced

```bash
ts-node features/annotations/variables.ts
```

### Convention

- Never use **default export**, confusing curly braces

### Parcel

- Auto-convert typescript into javascript

```
npm install -g parcel-bundler
cd maps
parcel index.html
```

---

## Maps App

- Use Faker to generate user name, location, company
- Maps Javascript API key: `AIzaSyC0BYDHZi-qtMd0aLPwbFkQEJ9y7M1dS6Q`
