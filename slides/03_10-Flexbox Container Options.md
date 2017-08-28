<!-- .slide: data-state="title" -->
# Bootstrap 4
Flex Container Options

>> Speaker Notes:
Let's take a look at the additional options we can add to the flex container to modify the behavior of the items within.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Flex Container

<ul>
	<li class="fragment">Container/item classes</li>
	<li class="fragment"><p contenteditable>`d(-BP)(-inline)-flex`</p>
	<small style="line-height: 220%; vertical-align: text-bottom;">
		<b>BP:</b> <code style="background:#5cb85c; color:white;">sm</code> >576px 
		<code style="background:#5cb85c; color:white;">md</code> >768px 
		<code style="background:#5cb85c; color:white;">lg</code> >992px 
		<code style="background:#5cb85c; color:white;">xl</code> >1200px
		</small><br>
		<small style="line-height: 220%; vertical-align: text-bottom;"> 
	</small>
	</li>
</ul>

>> Note: 
1. In order to lay elements with the display flex property you add classes to either the flex container or the individual elements depending on what you need.
2. Here's the basic formula for the main flex container. You can use breakpoint as well as the optional inline option.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Direction

<ul>
	<li class="fragment"><p contenteditable>`flex(-BP)(-DIR)(-reverse)`</p>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<b>BP:</b> <code style="background:#5cb85c; color:white;">sm</code> >576px 
			<code style="background:#5cb85c; color:white;">md</code> >768px 
			<code style="background:#5cb85c; color:white;">lg</code> >992px 
			<code style="background:#5cb85c; color:white;">xl</code> >1200px
		</small><br>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<b>DIR:</b> <code style="background:#D95357; color:white;">row</code>
			<code style="background:#D95357; color:white;">column</code>
		</small><br>
	</li>
</ul>

>> Note: 
1. For controlling direction, we can use a keyword in our container that lets us control wether the content appears in columns or rows. By default the content will appear in side by side rows, but you can also specify a column and control that using breakpoints. You can optionally reverse the direction of the items with the reverse option.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Justify

<ul>
	<li class="fragment"><p contenteditable>`justify-content(-BP)-ALG`</p>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<b>BP:</b> <code style="background:#5cb85c; color:white;">sm</code> >576px 
			<code style="background:#5cb85c; color:white;">md</code> >768px 
			<code style="background:#5cb85c; color:white;">lg</code> >992px 
			<code style="background:#5cb85c; color:white;">xl</code> >1200px
		</small><br>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<b>ALG:</b>
			<code style="background:#D95357; color:white;">start</code>
			<code style="background:#D95357; color:white;">end</code>
			<code style="background:#D95357; color:white;">center</code>
			<code style="background:#D95357; color:white;">around</code>
			<code style="background:#D95357; color:white;">between</code>
		</small><br>
	</li>
</ul>

>> Note: 
1. Justifying content lets you control the spacing between items. Like other options you can control them with an optional breakpoint. The alignment options are start, which puts the items to the left and extra space to the right. end, which puts the items to the right and the extra space on the left. Center, which is a great way to center content. Around puts the space around and in between options. Between does something similar but makes the edge elements align to the edge. These will make more sense with an example.


---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Wrap

<ul>
	<li class="fragment"><p contenteditable>`flex(-BP)-WRP(-reverse)`</p>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<b>BP:</b> <code style="background:#5cb85c; color:white;">sm</code> >576px 
			<code style="background:#5cb85c; color:white;">md</code> >768px 
			<code style="background:#5cb85c; color:white;">lg</code> >992px 
			<code style="background:#5cb85c; color:white;">xl</code> >1200px
		</small><br>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<b>WRP:</b>
			<code style="background:#D95357; color:white;">wrap</code>
			<code style="background:#D95357; color:white;">nowrap</code>
		</small><br>
	</li>
</ul>

>> Note: 
1. Wrap lets you control wether the elements wrap in relation to the space in their container. There's two options either wrap the elements or to not wrap the elements. You can also include an extra keyword to reverse the order of the elements.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Vertical Alignment

<ul>
	<li class="fragment"><p contenteditable>`align-content(-BP)-ALG`</p>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<b>BP:</b> <code style="background:#5cb85c; color:white;">sm</code> >576px 
			<code style="background:#5cb85c; color:white;">md</code> >768px 
			<code style="background:#5cb85c; color:white;">lg</code> >992px 
			<code style="background:#5cb85c; color:white;">xl</code> >1200px
		</small><br>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<b>ALG:</b>
			<code style="background:#D95357; color:white;">start</code>
			<code style="background:#D95357; color:white;">end</code>
			<code style="background:#D95357; color:white;">center</code>
			<code style="background:#D95357; color:white;">between</code>
			<code style="background:#D95357; color:white;">around</code>
			<code style="background:#D95357; color:white;">stretch</code>
		</small><br>
	</li>
</ul>

>> Note: 
1. Vertical alignment does just what you think, controls the alignment of elements vertically. In addition to the breakpoints, the options are to put the elements towards the beginning or the end, center them vertically, put space in between or around and finally stetch the elements to fit the container.

## Conclusion
Position, the display property and especially the flex option will give you a new way to develop layotus that's not available with just the bootstrap grid. There's a lot of options in flex, let's take a look in the next video.