## QnA 🗨️🫣

---

#### 🔰 Q1: `What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?`

#### Answer: 👇

Actually they area almost the same thing but different in key points.
`document.getElementById` only selects one element with the same id.

`document.getElementsByClassName` selects all the `elements` with the same `class` attribute.

`document.querySelector` is are new in the `neighborhood` which does the same stuff but in a modern way. `document.querySelector` selects only the first maching element. wether it's an `id` or its a `class`.

`document.querySelector` has soft soft spot for both but the first element which it finds only. It doesn't look for any other in it's lifetime again.

on the controrary, the `document.querySelectorAll` method is like i'll hunt every single one of you in my territory and put you in a cage and show you guys as my hunting medals to the programmer. and then he will decide `wether to kill you or corrupt you all.`

---

#### 🔰 Q2: `How do you **create and insert a new element into the DOM**?`

#### Answer: 👇

well theres a simple way and there is a hard way. the easy way is to use `template strings` and insde of the string we write the element just like we used to write inside of a `.html` file. and the hard way is to create the element in a programmatic way and then we will go to the next stage which is inserting into an element.

well, it's more of a simple task. first you hunt down the target element with the help of `document.getElementById()` OR `document.getElementsByClassName()` OR `document.querySelector()` OR `document.querySelectorAll()` and we store that element into a variable which is going to be a `constant`

then, we inject/insert the `element` inside of the hunted element with the help of `.innerHTML = <the element we just created />;`

---

#### 🔰 Q3: `What is **Event Bubbling** and how does it work?`

#### Answer: 👇

`event bubbling` is like a flow of wave in water. you throw a rock on a point of the `pond` and the waves created and slowly spreading from the `point` to all on the surface to the last border of the pond. just like you click on a deeply nested element and it creates a bubble. which goes from the targetted button to the top level which is the top level of the `DOM` tree. we can add event listers and do all kinds of stuff with this feature.

---

#### 🔰 Q4: `What is **Event Delegation** in JavaScript? Why is it useful?`

#### Answer: 👇

`Event Delegation` is a feature in js which allows us to be efficient instead of writing too much code. it used `event bubbling` as its argument kind of thingy.

in short, we add an event listener on the parent element and listen for event bubbling and with the help of `event.target`. we can do differen kinds of stuff with event listeners instead of adding like `50` different `event listeners` on each and every single one of them.

---

#### 🔰 Q5: `What is the difference between **preventDefault() and stopPropagation()** methods?`

#### Answer: 👇

`preventDefault()` is like a little dude who is in charge of one and only element only. but `stopPropagation()` is like the big guy who is the big dawg who does the job of holding down a wave of a huge tide or tied, what ever it is.

`preventDefault()` blocks the `default behavior` of an individula element.

on hte controray, the `stopPropagation()` blocks the flow of the `event bubbling` going to the top level of the `DOM`.

---
