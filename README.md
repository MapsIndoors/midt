# MapsIndoors Design Tokens

These is the MapsIndoors Design Tokens, compiled to SCSS variables for use when building MapsIndoors-related products.

The Design Tokens are compiled from JSON to SCSS using Amazon's Style Dictionary.

## How to build

1. Clone this repository `git clone git@github:MapsIndoors/midt.git`
2. `cd midt` 
3. Build the design tokens using `style-dictionary`:
    
  ```bash
  npm run build
  ```

4. You should see something like this output:

  ```bash
  > midt@1.0.0 build /Users/marks/dev/mapspeople/midt
  > style-dictionary build
  
  scss
  ✔︎  build/scss/_variables.scss
  ```

This creates a `build` directory and the folder structure will look like this:
```
├── README.md
├── config.json
├── properties/
│   ├── base.json
│   ├── font.json
│   ├── ...
├── build/
│   ├── scss/
│      ├── _variables.scss
```

5. If you want to watch for changes to the `properties` folder, you can use `npm run watch` and `_variables.scss` will be updated continuously.

You can read more about how Style Dictionary handles the merging and compilation of the JSON-files in the [Style Dictionary repository](https://github.com/amzn/style-dictionary).

## How to use the SCSS mixins

The `_variables.scss`-file that is generated from the (JSON) Design Tokens contains all of the building blocks for the `@mixin`s.

Here's an example to use the `color` `@mixin`:

1. In the `_variables.scss`-file there's a variable defining a base red color named `$color-red-base`. There's also a variable for a red color that's a shade darker named `$color-red-shade-100`.
2. Using those variables, the `@mixin` is defined like so:

  ```scss
  @mixin red($red: 'base') {
  
  @if $red == base {
    color: $color-red-base;
  }
  
  @else if $red == shade-100 {
    color: $color-red-shade-100;
  }
  [...]
  ```
  
3. Now, using this color `@mixin` on a class in your CSS could look like this:

  ```css
  .test { 
    @include red();
  }
  ```
  
  Or, if you wanted to make the color a shade darker:
  
  ```css
  .test {
    @include red(shade-100);
  }
  ```

You can use the same principles for applying padding or margin to an element like this:

```css
.test {
  @include margin(xx-large);
}
```

Or set the z-index:

```css
.test {
  @include z-index(toast);
}
```

## How to use the mixins with SASS' `use` function

SASS is moving away from explicitly `@import`ing towards declaring what you want to use instead. Here's an example:

```scss
@use '~/midt/mixins/color';

.test {
  @include color.red;
  color: color.red(shade-100);
}
