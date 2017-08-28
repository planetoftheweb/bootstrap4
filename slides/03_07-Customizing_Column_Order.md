<!-- .slide: data-state="title" -->
# Bootstrap 4
Customizing Order

> > Speaker Notes:
One of the advanced ways you to control layouts is to customize the order of columns. You can reorder how your layouts work at different screen widths. There's two ways to do this by using using flex order or using push and pull. Let's take a look.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Flex Order

<ul>
	<li class="fragment"><p contenteditable>`flex(-BP)-ORD`</p>
	<small style="line-height: 220%; vertical-align: text-bottom;">
		<b>BP:</b> <code style="background:#5cb85c; color:white;">sm</code> >576px 
		<code style="background:#5cb85c; color:white;">md</code> >768px 
		<code style="background:#5cb85c; color:white;">lg</code> >992px 
		<code style="background:#5cb85c; color:white;">xl</code> >1200px
		</small><br>
		<small style="line-height: 220%; vertical-align: text-bottom;"> 
		<b>ORD:</b> <code style="background:#D95357; color:white;">first</code> <code style="background:#D95357; color:white;">last</code> <code style="background:#D95357; color:white;">unordered</code> 	</small>
	</li> 
</ul>

> > Notes: 
1. The formula for flex order columns is pretty simple, you include the word flex, then optionally a breakpoint at which the order will take effect and finally either first if you want that column to appear first, last of course if last and unordered if you want the column to follow the traditional DOM order.
 

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Push & Pull

<ul>
	<li class="fragment"><p contenteditable>`ACT(-BP)-ORD`</p>
<br>
		<small style="line-height: 220%; vertical-align: text-bottom;"> 
		<b>ACT:</b> <code style="background:#5BC0DE; color:white;">push</code> <code style="background:#5BC0DE; color:white;">pull</code>	</small>
	<small style="line-height: 220%; vertical-align: text-bottom;">
		<b>BP:</b> <code style="background:#5cb85c; color:white;">sm</code> >576px 
		<code style="background:#5cb85c; color:white;">md</code> >768px 
		<code style="background:#5cb85c; color:white;">lg</code> >992px 
		<code style="background:#5cb85c; color:white;">xl</code> >1200px
		</small><br>
		<small style="line-height: 220%; vertical-align: text-bottom;"> 
		<b>ORD:</b> <code style="background:#D95357; color:white;">1-12</code> 	</small>
	</li> 
</ul>

> > Notes: 
1. You can also push or pull columns. This is how things worked in Bootstrap 3, so if you're used to it, it works great. pushing moves a column at an optional breakpoint to the right and of course pulling moves it back to the left. With a combination of these two, you can reorder your columns whichever way you want.
 


## Conclusion
Bootstrap makes it easy to reorder columns at different breakpoints, which, when you think about it is a really powerful way of creating flexible layouts.