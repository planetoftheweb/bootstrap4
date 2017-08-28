<!-- .slide: data-state="title" -->
# Bootstrap 4
Individual Elements

>> Speaker Notes:
So far, we've been looking at how we control the display of a group of elements. In this video, I'll focus on how to do that with individual individual items. There's quite a few options, so let's take a look and then work through some code.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Floating Elements
<ul>
	<li class="fragment"><p contenteditable>`float-(BP)-SID`</p>
		<small style="line-height: 220%; vertical-align: text-bottom;">		<b>BP:</b>
			<code style="background:#5cb85c; color:white;">sm</code> >576px 
			<code style="background:#5cb85c; color:white;">md</code> >768px 
			<code style="background:#5cb85c; color:white;">lg</code> >992px 
			<code style="background:#5cb85c; color:white;">xl</code> >1200px
		</small><br>
		<small style="line-height: 220%; vertical-align: text-bottom;">			<b>SID:</b>
			<code style="background:#D95357; color:white;">left</code>
			<code style="background:#D95357; color:white;">right</code>
			<code style="background:#D95357; color:white;">none</code>
		</small>
	</li>
	<li class="fragment">`clearfix`</li>
</ul>

>> Notes: 
1. One of the traditional ways to control the flow of elements is to float them so they appear side by side. The classes to do that are float and then an optional breakpoint, plus either left, right or none just like in CSS.
2. As you probably know, when you float elements, the container is unable to track the height of an element unless you use a clearfix trick, which clears the floats. To do that, Bootstrap provides a clearfix class as well.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Margin/Padding

<ul>
	<li class="fragment"><p contenteditable>`PRO(SID)(-BP)-SIZ`</p>
		<small style="line-height: 220%; vertical-align: text-bottom;"> 
			<b>PRO:</b> 
			<code style="background:#0275D8; color:white;">m</code> margin
			<code style="background:#0275D8; color:white;">p</code> padding
		</small><br>
		<small style="line-height: 220%; vertical-align: text-bottom;"> 
			<b>SID:</b> 
			<code style="background:#F0AD4E; color:white;">t</code>
			<code style="background:#F0AD4E; color:white;">r</code>
			<code style="background:#F0AD4E; color:white;">b</code>
			<code style="background:#F0AD4E; color:white;">l</code>
			<code style="background:#F0AD4E; color:white;">x</code>
			<code style="background:#F0AD4E; color:white;">y</code>
		</small><br>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<b>BP:</b> <code style="background:#5cb85c; color:white;">sm</code> >576px 
			<code style="background:#5cb85c; color:white;">md</code> >768px 
			<code style="background:#5cb85c; color:white;">lg</code> >992px 
			<code style="background:#5cb85c; color:white;">xl</code> >1200px
		</small><br>
		<small style="line-height: 220%; vertical-align: text-bottom;"> 
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


>> Note: 
1. First is margin and padding. Bootstrap provides a few classes that will let you add margin and padding to different elements. They work just like their CSS counterparts, so this should easily make sense. To activate it, you use a property, then optionally a side. Notice that there is no hyphen between the property and the side like in the other classes. The sides are just like in HTML top, right, bottom, left. The x option is for right and left and the y option is for top and bottom. You can optionally add a breakpoint like with other spacing parameters and then a size. The sides are in numbers from 1-5. The base size for each of these is based on a variable that is preset at 1 rem so these are mutiples of that. Using the number 1 means a space of .25rem, two is .5rem, three is 1rem, 4 is 1.5rem and 5 is 3 rem.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Sizing

<ul>
	<li class="fragment"><p contenteditable>`SIZ(-AMT)`</p>
		<small style="line-height: 220%; vertical-align: text-bottom;"> 
			<b>SIZ:</b> 
			<code style="background:#0275D8; color:white;">w</code>
			<code style="background:#0275D8; color:white;">h</code>
			<code style="background:#0275D8; color:white;">mw</code>
			<code style="background:#0275D8; color:white;">mh</code>
		</small><br>
		<small style="line-height: 220%; vertical-align: text-bottom;"> 
			<b>AMT:</b> 
			<code style="background:#D95357; color:white;">25</code>
			<code style="background:#D95357; color:white;">50</code>
			<code style="background:#D95357; color:white;">75</code>
			<code style="background:#D95357; color:white;">100</code>
		</small>
	</li> 
</ul>


>>Note: 

1. Sizing allows you to control the width or height of an element by a set of preset percentages. So, for example w-25 would set the width of an element at 25% of it's container. You can also specify a max-width and a max-height.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Visibility

<ul>
	<li class="fragment"><p contenteditable>`invisible` toggles visibility</p>
	<li class="fragment"><p contenteditable>`hidden-BP-DIR`</p>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<b>BP:</b>
			<code style="background:#5cb85c; color:white;">xs</code> <576px 
			<code style="background:#5cb85c; color:white;">sm</code> >576px 
			<code style="background:#5cb85c; color:white;">md</code> >768px 
			<code style="background:#5cb85c; color:white;">lg</code> >992px 
			<code style="background:#5cb85c; color:white;">xl</code> >1200px
		</small><br>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<b>ALG:</b>
			<code style="background:#D95357; color:white;">up</code>
			<code style="background:#D95357; color:white;">down</code>
		</small><br>
	</li>
</ul>

>> Note: 
1. There are a few ways of setting the visibility of an element. There is a invisible class, which toggles the visibility of an element, but leaves the element in place.
2. Another way is the responsive utility classes. They are simpler than before. You use the hidden keyword and then optionally use a breakpoint and then choose a direction up or down. If you choose up. then that breakpoint and all larger breakpoinsts will be hidden. Notice that because of that, we have an additional breakpoint name called XS, which we haven't had in other places. If you choose up, it works downwards. You can use a combination of both to control the visibility as well.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Align Self

<ul>
	<li class="fragment"><p contenteditable>`align-self(-BP)-ALG`</p>
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
		<code style="background:#D95357; color:white;">baseline</code>
		<code style="background:#D95357; color:white;">stretch</code>
	</small><br>
	</li>
</ul>

>> Note: 
1. Now that we studied the remainder of the spacing and visibility classes, it's time to go back to the flexbox class that lets us control each item inside a display flexbox class. The classes here are similar to what we used to order all elements in the previous video, but we can do so for each item.
1. These classes work really well with some of our spacing options, so it's time to go to a demo of all these.

align-items
```
  <style>
    .item {
      background: #f0ad4e;
      text-align: center;
      border: 1px solid white;
      max-height: 30px;
    }
  </style>

  <div class="container bg-danger">
      <div class="bg-info d-flex" style="height:100vh">
        <div class="item px-2">Exotic</div>
        <div class="item px-2">Grooming</div>
        <div class="item px-2">Health</div>
        <div class="item px-2">Nutrition</div>
        <div class="item px-2">Pests</div>
        <div class="item px-2">Vaccinations</div>
      </div>
</div><!-- container -->

```

## Conclusion
With this version of bootstrap, you have incredible control over almost every common display and layout property in HTML. It's really nice to have all of that power available through the framework. As more and more programming languages  manage the DOM by working through javascript to inject layout, this framework becomes more relevant than ever.