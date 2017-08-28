<!-- .slide: data-state="title" -->
# Bootstrap 4
Alignment

>> Speaker Notes:
Because Bootstrap uses flexbox to control layouts, you can use many new classes to control how elements align to one another. Let's take a look.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Vertical Alignment

<ul>
	<li class="fragment">Use in rows</li>
	<li class="fragment"><p contenteditable>`align-items-ALN`</p>
	<small style="line-height: 220%; vertical-align: text-bottom;">		<b>ALN:</b>
		<code style="background:#D95357; color:white;">start</code>
		<code style="background:#D95357; color:white;">center</code>
		<code style="background:#D95357; color:white;">end</code>
		</small>
	</li>
	<li class="fragment">Works on nested cols</li>
</ul>

>> Notes: 
1. To align columns in the grid, there's a few classes you can add to the rows.
1. the classes begin with align-items and then either start, center or end.
1. Sometimes, to get the desired effect, you need to nest the columns.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Spacing Elements

<ul>
	<li class="fragment"><p contenteditable>`PRO-SID(-BP)-SIZ`</p>
	<small style="line-height: 220%; vertical-align: text-bottom;">		<b>ALN:</b>
		<code style="background:#D95357; color:white;">start</code>
		<code style="background:#D95357; color:white;">center</code>
		<code style="background:#D95357; color:white;">end</code>
		</small>
	</li>
</ul>

>> Notes: 
1. You can align individual column elements with classes.
1. The classes start with align-self and then either start, center or end.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Horizontal Alignment

<ul>
	<li class="fragment">Use in rows</li>
	<li class="fragment">Need col width</li>
	<li class="fragment"><p contenteditable>`justify-content-ALN`</p>
	<small style="line-height: 220%; vertical-align: text-bottom;">		<b>ALN:</b>
		<code style="background:#D95357; color:white;">start</code>
		<code style="background:#D95357; color:white;">center</code>
		<code style="background:#D95357; color:white;">end</code>
		<code style="background:#D95357; color:white;">around</code>
		<code style="background:#D95357; color:white;">between</code>
		</small>
	</li>
</ul>

>> Notes: 
1. If some rows are set to take up a certain amount of space in the grid you can add some classes to the rows to control how the spacing behaves around the elements.
1. You have to specify how many units these columns take up, so you can't just use these with the col keyword by itself because that will take up the whole width of the row depending on how many cols you have.
1. The options are start, which will put the columns at the beginning with the extra space towards the end; center, which puts the extra space on each side of the columns; end which puts the columns towards the end with the extra space before; around, which tries to put equal space between the columns and the edges and finally content-between which puts the extra space in between the columns.

## Conclusion
Flexbox makes something that difficult to do like vertical alignment easy and the bootstrap classes mimic what you do with flexbox. That makes this framework  a great way to handle layout tasks.