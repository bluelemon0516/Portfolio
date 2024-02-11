'use strict';

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;
    if(filter == null) {
        return;
    }

    // active 메뉴 설정
    const active = document.querySelector('.category__selected');
    active.classList.remove('category__selected');
    event.target.classList.add('category__selected');


    // 프로젝트 필터링 로직
    projectsContainer.classList.add('anim-out');
    projects.forEach((project) => {
        if (filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
    setTimeout( () => {
        projectsContainer.classList.remove('anim-out');
    }, 250);
});