<!-- .slide: data-state="title" -->

# Bootstrap 4

Borders

> > Speaker Notes: It's super common to show or hide certain elements in our layouts. Bootstrap provides a number of classes as well as breakpoints to help you take care of this. We've already covered them in the video on the display classes, but there's a couple of new classes available to manage screen readers. Let's take a look at how they work.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fas fa-square"></i> Borders

- <p contenteditable>`BORDER(-SID)(-COL)(-0)`</p>
	<div class="sample">
		<b>SID:</b>
		<code class="btn bg-primary text-white">top</code>
		<code class="btn bg-primary text-white">right</code>
		<code class="btn bg-primary text-white">bottom</code>
		<code class="btn bg-primary text-white">left</code>
	</div>
		<div class="sample">
			<b>COL:</b>
			<code class="btn bg-primary text-white">primary</code>
			<code class="btn bg-secondary text-white">secondary</code>
			<code class="btn bg-success text-white">success</code>
			<code class="btn bg-danger text-white">danger</code>
			<code class="btn bg-warning text-white">warning</code><br>
			<code class="btn bg-info text-white">info</code>
			<code class="btn bg-light text-dark">light</code>
			<code class="btn bg-dark text-white">dark</code>
			<code class="btn btn-outline-dark text-secondary" style=" border: 1px solid gray; background: transparent">white</code>
		</div>

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-square"></i> Rounded

- <p contenteditable>`ROUNDED(-SID)(-SHA)(-SIZ)`</p>
<div class="sample">
	<b>SID:</b>
	<code class="btn bg-primary text-white">top</code>
	<code class="btn bg-primary text-white">right</code>
	<code class="btn bg-primary text-white">bottom</code>
	<code class="btn bg-primary text-white">left</code>
</div>
<div class="sample">
	<b>SHA:</b>
	<code class="btn bg-danger text-white">circle</code>
	<code class="btn bg-danger text-white">pill</code>
</div>
<div class="sample">
	<b>SIZ:</b>
	<code class="btn bg-success text-white">0</code>
	<code class="btn bg-success text-white">sm</code>
	<code class="btn bg-success text-white">lg</code>
</div>

> > Speaker Notes:

1. Sizing allows you to control the width or height of an element by a set of preset percentages. So, for example w-25 would set the width of an element at 25% of it's container. You can also specify a max-width and a max-height.
