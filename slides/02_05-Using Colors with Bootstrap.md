<!-- .slide: data-state="title" -->
# Bootstrap 4
Using Colors


>> Speaker Notes:
Bootstrap has a number of colors that you can access through contextual color names. They are used all over the place including buttons, background colors as well as text. We'll run into these throughout the framework, but let's take a look at the options available for text and backgrounds.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-square-o"></i> Colors

<ul>
	<li class="fragment"><p contenteditable>`text-COLOR` for text</p>
		<small style="line-height: 220%; vertical-align: text-bottom;"><code style="color:#0275d8">primary</code> <code style="color:#5cb85c">success</code> <code style="color:#5bc0de">info</code> <code style="color:#f0ad4e">warning</code><br> <code style="color:#D9534E">danger</code> <code style="color:#FFFFFF">white</code></small>
	</li>
	<li class="fragment"><p>Use for links</p>
		<small style="line-height: 220%; vertical-align: text-bottom;"><code><a href="#" style="color:#0275d8">primary</a></code> <code><a href="#" style="color:#5cb85c">success</a></code> <code><a href="#" style="color:#5bc0de">info</a></code> <code><a href="#" style="color:#f0ad4e">warning</a></code><br> <code><a href="#" style="color:#D9534E">danger</a></code> <code ><a href="#" style="color: #636c72">muted</a></code></small>
	</li>
</ul>

>> Speaker Notes:
1. You use the word text, and then one of the color keywords like: primary, success, info, warning, danger, white or muted and that will turn the text that color.

1.You can use the same classes for links, but notice that there is no white link and there is an extra muted class.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-square-o"></i> Colors

<ul>
	<li><p contenteditable>`bg-COLOR` for backgrounds</p>
		<small style="line-height: 220%; vertical-align: text-bottom;"><code style="background:#0275d8; color:white;">primary</code> <code style="background:#5cb85c; color:white;">success</code> <code style="background:#5bc0de; color:white;">info</code> <code style="background:#f0ad4e; color:white;">warning</code><br> <code style="background:#D9534E; color:white;">danger</code> <code style="background:#292b2c; color:white;">inverse</code>  <code style="background:#f7f7f7; color:black;">faded</code></small>
	</li>
</ul>


>> Speaker Notes:
1. Another way you can use them is to color the background of elements, there are a couple of extra colors here called inverse for a reversed look as well as faded for a light gray background.

## Demo

## Conclusion
As I mentioned, you'll see these colors prop up all over bootstrap to handle different elements and that includes buttons, cards and other interface items.