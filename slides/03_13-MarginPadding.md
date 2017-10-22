<!-- .slide: data-state="title" -->
# Bootstrap 4
Margin/Padding

> > Speaker Notes:
One of the riches group of classes in Bootstrap are the spacing classes. This mimics exactly the margin and padding classes in CSS. They look really complicated, but once you get used to them, you'll pick them up quickly. Let's take a look.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Margin/Padding

<ul>
	<li class="fragment"><p contenteditable>`PRO(SID)(-BP)-SIZ`</p>
		<small style="line-height: 120%; vertical-align: text-bottom;">
			<b>PRO:</b>
			<code style="background:#0275D8; color:white;">m</code> margin
			<code style="background:#0275D8; color:white;">p</code> padding
		</small><br>
		<small style="line-height: 120%; vertical-align: text-bottom;">
			<b>SID:</b>
			<code style="background:#F0AD4E; color:white;">t</code>
			<code style="background:#F0AD4E; color:white;">r</code>
			<code style="background:#F0AD4E; color:white;">b</code>
			<code style="background:#F0AD4E; color:white;">l</code>
			<code style="background:#F0AD4E; color:white;">x</code>
			<code style="background:#F0AD4E; color:white;">y</code>
		</small><br>
		<small style="line-height: 120%; vertical-align: text-bottom;">
			<b>BP:</b> <code style="background:#5cb85c; color:white;">sm</code> >576px
			<code style="background:#5cb85c; color:white;">md</code> >768px
			<code style="background:#5cb85c; color:white;">lg</code> >992px
			<code style="background:#5cb85c; color:white;">xl</code> >1200px
		</small><br>
		<small style="line-height: 120%; vertical-align: text-bottom;">
			<b>SIZ:</b>
			<code style="background:#D95357; color:white;">0</code>
			<code style="background:#D95357; color:white;">1</code>
			<code style="background:#D95357; color:white;">2</code>
			<code style="background:#D95357; color:white;">3</code>
			<code style="background:#D95357; color:white;">4</code>
			<code style="background:#D95357; color:white;">5</code>
			<code style="background:#D95357; color:white;">auto</code>
		</small>
	</li>
</ul>


> > Note:
1. First is margin and padding. Bootstrap provides a few classes that will let you add margin and padding to different elements. They work just like their CSS counterparts, so this should easily make sense. To activate it, you use a property, then optionally a side. Notice that there is no hyphen between the property and the side like in the other classes. The sides are just like in HTML top, right, bottom, left. The x option is for right and left and the y option is for top and bottom. You can optionally add a breakpoint like with other spacing parameters and then a size. The sides are in numbers from 1-5. The base size for each of these is based on a variable that is preset at 1 rem so these are mutiples of that. Using the number 1 means a space of .25rem, two is .5rem, three is 1rem, 4 is 1.5rem and 5 is 3 rem.
