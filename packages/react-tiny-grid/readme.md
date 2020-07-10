# Netlify Comments

A simple package to allow way to add comments to your static website. This package is used in conjunction with [netlify-comments](https://github.com/jarodpeachey/netlify-comments/tree/master/packages/netlify-comments).

### Table of Contents

- [🚀 Getting Started](https://github.com/jarodpeachey/netlify-comments#getting-started) - [Setting Up Your Website](https://github.com/jarodpeachey/netlify-comments#setting-up-your-website) - [Installing Packages](https://github.com/jarodpeachey/netlify-comments#installing-packages) - [Configuration](https://github.com/jarodpeachey/netlify-comments#configuration)
- [💬 Adding Comment Functionality](https://github.com/jarodpeachey/netlify-comments#adding-comment-functionality) - [Adding a Form](https://github.com/jarodpeachey/netlify-comments#adding-a-form) - [Displaying Your Comments](https://github.com/jarodpeachey/netlify-comments#displaying-your-comments)
- [🎨 Custom Configuration](https://github.com/jarodpeachey/netlify-comments#custom-configuration)

## Getting Started

### Installing Packages

To get started, just install `netlify-comments` and the Gatsby plugin, `gatsby-plugin-netlify-comments`.

**Using NPM:**

```
npm install --save netlify-comments gatsby-plugin-netlify-comments
```

**Using Yarn:**

```
yarn add netlify-comments gatsby-plugin-netlify-comments
```

### Configuration

In order to use Netlify Comments with Gatsby, you need to add the plugin to your `gatsby-config.js` file at the root of your project.

```
module.exports = {
	...,
	plugins: [
		...,
		{
			resolve: 'gatsby-plugin-netlify-comments',
			options: {
				...
			},
		}
	]
}
```

After updating your `gatsby-config.js` file, you need to add a few options to the configuration in order for netlify to work.

First, you need a Netlify site ID. This can be found from your Netlify site dashboard by visiting **Settings > General > Site details > Site information**. Copy the value for **API ID** and store it in your environment variables as NETLIFY_SITE_ID. Then, use the environment variable as the value for the `siteID` options in `gatsby-config.js`

```
options: {
	...,
	siteID: process.env.NETLIFY_SITE_ID
}
```

The second mandatory value in the options object is the `apiKey`. This must be created manually in Netlify. Visit your **User Settings > Applications** at this link: [(Personal Access Tokens)](https://app.netlify.com/user/applications#personal-access-tokens)

Click "New Access Token" and follow the steps to generate a new API token. Copy this value and store it in your environment variables as `NETLIFY_TOKEN`. Then, update your options configuration in `gatsby-config.js` to use this new value.

```
options: {
	...,
	siteID: process.env.NETLIFY_SITE_ID,
	apiKey: process.env.NETLIFY_TOKEN
}
```

## Adding Comment Functionality

Netlify Comments is set up to automatically filter all comments by page and only display the ones for that page. This means that you can have as many comment forms as you'd like on your site.

The package comes with 2 main components: `Form` and `Comments`. `Form` is the comment form, while `Comments` is the component that displays your comments (go figure 🤷‍♂️)

### Adding a Form

To add a comment form to your page, just import it

```
import { Form } from 'netlify-comments';
```

and add it wherever you please

```
<Form {props} />
```

This form can be customized, but we'll get to that later. First, you have to display your comments somewhere!

### Displaying Your Comments

To display your comments, simply import the Comments compoment

```
import { Comments } from 'netlify-comments';
```

and add it wherever you'd like. Usually, this would be directly below the `Form`

```
<Form {props} />
<Comments {props} />
```

## Custom Configuration

Because everyone likes to do things their own way.

Netlify Comments allows you to customize the styling of your Form and your Comments components by accepting style props.

Netlify Comments uses `styled-components` for styling, so you can pass any valid `styled-components` syntax through these props.

To customize the form, use these two props: the `inputStyles` prop and the `buttonStyles` prop.

```
<Form inputStyles={`padding: 0; background: red; outline: none;`} />
```

To customize the comment display, use these props: the `wrapperStyles`, `replyStyles`, `commentStyles`, and `nameStyles` props.

```
<Comments wrapperStyles={`padding: 16px; box-shadow: 2px 2px 6px -2px #00000090;`} />
```

## Support

Netlify Comments is currently in beta stages, and is constantly evolving and improving. If you have any questions or need help setting up netlify, you can open an issue on [Github](https://github.com/jarodpeachey/netlify-comments/issues) or email me at jarodpeachey@gmail.com
