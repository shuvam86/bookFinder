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

            var wrapperDiv = document.createElement('div');
            wrapperDiv.className = 'media';
            // create img element for images
            var image = document.createElement('img');
            image.className = 'mr-3';
            image.src = book.items[i].volumeInfo.imageLinks.thumbnail;
           
            var div = document.createElement('div');
            div.className = 'media-body';
            
            var header = document.createElement('h2');
            header.className = 'mt-0';
            header.innerHTML = book.items[i].volumeInfo.title;
            
            div.appendChild(header);
            wrapperDiv.appendChild(image);
            wrapperDiv.appendChild(div);
            
            var author = document.createElement('h6');
            author.innerHTML = '<b>Author: </b>' + book.items[i].volumeInfo.authors;
            div.appendChild(author);
         
            var country = document.createElement('p');
            country.innerHTML = '<b>Country:</b>' + ' ' + book.items[i].accessInfo.country;
            div.appendChild(country);
            
            var pageCount = document.createElement('p');
            pageCount.innerHTML = '<b>Pages:</b>' + ' ' + book.items[i].volumeInfo.pageCount;
            div.appendChild(pageCount);
            
            var year = document.createElement('p');
            year.innerHTML = '<b>Published:</b>' + ' ' + book.items[i].volumeInfo.publishedDate;
            div.appendChild(year);
            
            var publisher = document.createElement('p');
            publisher.innerHTML = '<b>Publisher:</b> ' + book.items[i].volumeInfo.publisher;
            div.appendChild(publisher);
            
            var desc = document.createElement('p');
            desc.innerHTML = book.items[i].volumeInfo.description;
            div.appendChild(desc);
          
            var link = document.createElement('a');
            link.innerHTML = 'View more';
            link.href = book.items[i].volumeInfo.previewLink;
            div.appendChild(link);
           
            var line = document.createElement('hr');
            
            bookResult.appendChild(wrapperDiv);
            bookResult.appendChild(line);
                
            }
        }
    })



}