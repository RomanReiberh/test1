fetch("https://jsonplaceholder.typicode.com/photos?_limit=5")
            .then(response => response.json())
            .then(data => {
                var gallery = document.getElementById("gallery");

                var photos = data.flatMap(photo => Array(4).fill(photo));

                photos.forEach(photo => {
                    var imgElement = document.createElement("img");
                    imgElement.src = photo.thumbnailUrl;
                    imgElement.alt = photo.title;
                    gallery.appendChild(imgElement);
                });
            })
            .catch(error => console.error("Ошибка:", error));