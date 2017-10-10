<!-- .slide: data-state="title" -->
# Bootstrap 4
Tables

> > Speaker Notes:
One of the best features in Bootstrap is the addition of tables.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-table"></i> Table Classes

<ul>
	<li class="fragment">`table`</li>
	<li class="fragment">`table-inverse`</li>
	<li class="fragment">`thead-inverse`</li>
	<li class="fragment">`table-striped`</li>
</ul>

> > Speaker Notes:
1. Tables look really great when you add the table class. Bootstrap adds some additional spacing and underlines.
2. You can use the table-inverse style to create a table with a black background and white text.
3. You can alternatively create a table head with a black background and white text.
4. You can also use a table-striped gives you a style where every other cell is has a gray background.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-table"></i> Table Classes

<ul>
	<li>`table-bordered`</li>
	<li class="fragment">`table-hover`</li>
	<li class="fragment">`table-sm`</li>
	<li class="fragment">`table-responsive`</li>
</ul>

> > Speaker Notes:
1. You can add borders to the table using table-bordered.
2. You can also create a style that changes the background to a slight gray background when the mouse is over it.
3. If the content is too wide, then you can use table-responsive class which allows you to scroll horizontally if the content doesn't fit. This is actually new in this version of bootstrap. In the older version you had to wrap a container around the table, so this is definitely better.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-table"></i> Jumbotron Classes

<ul>
	<li class="fragment"><p contenteditable>Use `table-COLOR` on `row` / `td`</p>
		<small style="line-height: 120%; vertical-align: text-bottom;">
			<code style="background:rgba(0,0,0,.075); color:#555;">active</code>
			<code style="background:#b8daff; color:#555;">primary</code>
			<code style="background:#dddfe2; color:#555;">secondary</code>
			<code style="background:#c3e6cb; color:#555;">success</code><br>
			<code style="background:#f5c6cb; color:#555;">danger</code>
			<code style="background:#ffeeba; color:#555;">warning</code>
			<code style="background:#bee5eb; color:#555;">info</code>
			<code style="background:#fdfdfe; color:#555;">light</code>
			<code style="background:#c6c8ca; color:#555;">dark</code>
		</small>
	</li>
	<li class="fragment"><p contenteditable>`bg-COLOR` on inverse tables</p>
		<small style="line-height: 120%; vertical-align: text-bottom;">
    <code style="background:#007bff; color:white;">primary</code>
    <code style="background:#28a745; color:white;">success</code>
    <code style="background:#dc3545; color:white;">danger</code>
    <code style="background:#ffc107; color:white;">warning</code>
    <code style="background:#17a2b8; color:white;">info</code>
	</li></ul>

> > Speaker Notes:
1. You can use a number of other color classes for backgrounds, which you can do on rows or individual cells.
2. There are some light classes for making the backgrounds different colors.
3. If you want to, you can also use the traditional bg-color classes as well.

## Demo

## Conclusion
Tables is one of those features I really like about bootstrap. Styling tables can be challenging with CSS, so these styles are really awesome.