<!-- .slide: data-state="title" -->
# Bootstrap 4
Floating Elements

> > Speaker Notes:
Floating elements is a bit less popular now that we have flexbox available to us, but there's still some instances where it might be necessary so let's take a look at how these classes work.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Floating Elements
<ul>
	<li class="fragment"><p contenteditable>`float-(BP)-SID`</p>
		<small style="line-height: 120%; vertical-align: text-bottom;">		<b>BP:</b>
			<code style="background:#5cb85c; color:white;">sm</code> >576px
			<code style="background:#5cb85c; color:white;">md</code> >768px
			<code style="background:#5cb85c; color:white;">lg</code> >992px
			<code style="background:#5cb85c; color:white;">xl</code> >1200px
		</small><br>
		<small style="line-height: 120%; vertical-align: text-bottom;">			<b>SID:</b>
			<code style="background:#D95357; color:white;">left</code>
			<code style="background:#D95357; color:white;">right</code>
			<code style="background:#D95357; color:white;">none</code>
		</small>
	</li>
	<li class="fragment">`clearfix`</li>
</ul>

> > Notes:
1. One of the traditional ways to control the flow of elements is to float them so they appear side by side. The classes to do that are float and then an optional breakpoint, plus either left, right or none just like in CSS.
2. As you probably know, when you float elements, the container is unable to track the height of an element unless you use a clearfix trick, which clears the floats. To do that, Bootstrap provides a clearfix class as well.
