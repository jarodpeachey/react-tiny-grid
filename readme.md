React Tiny Grid is a grid system for React that makes it dead-simple to use complex flexbox layouts. It uses a 12-column system, making it easy to create responsive layouts.

### Table of Contents

- [🚀 Getting Started](https://github.com/jarodpeachey/react-tiny-grid#getting-started)
- [💬 Usage](https://github.com/jarodpeachey/react-tiny-grid#adding-comment-functionality)
- [🎨 Accepted Props](https://github.com/jarodpeachey/triangle-comments#custom-configuration)

## Getting Started

To get started, just install `@react-tiny-grid/core` using NPM or Yarn.

```
npm install --save @react-tiny-grid/core
```

```
yarn add @react-tiny-grid/core
```

## Usage

To start using React Tiny Grid, simply import the `Row` and `Column` components from `@react-tiny-grid/core`.

```
import { Row, Column } from '@react-tiny-grid/core';
```

### Minimal Configuration

React Tiny Grid works out-of-the-box, so all you have to do is wrap each Column with a Row.

```
<Row> 
 <Column />
 <Column />
 <Column />
 <Column />
 <Column />
 <Column />
</Row>
```

React Tiny Grid will automatically resize each column, without letting any child element overflow. The `Row` component will wrap the columns if needed.

### Custom Breakpoints and Widths

You can specify certain widths for each column at different screen sizes. First, pass in a `breakpoints` prop to the `Row` component. This prop accepts an array of up to 3 breakpoints.

```
<Row breakpoints={[769, 960]} />
```

Then, you pass in a `widths` prop to each Column component. The value of this prop has to be an array with a length equal to the `breakpoints` array.

```
<Row breakpoints={[769, 960]}> 
 <Column widths={[4, 3]} />
 <Column widths={[8, 9]} />
</Row>
```

### Custom Spacing

You can change the vertical and horixontal gap between the columns using the `spacing` prop. This accepts an array of 2 numbers; the horizontal spacing (in px) and the vertical spacing.

```
<Row spacing={[12, 24]} /> 
```

You can also pass in one number, which will set both the horizontal and vertical spacing.

```
<Row spacing={12} /> 
```

React Tiny Grid also gives you the option to override the spacing for individual columns. Just pass a `spacing` prop to the `Column` component you want to override.

```
<Column spacing={[12, 24]} /> 
```

### Max Columns Per Row

In some cases, you'll want to limit the number of columns that can appear in one row (usually using the auto layout). You can do this by passing a single number to the `maxColumnCount` on the `Row` component.

```
<Row maxColumnCount={3} /> 
```

### Column Offsets

You can also offset each column by using the `offsets` prop. This prop accepts an array of numbers equal in length to the `breakpoints` array defined in the `Row` component. The value must be a number between 1 and 12.

```
<Row breakpoints={[576, 769]}> 
 <Column widths={[4, 4]} offsets={[1, 0]} />
 <Column widths={[3, 6]} offsets={[1, 0]} />
 <Column widths={[3, 7]} offsets={[4, 1]} />
 <Column widths={[6, 3]} />
 <Column widths={[3, 9]} />
 <Column widths={[4, 4]} />
</Row>
```

In the above example, the first and second columns will be offset by one column between 576px and 769px. After 769px, however, they will have no offset.

## Accepted Props

### `Row` Props

| Name             | Type   | Default  | Description                                     |
| :--------------- | :----- | :------- | :---------------------------------------------- |
| `className`      | string | ''       | Give the wrapper a class name to style via CSS  |
| `id`             | string | ''       | See above, but it's an ID this time             |
| `breakpoints`    | array  | [769]    | Set up to three custom breakpoints for the grid |
| `spacing`        | array  | [12, 12] | Set the horizontal and vertical gutter width    |
| `maxColumnCount` | number | 12       | Limit the number of columns per row             |

### `Column` Props

| Name        | Type   | Default  | Description                                                                    |
| :---------- | :----- | :------- | :----------------------------------------------------------------------------- |
| `className` | string | ''       | Give the wrapper a class name to style via CSS                                 |
| `id`        | string | ''       | See above, but it's an ID this time                                            |
| `widths`    | array  | ['auto'] | Set the number of columns taken up for each breakpoint                         |
| `spacing`   | array  | [12, 12] | Set the horizontal and vertical gutter width. Overrides the `Row` spacing prop |
| `widths`    | array  | ['auto'] | Set the number of columns to offset the wrapper by.                            |

## Support

React Tiny Grid is always improving. If you've got any issues or bugs, please create an issue here on Github. If you've got questions, you can email me at jarodpeachey@gmail.com
