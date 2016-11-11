# Styleguide

## Install the business
 
This project was started using [Middleman](http://middlemanapp.com) and will require Ruby (2.3.1)

- `git clone [this project]`
- `bundle install`
- `middleman server`
- Navigato to `localhost:4567`

## Dependencies

- [Middleman](http://middlemanapp.com)
- [Bourbon / Neat](http://bourbon.io/)
- [FontAwesome](https://github.com/FortAwesome/Font-Awesome)
- [HAML](http://haml.info/)

## UI Components

### App Bar

The `App Bar` should be visible on the *SERP* only. Ideally, as the user scrolls down the list of available hotels, the `App Bar` becomes sticky giving them the ability to control their trip at all times.

*Source Files*

* HAML `~/source/partials/_app-bar.haml`
* SCSS `~/source/styleshees/_app-bar.scss`

### Colors

This section contains the available brand + UI colors available to create a unified, visual language. We are trying to maintain a clean aesthetic with the UI so colors sparingly. **Please consult with the design team if you are unsure when to use the appropriate colors**

*Source Files*

* HAML `~/source/partials/_colors.haml`
* SCSS `~/source/styleshees/_colors.scss`
* Styleguide Example styles can be found at `~/source/styleshees/site.css.scss`


### Typography


#### Misc
**Map demo**

* http://support.avuxi.com/code/GMWithoutWidgetDemo.html