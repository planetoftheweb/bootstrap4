<!-- .slide: data-state="title" -->

# Bootstrap 4

Text Utilities

> > Speaker Notes: Bootstrap provides several utility classes that can help you take care of common typography needs, so let's take a look at what they are and try them out.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-font"></i> Alignment Utilities

- `text-justify`
- `text-wrap`/`text-nowrap`
- <span contenteditable>`text(-XX)-POS`</span>
<div class="sample">
<b>XX:</b> <code class="btn bg-success text-white">sm</code> >576px
<code class="btn bg-success text-white">md</code> >768px
<code class="btn bg-success text-white">lg</code> >992px
<code class="btn bg-success text-white">xl</code> >1200px<br>
<b>POS:</b> <code class="btn bg-danger text-white">left</code> &nbsp;
<code class="btn bg-danger text-white">center</code> &nbsp;
<code class="btn bg-danger text-white">right</code>
</div>

> > Speaker Notes:

1. text-justify lets you do full justification within the browser, so that the edges of text align instead of being ragged.

1. If you need to turn off wrapping for some content, you can use text-nowrap. That can be useful if you have a long line of text that's just going to be copied, but you don't need to display the whole thing.

1. One of textual utility classes lets you control the alignment of your content. What's really cool is that the alignment can change based on the width of the browser or viewport. The formula looks like this.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-font"></i> Capitalization

- `text-lowercase`
- `text-uppercase`
- `text-capitalize`
- `text-monospace`

> > Speaker Notes:

1. Although you can take care of some things through css, Bootstrap provides a few utility classes that let you control things like the case of the text. Lowercase will of course turn uppercase letters in some text to lowercase.

1. Of course Uppercase capitalizes all of the letters.

1. text-capitalize capitalizes the first letter of each word, but leaves the case of other letters alone.

1. text-monospace changes the font to a typewriter style like courier that has equal spacing between characters. This is often used with code.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-font"></i> Text Styles

- `font-weight-light(er)`
- `font-weight-bold(er)`
- `font-weight-normal`
- `font-italic`

> > Speaker Notes:

1. There's a few classes that change the weight or style of the text. You can use lighter, which would be the lightest, or font-weight light.

1. There' also font-weight-bold and font-weight-bolder to create increased weights.

1. font-weight-normal will change the font to a normal weight and it's the default, so you don't need it most of the time unless you're trying to reset a weight programmatically.

1. and of course font-italic will change the style of text to italic.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-font"></i> Text Modifiers

- `text-decoration-none`
- `text-reset`

> > Speaker Notes:

1. Since links are underlined by default, you can use the text-decoration-none class to turn the underlines off if you want

1. This class will remove some text or link's color, so that it is the same color as the parent, so it will ignore any colors specified here.


---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-font"></i> Flow

- `text-wrap`
- `text-nowrap`
- `text-break`
- `text-truncate`

> > Speaker Notes:

1. To control flow, we have a number of classes like text-wrap, which changes the way content will wrap inside an element.

1. Text-nowrap forces the content from wrapping inside an element.

1. There's also a text-break class, which prevents long strings of text from breaking your layouts.

1. Finally text-truncate chops off extra text and replaces it with three dots...also called an ellipsis.

## Conclusion

These classes make it easy to handle common typography tasks. It might seem weird for there to be classes for font-weights and styles, but these days frameworks have to take care of more than just css and handle frameworks that write inline CSS and otherwise change an application while it is running.
