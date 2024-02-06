function showSideBar(e){
    let sidebar = document.querySelector('.mobile-sidebar');
    console.log(sidebar);
    sidebar.style.display = 'flex';

}


function hideSideBar(e){
    let sidebar = document.querySelector('.mobile-sidebar');
    sidebar.style.display = 'none';
}