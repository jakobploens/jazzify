# Jazzify

Jazzify is a collection of often used little helper functions. Like jQuery in easy and lightweight.

### Moral License / Support me

You can buy a moral license and support me with buying me a cup of coffee via [PayPal](https://www.paypal.me/jakobploens/3,50).

### Functions

```javascript
var object = document.querySelector('.selector');

// Get objects faster – shortcut for above function.
var object = $('.selector');

// Add className to object
object.addClass('className');

// Remove className from object
object.removeClass('className');

// Returns true if object has className
object.hasClass('className');

// Toggle a class of object
object.toggleClass('className');

// Remove object from DOM
object.remove();

// Add CSS to object or get style
object.css('style', 'value');

// Get or set data
object.data('name', 'value');

// Get or set attribute
object.attr('name', 'value');

// Loop through a NodeList with multiple elements
object.each(function(index, element){
    // do something. element is the current element.
});

// Merge two objects
merge(objectA, objectB);
```