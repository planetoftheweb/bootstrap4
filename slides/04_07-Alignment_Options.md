<!-- .slide: data-state="title" -->
# Bootstrap 4
Alignment

> > Speaker Notes:
There are a few ways to control the alignment of your naviation elements. Let's take a quick look.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-bars"></i> Placement Options
<ul>
	<li class="fragment">`fixed-top`</li>
	<li class="fragment">`fixed-bottom`</li>
	<li class="fragment">`sticky-top`</li>
	<li class="fragment">Spacing as needed</li>
</ul>

> > Notes:
1. The main navigation can be placed using the positioning utilities. To place a navigation on top of the screen, you can use fixed top.
2. To align to the bottom, use fixed-bottom, you may have to adjust some of the css to make up for the added space.
3. You can also use the sticky-top class, which will make the navigation stick to the top of the screen as it passes. The problem with sticky top is that it doesn't have good browser supoprt, so take a look at the canIuse website for more info. http://caniuse.com/#search=sticky
4. Finally, you can use spacing classes to take care of  spacing issues.

# Conclusion
Alignment is pretty easy to do with any element because navigation uses flexbox. Some of these placement classes are also pretty useful when building real world navigation elements.
