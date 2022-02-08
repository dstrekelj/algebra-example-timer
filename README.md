# Timer

Simple countdown timer widget.

## Instructions

Include the stylesheet in the head of your document:

```html
<link rel="stylesheet" href="style.css">
```

Include the script at the end of the body of your document:

```html
<script src="app.js"></script>
```

Use the `timer` ID to set the timer. Use the `data-start-time` and `data-blink-time` data attributes on the timer element to set the time from which countdown starts, and time at which the time begins to blink. Use the `data-action-start` attribute on the element that, when clicked, starts the timer.

```html
<div id="timer" class="timer" data-start-time="10" data-blink-time="5"></div>
<button data-action-start>Start timer</button>
```