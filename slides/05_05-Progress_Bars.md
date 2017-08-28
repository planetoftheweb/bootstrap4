<!-- .slide: data-state="title" -->
# Bootstrap 4
Progress Bars

> > Speaker Notes:
If you need to create progress bars, bootstrap makes it easy with a number of classes to take care of them.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-signal"></i> Progress Classes

<ul>
	<li class="fragment">`progress` containers</li>
	<li class="fragment">`progress-bar` item</li>
	<li class="fragment">Style `width`, `height`</li>
	<li class="fragment">Label text</li>
</ul>

> > Speaker Notes:
1. In order to create progress bars, you need two sets of tags, The main container is the progress container and then internally, you create a container with the progress bar class.
2. To control the width and height of the progress bar, you can use either the width classes or the style attribute in css to control the width and height.
3. If you want to add a label, you can include text in between the internal progress-bar element.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-signal"></i> Progress Styles
<ul>
	<li class="fragment"><p contenteditable>Use `bg-COLOR`</p>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<code style="background:#5cb85c; color:white;">success</code>
			<code style="background:#5bc0de; color:white;">info</code>
			<code style="background:#f0ad4e; color:white;">warning</code>
			<code style="background:#D9534E; color:white;">danger</code>
		</small>
	</li>
	<li class="fragment">`progress-bar-striped`</li>
	<li class="fragment">`progress-bar-animated`</li>
	<li class="fragment">Multiple bars</li>
</ul>

> > Speaker Notes:
1. The bars are the primary or blue color by default, if you want to you can use one of the contextual color classes to change the color or context.
2. There is an alternate style you can use called progress bar striped
3. If you want to animate the striping, you can use the progress-bar-animated
4. You can also use as many bars as you want by adding multiple progress-bar components inside the main progress bar element.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-signal"></i> Accessibility Properties

<ul>
	<li class="fragment">`role="progressbar"`</li>
	<li class="fragment">`aria-valuenow`</li>
	<li class="fragment">`aria-valuemin`</li>
	<li class="fragment">`aria-valuemax`</li>
</ul>

> > Speaker Notes:
1. You should use a series of tags to handle accessibility like role="progressbar" to identify this as a progress bar.
2. aria-value-now to store the current value of the bar.
3. aria-valuemin holds the minimum value of the element.
4. aria-valuemax holds the maximum value of the element.
## Demo

## Conclusion
Progress bars are one of those components that aren't heavily used, but can be handy when building applications.