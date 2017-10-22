<!-- .slide: data-state="title" -->
# Bootstrap 4
Visibility

> > Speaker Notes:
It's super common to show or hide certain elements in our layouts. Bootstrap provides a number of classes as well as breakpoints to help you take care of this. We've already covered them in the video on the display classes, but there's a couple of new classes available to manage screen readers. Let's take a look at how they work.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Visibility

<ul>
	<li class="fragment"><p contenteditable>`invisible`, `visible`</p>
  <li class="fragment"><p contenteditable>`d(-BP)-TYP`</p>
	<small style="line-height: 120%; vertical-align: text-bottom;"><b>BP:</b> <code style="background:#5cb85c; color:white;">sm</code> >576px
<code style="background:#5cb85c; color:white;">md</code> >768px
<code style="background:#5cb85c; color:white;">lg</code> >992px
<code style="background:#5cb85c; color:white;">xl</code> >1200px
<br><b>TYP:</b>
    <code style="background:#D95357; color:white;">none</code>
    <code style="background:#D95357; color:white;">inline</code>
		<code style="background:#D95357; color:white;">inline-block</code>
    <code style="background:#D95357; color:white;">block</code><br>
    <code style="background:#D95357; color:white;">table</code>
    <code style="background:#D95357; color:white;">table-cell</code>
    <code style="background:#D95357; color:white;">flex</code>
    <code style="background:#D95357; color:white;">inline-flex</code>
		</small>
	</li>
</ul>

> > Note:
1. There's two ways of controlling visibility in bootstrap. The first is to use either the visible or invisible class. Now, these do not change the display property, but they are useful for showing or hiding elements from screen readers.
2. Most of the time you'll want to use the display property. Although we already covered it on the movie on display properties, it's useful to repeat it again here. It allows you to change the display of an item using breakpoints and either the keyword none or one of the other regular display properties.
