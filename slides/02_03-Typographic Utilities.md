<!-- .slide: data-state="title" -->
# Bootstrap 4
Text Utilities

>> Speaker Notes:
Bootstrap provides several utility classes that can help you take care of common typography needs, so let's take a look at what they are and try them out.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-font"></i> Alignment Utilities

<ul>
	<li class="fragment">`text-justify`</li>
	<li class="fragment">`text-nowrap`</li>
	<li class="fragment"><p contenteditable>`text(-XX)-POS`</p>
			<small style="line-height: 220%; vertical-align: text-bottom;">
				<b>XX:</b> <code style="background:#5cb85c; color:white;">sm</code> >576px 
				<code style="background:#5cb85c; color:white;">md</code> >768px 
				<code style="background:#5cb85c; color:white;">lg</code> >992px 
				<code style="background:#5cb85c; color:white;">xl</code> >1200px
			</small><br>
			<small style="line-height: 220%; vertical-align: text-bottom;"> 
				<b>POS:</b> <code style="background:#D95357; color:white;">left</code> &nbsp;
				<code style="background:#D95357; color:white;">center</code> &nbsp;
				<code style="background:#D95357; color:white;">right</code>
			</small>


	</li> 
</ul>

>> Speaker Notes:
1. text-justify lets you do full justification within the browser, so that the edges of text align instead of being ragged.

1. If you need to turn off wrapping for some content, you can use text-nowrap. That can be useful if you have a long line of text that's just going to be copied, but you don't need to display the whole thing.

1. One of textual utility classes lets you control the alignment of your content. What's really cool is that the alignment can change based on the width of the browser or viewport. The formula looks like this.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-font"></i> Capitalization

<ul>
	<li>`text-lowercase`</li>
	<li class="fragment">`text-uppercase`</li>
	<li class="fragment">`text-capitalize`</li>
</ul>

>> Speaker Notes:
1. Although you can take care of some things through css, Bootstrap provides a few utility classes that let you control things like the case of the text. Lowercase will of course turn uppercase letters in some text to lowercase. 

1. Of course Uppercase capitalizes all of the letters.

1. text-capitalize capitalizes the first letter of each word, but leaves the case of other letters alone.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-font"></i> Text Styles

<ul>
	<li>`font-weight-bold`</li>
	<li class="fragment">`font-weight-normal`</li>
	<li class="fragment">`font-italic`</li>
</ul>

>> Speaker Notes:
1. There's a few classes that change the weight or style of the text. font-weight-bold of course makes the text bold.

1. font-weight-normal will change the font to a normal weight.

1. and of course font-italic will change the style of text to italic.

## Conclusion
These classes make it easy to handle common typography tasks. It might seem weird for there to be classes for font-weights and styles, but these days frameworks have to take care of more than just css and handle frameworks that write inline CSS and otherwise change an application while it is running.