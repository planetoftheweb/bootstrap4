<!-- .slide: data-state="title" -->
# Bootstrap 4
Customizing Order

> > Speaker Notes:
One of the advanced ways you to control layouts is to customize the order of columns. You can reorder how your layouts work at different screen widths. You can do this using new order classes in your grid. Let's take a look.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Order

<ul>
	<li class="fragment"><p contenteditable>`order(-BP)-ORD`</p>
	<small style="line-height: 120%; vertical-align: text-bottom;">
		<b>BP:</b> <code style="background:#5cb85c; color:white;">sm</code> >576px
		<code style="background:#5cb85c; color:white;">md</code> >768px
		<code style="background:#5cb85c; color:white;">lg</code> >992px
		<code style="background:#5cb85c; color:white;">xl</code> >1200px
		</small><br>
		<small style="line-height: 120%; vertical-align: text-bottom;">
		<b>ORD:</b> <code style="background:#D95357; color:white;">1-12</code> 	</small>
	</li>
</ul>

> > Notes:
1. The formula for flex order columns is pretty simple, you include the word flex, then optionally a breakpoint at which the order will take effect and finally either first if you want that column to appear first, last of course if last and unordered if you want the column to follow the traditional DOM order.



## Conclusion
Bootstrap makes it easy to reorder columns at different breakpoints, which, when you think about it is a really powerful way of creating flexible layouts.
