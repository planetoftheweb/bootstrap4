<!-- .slide: data-state="title" -->
# Bootstrap 4
Rows/Columns

> > Speaker Notes:
Although Containers with rows prepare the content for layout, to take full advantage of the 12 column grid, you have to master the use of columns. Let's take a look at how the basic columns work.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Rows

<ul>
	<li class="fragment">Require Rows</li>
	<li class="fragment">Only columns in rows</li>
	<li class="fragment">`no-gutters` deletes gutters</li>
</ul>

> > Notes:
1. Rows prepare your layout for the grid. They are required in order to use columns. They use negative margins to get rid of the spacing that containers add. That makes sense because if you are going to have columns, you probably want space in between the columns and not at the edges.

1. You place the content you want inside columns, not rows. the ONLY element that sits inside a row should be columns. Although you can use containers without rows or columns...in order to use columns, you must use rows. Columns won't work properly without rows.

1. You can use a special class called .no-gutters to remove spacing between rows...just in case you need some columns with no gutter spacing.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Columns

<ul>
	<li class="fragment">12 Column Grid</li>
	<li class="fragment">Columns can span</li>
	<li class="fragment"><p contenteditable>`col(-BP)(-COL)`</p>
	<small style="line-height: 220%; vertical-align: text-bottom;">
		<b>BP:</b> <code style="background:#5cb85c; color:white;">sm</code> >576px 
		<code style="background:#5cb85c; color:white;">md</code> >768px 
		<code style="background:#5cb85c; color:white;">lg</code> >992px 
		<code style="background:#5cb85c; color:white;">xl</code> >1200px
		</small><br>
		<small style="line-height: 220%; vertical-align: text-bottom;"> 
		<b>COL:</b> <code style="background:#D95357; color:white;">1-12</code> 	</small>
	</li> 
</ul>

> > Notes: 
1. You can place content in a 12 column grid and control how the content is placed into those rows.

1. Columns can be set to automatically size using the col class, they can pass along a size at which they'll convert to the full width of the viewport and they can also be set to span a certain amount of rows. Sort of like an excel spreadsheet.

1. Adding a breakpoint to a column definition will determine when the column converts from taking the full width of the device or window.

## Demo

## Conclusion
As I mentioned, you'll see these colors prop up all over bootstrap to color things and that includes buttons, cards and other interface elements.