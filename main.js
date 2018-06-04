// Put an article DOM element in your index.html with the id attribute value of messages.
// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
// Create five (5) section elements, each with a class of message, and with textContent of your choosing.
// Using appendChild(), attach each message as a child to the messages element.

// const mainArt = document.querySelector('#messages');

// const sec1 = document.createElement('section')
// sec1.className = 'message';
// sec1.textContent = "Hello, dear!";
// mainArt.appendChild(sec1);

// const sec2 = document.createElement('section')
// sec2.className = 'message';
// sec2.textContent = 'Hi, Aunt Bertha.  How are you?';
// mainArt.appendChild(sec2);

// const sec3 = document.createElement('section')
// sec3.className = 'messages';
// sec3.textContent = 'I am great.';
// mainArt.appendChild(sec3);

// const sec4 =document.createElement('section')
// sec4.className = 'messages';
// sec4.textContent = 'Wonderful!  How is your trip?';
// mainArt.appendChild(sec4);

// const sec5 = document.createElement('section');
// sec5.className = 'message';
// sec5.textContent = 'The bugs are nice.';
// mainArt.appendChild(sec5);

const fragment = document.createDocumentFragment()

const sec1 = document.createElement('section')
sec1.className = 'message';
sec1.textContent = "Hello, dear!";
fragment.appendChild(sec1);

const sec2 = document.createElement('section')
sec2.className = 'message';
sec2.textContent = 'Hi, Aunt Bertha.  How are you?';
fragment.appendChild(sec2);

const sec3 = document.createElement('section')
sec3.className = 'messages';
sec3.textContent = 'I am great.';
fragment.appendChild(sec3);

const sec4 =document.createElement('section')
sec4.className = 'messages';
sec4.textContent = 'Wonderful!  How is your trip?';
fragment.appendChild(sec4);

const sec5 = document.createElement('section');
sec5.className = 'message';
sec5.textContent = 'The bugs are nice.';
fragment.appendChild(sec5);

document.querySelector('#messages').appendChild(fragment)
