<!-- .slide: data-state="title" -->
# Bootstrap 4
Individual Flex Elements

> > Speaker Notes:
So far, we've been looking at how we control the display of a group of elements. In this video, I'll focus on how to do that with individual individual items. There's quite a few options, so let's take a look and then work through some code.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Align Self

<ul>
	<li class="fragment"><p contenteditable>`align-self(-BP)-ALG`</p>
	<small style="line-height: 120%; vertical-align: text-bottom;">
		<b>BP:</b> <code style="background:#5cb85c; color:white;">sm</code> >576px
		<code style="background:#5cb85c; color:white;">md</code> >768px
		<code style="background:#5cb85c; color:white;">lg</code> >992px
		<code style="background:#5cb85c; color:white;">xl</code> >1200px
	</small><br>
	<small style="line-height: 120%; vertical-align: text-bottom;">
		<b>ALG:</b>
		<code style="background:#D95357; color:white;">start</code>
		<code style="background:#D95357; color:white;">end</code>
		<code style="background:#D95357; color:white;">center</code>
		<code style="background:#D95357; color:white;">baseline</code>
		<code style="background:#D95357; color:white;">stretch</code>
	</small><br>
	</li>
</ul>

> > Note:
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
