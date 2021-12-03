const skill_wrap = document.querySelector(".skills");
const skill_bars = document.querySelectorAll(".skill-progress");
const filter_btns = document.querySelectorAll('.filter-btn');
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

function closeMenu()
{
    navbar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
}
hamburger_menu.addEventListener("click", ()=>{
    if(!navbar.classList.contains("open"))
    {
        document.body.classList.add("stop-scrolling");
        navbar.classList.add("open");
    }else{
        closeMenu();
    }
})

links.forEach((link) => link.addEventListener("click", ()=>closeMenu()))

filter_btns.forEach(btn => btn.addEventListener('click', ()=>{
    filter_btns.forEach(button => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;
    console.log(filterValue);
}))


window.addEventListener("scroll",()=>{
    skillsEffect();
})
function checkScroll(el)
{
    var rect = el.getBoundingClientRect();
    if(window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
}

function skillsEffect()
{
    if(!checkScroll(skill_wrap)) return;
    skill_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));

}


