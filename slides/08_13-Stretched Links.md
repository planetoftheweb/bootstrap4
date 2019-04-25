<!-- .slide: data-state="title" -->
# Bootstrap 4
Toasts

> > Speaker Notes:
Toasts are little notification style boxes you usually see in desktop and mobile operating systems.

---

## Using Toasts

- `toast`, data-delay
- `toast-header`
- `toast-body`

> > Speaker Notes:

1. There's only three tags you have to remember. The main container class is of course toast.

1. You can also create a header for your toast using the toast header class in an element. This is a good place to add something that will close the toast.

1. The main content for the toast goes in a container with a class of toast body.


---

## Data Attributes

- `animation` : true
- `autohide` : true
- `delay` : 500

> > Speaker Notes:

1. There are three different data attributes you can add, Toasts use a fade animation by default, but you can turn that off by adding data-animation in your main container.

1. Toasts will also stay on screen for a short time unless, but you can turn this off with an data-autohide parameter. If you do set this to false, you'll probably want to create a closing buttons

1. You should set a delay that allows people to read your content clearly.

---

## Setup

- JS activation
- Positioning
- `data-dismiss="toast"`

> > Speaker Notes:
1. Toasts need to be turned on with some javascript or they won't work at all.

1. They also need to be positioned with some CSS. Traditionally the appear on the top right of the screen.

1. To close a toast, you should add a data-dismiss toast on a button or element.

## Conclusion
These types of notifications can be real effective in apps and other projects and I expect some more work to be done to improve toasts.
