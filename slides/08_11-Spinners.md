<!-- .slide: data-state="title" -->
# Bootstrap 4
Spinners

> > Speaker Notes:

Spinners are a cool new component that lets you give some feedback to the user when you need them to wait.

---
<!-- .slide: data-state="hasicon" -->

## <i class="fas fa-circle-notch"></i> Spinners

- <p contenteditable>`spinner-TYP(-SIZ)`</p>
<div class="sample">
<b>TYP:</b>
<code class="btn bg-danger text-white">border</code>
<code class="btn bg-danger text-white">grow</code>
</div>
<div class="sample">
<b>SIZ:</b>
<code class="btn bg-success text-white">sm</code>
</div>
- `text-COL` for color

> > Speaker Notes:

1. Creating spinners is pretty easy. You create an element with a class of spinner and then add a type. There are two types...either spinner-border or spinner grow. border looks like a partial circle with a thick outline and spinner grow looks like a pulsating dot. We'll see them in a minute.

1. You can optionally add a size attribute and there is only one size other than the default, which is sm.

1. You change the color of spinnre by using the contextual text color classes, so you can add a class here like text-primary, text-secondary or any others.
