<!-- .slide: data-state="title" -->

# Bootstrap 4

Text Utilities

> > Speaker Notes: Bootstrap provides several utility classes that can help you take care of common typography needs, so let's take a look at what they are and try them out.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-font"></i> Alignment Utilities

- `text-justify`
- `text-wrap`/`text-nowrap`
<p contenteditable>`text(-XX)-POS`</p>
<div class="sample">
	<b>XX:</b> <code class="btn bg-success text-white">sm</code> >576px
		<code class="btn bg-success text-white">md</code> >768px
		<code class="btn bg-success text-white">lg</code> >992px
		<code class="btn bg-success text-white">xl</code> >1200px
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

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-font"></i> Text Styles

- `font-weight-light(er)`
- `font-weight-bold(er)`
- `font-weight-normal`
- `font-italic`

> > Speaker Notes:

1. There's a few classes that change the weight or style of the text. font-weight-bold of course makes the text bold.

1. font-weight-normal will change the font to a normal weight.

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

1. There's a few classes that change the weight or style of the text. font-weight-bold of course makes the text bold.

1. font-weight-normal will change the font to a normal weight.

1. and of course font-italic will change the style of text to italic.

1. This will give you three dots called ellipsis on certain elements with a class or block or inline-block.

## Conclusion

These classes make it easy to handle common typography tasks. It might seem weird for there to be classes for font-weights and styles, but these days frameworks have to take care of more than just css and handle frameworks that write inline CSS and otherwise change an application while it is running.
