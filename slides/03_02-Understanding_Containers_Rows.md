<!-- .slide: data-state="title" -->
# Bootstrap 4
Layout Grid Containers

> > Speaker Notes:
One of the main reasons people use bootstrap is to be able to easily layout content that's responsive.  This is the most important thing you should master in bootstrap.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> The Grid

<ul>
	<li class="fragment">Responsive 12-column</li>
	<li class="fragment">Flexbox Based</li>
	<li class="fragment">Structure
		<ul>
			<li class="fragment">containers</li>
			<li class="fragment">rows/columns</li>
		</ul>
	</li>
</ul>

> > Speaker Notes:
1. The grid is a responsive 12-column system for creating just about any layout you can think of.
1. It uses a technology called flexbox that makes it easier to create complex layouts with minimal code.
1. In order to work with the grid, you neet to masters three simple components. 
1. First is containers, which can be used with or without the grid to align content either to the viewport or to center it around a set of breakpoints.
1. Next is rows and columns, they work together to allow you to create the layouts. The rows prepare the columns for layout. Columns are both complex and extremely flexible, so we'll cover them in a separate video. Let's take a look at containers.


---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Grid Containers

<ul>
	<li class="fragment">`container`</li>
	<li class="fragment">`container-fluid`</li>
	<li class="fragment">15px padding</li>
	<li class="fragment"><p>Adjusts to breakpoints</p>
			<small style="line-height: 220%; vertical-align: text-bottom;">
			<code style="background:#5cb85c; color:white;"><576px</code>
			<code style="background:#5cb85c; color:white;">576px</code>
			<code style="background:#5cb85c; color:white;">768px</code>
			<code style="background:#5cb85c; color:white;">992px</code>
			<code style="background:#5cb85c; color:white;">1200px</code>
			</small>
	</li> 
</ul>



> > Speaker Notes:

1. There are two different types of containers, regular containers which center content and  snap to certain grid points.

1. Or fluid containers, which are always the full width of the viewport, which means the width of the device or browser window.

1. One of the reasons you use a container is because you get a 15px padding on each side to make sure it works well with backgrounds.

1. You can see the breakpoints that the regular container locks into.

## Demo

## Conclusion
As I mentioned, you'll see these colors prop up all over bootstrap to color things and that includes buttons, cards and other interface elements.