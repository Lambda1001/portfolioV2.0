const d = new Date();


window.addEventListener('load',()=>{
    console.log("Welcome to my website.");
    
    const year = document.getElementById('year');

    year.innerHTML = d.getFullYear();
})

tippy('#css', {
    content: 'CSS',
})

tippy('#bootstrap', {
    content: 'Bootstrap',
})

tippy('#vue', {
    content: 'Vue',
})

tippy('#laravel', {
    content: 'Laravel'
})

tippy('#sql', {
    content: 'SQL',
})