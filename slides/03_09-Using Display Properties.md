<!-- .slide: data-state="title" -->
# Bootstrap 4
Position/Display

>> Speaker Notes:
There are other ways besides the grid to control how elements are positioned in bootstrap. Let's take a look at what they are and how to use them.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Position
<ul>
	<li class="fragment"><p contenteditable>Position classes</p>
	<small style="line-height: 220%; vertical-align: text-bottom;">		<code style="background:#D95357; color:white;">fixed-top</code>
		<code style="background:#D95357; color:white;">fixed-bottom</code>
		<code style="background:#D95357; color:white;">sticky-top</code>
		</small>
	</li>
	<li class="fragment">`sticky-top` [lacks support](http://caniuse.com/#search=sticky)</li>
</ul>

>> Notes:
Let's talk about the position property. If you are familiar with CSS, this one works just like the regular CSS position property.
1. There are three options here, you can use a fixed-top or fixed bottom, which just like with the CSS version removes the content from the flow in the current document and attaches them to the top or bottom of the screen. When you do this, you'll probably need to adjust your CSS because the content will float on top of other content. Finally, there's the sticky-top property. That will automatically make certain content stick as it goes past a certain location, but it's not well supported in browsers, especially microsoft browsers.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Basic Display
<ul>
	<li class="fragment">Mimics CSS</li>
	<li class="fragment"><p contenteditable>`d-TYPE`</p>
	<small style="line-height: 220%; vertical-align: text-bottom;">		<b>ALN:</b>
		<code style="background:#D95357; color:white;">block</code>
		<code style="background:#D95357; color:white;">inline</code>
		<code style="background:#D95357; color:white;">inline-block</code>
		<code style="background:#D95357; color:white;">flex (options)</code>
		</small>
	</li>
</ul>

>> Notes: 
1. The display properties mimic what is possible with CSS and opens up Bootstrap to flexbox classes that can help with layouts.
2. To use a display class, you use the d- and then the type of display property you want to use. block, inline, inline-block or flex. Flex has a ton of options. We'll cover the basic container in this video and explore it further in the next.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Basic Flex Container

<ul>
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

>> Note: By far, a flex display element has the most options. To use flex in your layouts, you'll need to use a flex container. A flex container has the following format.


## Conclusion
Position, the display property and especially the flex option will give you a new way to develop layotus that's not available with just the bootstrap grid. There's a lot of options in flex, let's take a look in the next video.