let head = document.getElementById('tophead');

function headExtend() {
    head.classList.add('headActive');
}

function headCollapse() {
    head.classList.remove('headActive');
}



const cars = document.querySelectorAll('.leftpic');
const carsl = document.querySelectorAll('.rightpic');
const wordl = document.querySelectorAll('.wordleft');
const wordr = document.querySelectorAll('.wordright');


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        if(entry.isIntersecting)observer.unobserve(entry.target);
    })
},
    {
        threshold: 0.3,
    }
)



cars.forEach(car => {
    observer.observe(car);
})
carsl.forEach(carl => {
    observer.observe(carl);
})
wordl.forEach(word => {
    observer.observe(word);
})
wordr.forEach(word => {
    observer.observe(word);
})




const pics = document.querySelectorAll('.portraits')

function hoverlisten(){
    pics.forEach(pic => {
        pic.addEventListener('mouseenter', () => {
            pic.classList.add('portraitup');
        })
        pic.addEventListener('mouseleave', () => {
            pic.classList.remove('portraitup');
        })
    })
}
hoverlisten();

const nature = document.querySelectorAll('.picturecollapse');

function naturehover(){
    console.log("jatt");
    nature.forEach(np =>{
        np.addEventListener('click', () =>{
            if (!np.classList.contains('pictureactive')){
                const temp = np;
                nature.forEach(npr =>{
                    npr.classList.remove('pictureactive');
                    temp.classList.add('pictureactive');
                })
            }
        })
    })
}
naturehover();