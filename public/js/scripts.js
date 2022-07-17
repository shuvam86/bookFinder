// window.onload= function() {
//     document.getElementById('pg').style.color= 'red';
// }

// function findBook() {
//     document.getElementById('hm').innerHTML= 'Bhelcome';
// }

function findBook() {
    var userSearch= document.getElementById('userInput').value;
    // document.getElementById('hm').innerHTML= userSearch;
    var bookResult= document.getElementById('hm');

    bookResult.innerHTML= "";

    $.ajax({
        type: "GET",  //to get the data: GET method. to post the data: POST method
        url: "https://www.googleapis.com/books/v1/volumes?q=" + userSearch,
        dataType: "JSON",
        success: function(book) {         //when we do ajax request the book data will be received in JSON format via this 'book' (in form of object)
            console.log(book);
            for (let i=0;i<book.items.length; i++) {
            // var image= document.createElement('img');
            // var line= document.createElement('hr');
            // image.src= book.items[i].volumeInfo.imageLinks.thumbnail;
            // document.getElementById('hm').appendChild(image);
            // document.getElementById('hm').appendChild(line);

                var image = document.createElement('img');
                image.className = 'mr-3';
                image.src = book.items[i].volumeInfo.imageLinks.thumbnail;
                var div = document.createElement('div');
                div.className = 'media-body';
                var header = document.createElement('h5');
                header.className = 'mt-0';
                header.innerHTML = book.items[i].volumeInfo.title;
                div.appendChild(header);
                bookResult.appendChild(image);
                bookResult.appendChild(div);
                var line = document.createElement('hr');
                bookResult.appendChild(line);
                
            }
        }
    })



}