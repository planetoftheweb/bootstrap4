<!-- .slide: data-state="title" -->
# Bootstrap 4
Scrollspy

> > Speaker Notes:
Toasts are little notification style boxes you usually see in desktop and mobile operating systems.

---

## How Toasts Work

- Initializing
- Positioning
- Auto hide

---

## Using Toasts

- `toast`
- `toast-header`
- `toast-body`

> > Speaker Notes:


## Conclusion

```
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded mr-2" alt="...">
    <strong class="mr-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>

```
