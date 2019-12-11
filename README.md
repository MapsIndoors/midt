# MapsIndoors Design Tokens (midt)

`midt` contains the MapsIndoors Design Tokens.

They are compiled to SCSS variables for use when building MapsIndoors-related products for web.

The Design Tokens are compiled from JSON to SCSS using [Amazon's Style Dictionary](https://github.com/amzn/style-dictionary).

Install from `npm` using `npm i -D midt@latest`.

## Build

1. Clone this repository `git clone git@github:MapsIndoors/midt.git && cd midt`
2. Build the Design Tokens using `style-dictionary`:
    
```bash
npm run build
```

You should see something like this output:

```bash
> midt@1.0.0 build ~/dev/midt
> style-dictionary build

scss
✔︎  build/scss/_variables.scss
```

### Watch

If you want to watch for changes to the `properties` folder, you can use `npm run watch` and `_variables.scss` will be updated continuously.

You can read more about how Style Dictionary handles the merging and compilation of the JSON-files in the [Style Dictionary repository](https://github.com/amzn/style-dictionary).

## Use the SCSS mixins

The `_variables.scss`-file that is generated from the (JSON) Design Tokens contains all variables needed to build a range of helpful `@mixin`s.

Here's an example with the `color` `@mixin`:

1. In the `_variables.scss`-file there's a variable defining a base red color named `$color-red-base`. There's also a variable for a red color that's a shade darker named `$color-red-shade-100`.
2. Using those variables, the `@mixin` is constructed like this:

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

## Use with SASS' `@use` function

SASS is moving away from explicitly `@import`ing towards declaring what you want to `@use` instead. Here's an example:

```scss
@use 'color';

.test {
  @include color.red;
  color: color.red(shade-100);
}
```

### List of available mixins

These are all of the available mixins, and how you can reference them after installing this package:

```scss
@use "node_modules/midt/background-color";
@use "node_modules/midt/border-color";
@use "node_modules/midt/border-radius";
@use "node_modules/midt/border";
@use "node_modules/midt/color";
@use "node_modules/midt/elevation";
@use "node_modules/midt/font";
@use "node_modules/midt/icons";
@use "node_modules/midt/margin";
@use "node_modules/midt/opacity";
@use "node_modules/midt/padding";
@use "node_modules/midt/transitions";
@use "node_modules/midt/z-index";
```

## Testing

Run `npm run sass` to compile the `style.scss` test file to `style.css`.
