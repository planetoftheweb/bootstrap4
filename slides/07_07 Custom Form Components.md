<!-- .slide: data-state="title" -->
# Bootstrap 4
Custom Form

> > Speaker Notes:
Custom form elements are a way to make forms look more similar in different browsers. They do make your code a bit less flexible, but offer you nice using controls.

---

## Custom Controls
- <p contenteditable>`custom-TYP`</p>
<div class="sample">
<b>TYP:</b>
<code class="btn bg-danger text-white">select(-sm)(-lg)</code>
<code class="btn bg-danger text-white">radio</code>
<code class="btn bg-danger text-white">checkbox</code>
<code class="btn bg-danger text-white">switch</code>
<code class="btn bg-danger text-white">range</code>
<code class="btn bg-danger text-white">file-input</code>
</div>
- `custom-control-label`
- `custom-control`
- `custom-control-input`

> > Speaker Notes:

1. You create custom controls by assigning one of the custom tag and then adding a type. The select tag allows you to use a size modifier of small or large if so that you can match other input fields.

1. You can use a label as usual, but where you place the label is more critical.

1. Some complex controls like radio and buttons need to have an additional custom control class, which will replace the form-group class you usually add to create checkbox or radio groups. When you create those groups, the custom-radio or checkbox go in the same parent container.

1. Then in the individual radio or checkbox fields you use a custom-control-input class.
