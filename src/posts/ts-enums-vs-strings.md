---
title: "Enums vs. strings in Typescript"
date: "2021-12-10"
excerpt: "Enums provide readability and maintainability and are as such tempting to sometimes utilise in a possibly disproportionate fashion. A few pros and cons."
---

Typescript adds enums to Javascript. "Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript." the official [TS handbook](https://www.typescriptlang.org/docs/handbook/enums.html) states.

```jsx
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

Enums provide readability and maintainability and are as such tempting to sometimes utilise in a possibly disproportionate fashion. Just upon reading a string enum might fulfill me with a subtle feeling of cleanliness.

A string enums list of constants almost appears similar to classes' key-value pairs. Correctly named a string enum will immediately convey its meaning as a distinct concept of the collection of values it resembles, nicely split and seperated. Type safety is through the roof. If it were in class (which it's not) I'd smell tiny hints of SOLID's SRP and ISP while trying to ignore bits of OCP violation.

Moving on: The way you work with string enum types can be irritating at times. As much as they improve our typing they require intellisense or lookups to properly identify their corresponding string values although the naming of their identifier will probably give it away 90 % of the time.

Without a doubt the most annoying bit for me is this particular error:

```jsx
// Function moving something in a direction
moveInDirection("UP");

// Type '"UP"' is not assignable to type 'Direction'
```

The corresponding function I may have expected:

```jsx
const moveInDirection = (direction: string): void =>
  console.log(`Moving ${direction}.`);
```

It's its type-safe sibling though which doesn't take a string as parameter but a `Direction` instead:

```jsx
const moveInDirection = (direction: Direction): void =>
  console.log(`Moving ${direction}.`);
```

To have my code compile correctly, I need this:

```jsx
import { Direction } from "./directionTypes";

moveInDirection(Direction.Up);
```

I will always require the import and the dependency it creates. If the identifier's name is equal to its value the readability of the function call will hardly suffer but the code will become (unnecessarily?) verbose. If it's not we could already be on a different slippery slope. God forbid the `Direction` enum isn't exported at all.

Additionally it might be worthwhile to take the compiled Javascript into consideration. The above-mentioned Direction enum compiles to ([TS Playground](https://www.typescriptlang.org/play)):

```js
var Direction;
(function (Direction) {
  Direction["Up"] = "UP";
  Direction["Down"] = "DOWN";
  Direction["Left"] = "LEFT";
  Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
```

That shouldn't make a difference unless a large project is cluttered with enums beyond reason but it leaves room for optimising our code base should we so desire.

The counterproposal to using a string enum is to use a union of string types instead of the string enum.

```jsx
type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

moveInDirection("UP"); // This is ok now.
moveInDirection("NORTH"); // Type '"NORTH"' is not assignable to type 'Direction'
```

This works because Typescript mostly utilises structural typing - but not in this case. A string enum is nominally typed and the source of the value is therefore taken into consideration. Even though the enum value and a corresponding string coerce to the same value.

```jsx
console.log(Direction.Up); // "UP"
console.log(Direction.Up === "UP"); // true
```

### TLDR

The type safety remains, so does the auto completion. The verbosity depends on how the enum was coded and what it represents. The handling is much more convenient. Much like the verbosity the layer of abstraction the enum provides is argueably important depending on what type needs to represent. Both enums and string unions have their use cases for slightly different development experiences.
