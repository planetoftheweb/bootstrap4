<!-- .slide: data-state="title" -->
# Bootstrap 4
Stretched Links

> > Speaker Notes:
Stretched links solve a pretty common problem on sites where if you want a link inside a container to trigger clicks in it's parent, you'd have to do some crazy things to get it to work.

---

## Stretched Links

- `stretched-link`
- Cards, columns
- Position, transform
- Immediate parent

> > Speaker Notes:

1. Stretched links use a css ::after pseudo element. to make it's container block be clickable. The element has to have a position relative assigned to it, which are the defaults on things like cards and columns.

They can't be used in things like media elements, but those are probably not going to be around much longer.

To make sure they work, you have to have a position value other than static, a transform or perspective other than none and a filter value other than none.

1. Also, the link has to be a direct child, you can't put it inside a sub-container or the trick won't work.
