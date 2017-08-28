<!-- .slide: data-state="title" -->
# Bootstrap 4
Working with Images

>> Speaker Notes:
Bootstrap has some really useful classes that help you deal with images, so let's take a look.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-picture-o"></i> Basic Images

<ul>
	<li class="fragment">`img-fluid` responsive images</li>
	<li class="fragment"><p>`rounded`, `rounded-DIR` round edges</p>
		<small style="line-height: 220%; vertical-align: text-bottom;"><code>top</code> <code>right</code> <code>bottom</code> <code>left</code><br> <code>circle</code> <code>rounded-0</code></small>
	</li>
	<li class="fragment">`img-thumbnail` rounded 1px border</li>
</ul>

>> Speaker Notes:

1. One of the most useful image classes is the img-fluid class. If you add that to an image, the image becomes responsive, which means a max-width attribute of 100% and a height of auto.
1. If you want rounded edges, you can use the word rounded or add a direction to the word, top, right, bottom, left, which should be self explanatory or circle, which makes the image look like a circle and rounded-0, which gets rid of any roundness the picture currently had.
1. There is an additional style that adds a 1 px rounded edge around the image called img-thumbnail.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-picture-o"></i> Aligning Images

<ul>
	<li class="fragment">`float-left` or `float-right`</li>
	<li class="fragment">`text-center` center inline</li>
	<li class="fragment">`mx-auto` center block</li>
</ul>

>> Speaker Notes:
1. If you need to align images, you can use the float-left or float-right class, which will also work for other elements.

1. Traditionally, images are inline elements, so you should be able to use text-center on the container element.

1. If the image happens to be a block element, you can use the mx-auto class to center the element.

## Demo


---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-picture-o"></i> Figures

<ul>
	<li class="fragment">`figure` on the `<figure>` tag</li>
	<li class="fragment">`figure-img` on the images</li>
	<li class="fragment">`figure-caption` on the text</li>
</ul>

>> Speaker Notes:
1. If you're going to use the figure tag to add captions to your images, you can use a series of classes to help with that. To get started, you add a figure class to the main figure tag.

1. Then, you add figure-img to the image

1. Finally, you add figure caption on the text. If you want to, you can use other alignment utility classes to handle the alignment of the elements.

## Demo

## Conclusion
Bootstrap creates a lot of classes to help you improve the way images and figures work in your layouts. These are pretty easy to learn and help you make