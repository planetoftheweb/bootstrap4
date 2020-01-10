<!-- .slide: data-state="title" -->
# Bootstrap 4
Media Element

> > Speaker Notes:
It's really common to have layouts where text an images are side by side and the content doesn't wrap. For this task, bootstrap gives you a series of media classes that are much simpler to use now that they're based on flexbox.

---p

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> Media Classes

<ul>
	<li class="fragment">`media` containers</li>
	<li class="fragment">`media-body`</li>
	<li class="fragment">Flexbox classes</li>
	<li class="fragment">Change order</li>
</ul>

> > Speaker Notes:
1. There are only two classes involved when working with media elements. The first is the container class called media. It sets up the two column format between the image and the content.
1. To separate the content from the image, you use a media-body class for the content you want to sit on the second column.
2. There is no special spacing between images and the separate colum, but you can easily use flexbox classes to align content. So to align images, you can use align-self-start, align-self-center, align-self-end. You can also use the spacing classes to add spacing to individual elements or the media objects.
3. If you want to change the order, just put the media-body first and again use margins to space elements.


## Demo

## Conclusion
If you don't like any of those options, you can use any of the column or flexbox layout options that you're familiar with. Make sure you take a look at the videos on working with the grid and flexbox layouts for more info.