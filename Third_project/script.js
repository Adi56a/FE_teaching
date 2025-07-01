const t1  = gsap.timeline();

t1.from('.navbar_partone', {
    opacity:0,
    duration:1,
    y:50,
})

t1.from('.navbar_partwo_child', {
    opacity:0,
    y:50,
    duration:1,
    stagger:0.4,
})



const cursor  = document.querySelector('.cursor')

document.addEventListener('mousemove',(e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;


    cursor.style.left  = `${mouseX - 30}px`;
    cursor.style.top = `${mouseY - 20}px`;
})