const skill_wrap = document.querySelector(".skills");
const skill_bars = document.querySelectorAll(".skill-progress");

const filter_btns = document.querySelectorAll('.filter-btn');


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


