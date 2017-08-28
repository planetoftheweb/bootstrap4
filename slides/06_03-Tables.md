<!-- .slide: data-state="title" -->
# Bootstrap 4
Tables

>> Speaker Notes:
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

>> Speaker Notes:
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

>> Speaker Notes:
1. You can add borders to the table using table-bordered.
2. You can also create a style that changes the background to a slight gray background when the mouse is over it.
3. If the content is too wide, then you can use table-responsive class which allows you to scroll horizontally if the content doesn't fit. This is actually new in this version of bootstrap. In the older version you had to wrap a container around the table, so this is definitely better.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-table"></i> Jumbotron Classes

<ul>
	<li class="fragment"><p contenteditable>Use `table-COLOR` on `row` / `td`</p>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<code style="background:#D1D1D1; color:#555;">active</code>
			<code style="background:#dff0d8; color:#555;">success</code>
			<code style="background:#d9edf7; color:#555;">info</code>
			<code style="background:#fcf8e3; color:#555;">warning</code>
			<code style="background:#f2dede; color:#555;">danger</code>
		</small>
	</li>
	<li class="fragment"><p contenteditable>`bg-COLOR` for backgrounds</p>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<code style="background:#0275d8; color:white;">primary</code>
			<code style="background:#5cb85c; color:white;">success</code>
			<code style="background:#5bc0de; color:white;">info</code>
			<code style="background:#f0ad4e; color:white;">warning</code><br>
			<code style="background:#D9534E; color:white;">danger</code>
			<code style="background:#292b2c; color:white;">inverse</code>
			<code style="background:#f7f7f7; color:black;">faded</code>
		</small>
	</li>	
</ul>

>> Speaker Notes:
1. You can use a number of other color classes for backgrounds, which you can do on rows or individual cells.
2. There are some light classes for making the backgrounds different colors.
3. If you want to, you can also use the traditional bg-color classes as well.

## Demo

## Conclusion
Tables is one of those features I really like about bootstrap. Styling tables can be challenging with CSS, so these styles are really awesome.