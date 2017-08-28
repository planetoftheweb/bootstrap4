<!-- .slide: data-state="title" -->
# Bootstrap 4
Form Style Options

>> Speaker Notes:
There's a few classes that let you control the size and validation styles for forms. Let's take a look at them.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-check-square-o"></i> Form Styles

<ul>
	<li class="fragment">`form-control-sm`</li>
	<li class="fragment">`form-control-lg`</li>
	<li class="fragment">`form-inline`</li>
</ul>

>> Speaker Notes:
1. The form controls can be two additional sizes, to make them smaller, add the form-control-sm class
2. To make them bigger, use form-control-lg
3. If you need to make a label and a field appear side by side, then use the form-inline class on the form group.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-check-square-o"></i> Validation Styles

<ul>
	<li><p contenteditable>`has-COLOR`</p>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<code style="background:#FFF; border: 1px solid #5cb85c; color:#888;">success</code>
			<code style="background:#FFF; border: 1px solid #f0ad4e; color:#888;">warning</code>
			<code style="background:#FFF; border: 1px solid #D9534E; color:#888;">danger</code>
		</small>
	</li>
	<li class="fragment"><p contenteditable>`form-control-COLOR`</p>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<code style="background:#FFF; border: 1px solid #555; color:#5cb85c;">success</code>
			<code style="background:#FFF; border: 1px solid #555; color:#f0ad4e;">warning</code>
			<code style="background:#FFF; border: 1px solid #555; color:#D9534E;">danger</code>
		</small>
	</li>
</ul>

>> Speaker Notes:
1. There's a couple of validation styles that you can use. You can use javascript to trigger these if you want.  Form-control and then one of the classes gives your input fields a highlighted outline.
2. has-success styles the labels and adds a validation icon.

## Demo

```
    <div class="form-group form-inline has-success">
      <label class="form-control-label" for="owneremail">Email address</label>
      <input class="form-control mx-sm-3 form-control-success" type="email" id="owneremail" aria-describedby="emailHelp" placeholder="Enter email">
      <small class="form-text text-muted" id="emailHelp">We'll never share your email</small>
    </div><!-- form-group -->
```

## Conclusion
There's just a few styles that you can use to enhance your forms with things like sizes and validation styles.