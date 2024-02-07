var arr = [
    { img: 'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { img: 'https://images.unsplash.com/photo-1556683944-ba658344ba06?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D' },
    { img: 'https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D' },
    { img: 'https://images.unsplash.com/photo-1584720223124-466ff369e7c2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D' },
    { img: 'https://images.unsplash.com/photo-1616394585067-d3e824140aa1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D' }
];

var content = '';
var grow = 0;
var intervalId;
arr.forEach(function(element, index){
    content += `<div class="story">
            <img id="${index}" src="${element.img}" alt="">
    </div>`;
});

document.querySelector('#stories').addEventListener('click', function(event){
    clearInterval(intervalId); // Clear the previous interval
    
    // Display the preview and set its background image
    document.querySelector('.preview').style.display = 'block';
    document.querySelector('.preview').style.backgroundImage = `url(${arr[event.target.id].img})`;

    // Set a timer to hide the preview after 3 seconds
    setTimeout(function(){
        document.querySelector('.preview').style.display = 'none';
    },3000);

    grow = 0; // Reset the progress bar animation
    intervalId = setInterval(function(){
        document.querySelector('.seek').style.width = `${grow++}%`;
        if(grow > 100){
            clearInterval(intervalId); // Clear the interval when animation is complete
        }
    },30);

    // Add click event listener to close button inside the preview
    var close = document.querySelector('#close');
    close.addEventListener('click', function(){
        document.querySelector('.preview').style.display = 'none'; // Hide the preview
        clearInterval(intervalId); // Clear the interval
        grow = 0; // Reset the progress bar animation
    });
});
