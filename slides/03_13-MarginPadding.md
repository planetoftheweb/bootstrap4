<!-- .slide: data-state="title" -->
# Bootstrap 4
Margin/Padding

> > Speaker Notes:
One of the riches group of classes in Bootstrap are the spacing classes. This mimics exactly the margin and padding classes in CSS. They look really complicated, but once you get used to them, you'll pick them up quickly. Let's take a look.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Margin/Padding

- <p contenteditable>`PRO(SID)(-BP)-(N)SIZ`</p>
<div class="sample">
	<b>PRO:</b>
	<code class="btn bg-primary text-white">m</code> margin
	<code class="btn bg-primary text-white">p</code> padding
</div>
<div class="sample">
	<b>SID:</b>
	<code class="btn bg-warning text-white">t</code>
	<code class="btn bg-warning text-white">r</code>
	<code class="btn bg-warning text-white">b</code>
	<code class="btn bg-warning text-white">l</code>
	<code class="btn bg-warning text-white">x</code>
	<code class="btn bg-warning text-white">y</code>
</div>
<div class="sample">
	<b>BP:</b>
	<code class="btn bg-success text-white">sm</code> >576px
	<code class="btn bg-success text-white">md</code> >768px
	<code class="btn bg-success text-white">lg</code> >992px
	<code class="btn bg-success text-white">xl</code> >1200px
</div>
<div class="sample">
	<b>SIZ:</b>
	<code class="btn bg-danger text-white">0</code>
	<code class="btn bg-danger text-white">1</code>
	<code class="btn bg-danger text-white">2</code>
	<code class="btn bg-danger text-white">3</code>
	<code class="btn bg-danger text-white">4</code>
	<code class="btn bg-danger text-white">5</code>
	<code class="btn bg-danger text-white">auto</code>
</div>


> > Note:
1. First is margin and padding. Bootstrap provides a few classes that will let you add margin and padding to different elements. They work just like their CSS counterparts, so this should easily make sense. To activate it, you use a property, then optionally a side. Notice that there is no hyphen between the property and the side like in the other classes. The sides are just like in HTML top, right, bottom, left. The x option is for right and left and the y option is for top and bottom. You can optionally add a breakpoint like with other spacing parameters and then a size. The sides are in numbers from 1-5. The base size for each of these is based on a variable that is preset at 1 rem so these are mutiples of that. Using the number 1 means a space of .25rem, two is .5rem, three is 1rem, 4 is 1.5rem and 5 is 3 rem.
