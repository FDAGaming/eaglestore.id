document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('expanded');
        if (sidebar.classList.contains('expanded')) {
            sidebar.style.width = '250px';
            sidebarItems.forEach(item => {
                const text = item.querySelector('span');
                if (text) text.style.display = 'inline';
            });
            sidebar.querySelector('.sidebar-logo').style.display = 'block';
        } else {
            sidebar.style.width = '60px';
            sidebarItems.forEach(item => {
                const text = item.querySelector('span');
                if (text) text.style.display = 'none';
            });
            sidebar.querySelector('.sidebar-logo').style.display = 'none';
        }
    });
});