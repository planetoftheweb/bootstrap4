<!-- .slide: data-state="title" -->
# Bootstrap 4
Nesting Columns

>> Speaker Notes:
You can easily put a whole new gird of columns inside an existing column. That's called nesting...let's take a look at how it works.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-th"></i> Nesting



<ul>
	<li class="fragment">`row` inside column</li> 
	<li class="fragment">Creates 12-col grid</li> 
	<li class="fragment">Use same classes</li> 
</ul>



>> Notes: 
1. To nest columns, you simple create a new row inside an existing column.
1. This will create a new regular 12 column grid inside your existing columns.
2. Inside this new grid, you can use the same set of classes.
 
## Demo
```
<div class="row no-gutters special">
	<div class="col-2 col-sm-4"><img class="img-thumbnail" src="images/image.png" alt="sample image"></div>
	<div class="col-2 col-sm-4"><img class="img-thumbnail"  src="images/image.png" alt="sample image"></div>
	<div class="col-2 col-sm-4"><img class="img-thumbnail"  src="images/image.png" alt="sample image"></div>
	<div class="col-2 col-sm-4"><img class="img-thumbnail" src="images/image.png" alt="sample image"></div>
	<div class="col-2 col-sm-4"><img class="img-thumbnail"  src="images/image.png" alt="sample image"></div>
	<div class="col-2 col-sm-4"><img class="img-thumbnail"  src="images/image.png" alt="sample image"></div>
</div>

## Conclusion
This is probably a bit less useful than it used to be, especially when you learn about some of the alignment options we now have, but you never know when an offset will be just the thing you need to get your layouts going.