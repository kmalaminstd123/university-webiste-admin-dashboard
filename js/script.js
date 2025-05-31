document.addEventListener('DOMContentLoaded', function () {
    // Sidebar toggle
    document.getElementById('sidebarCollapse').addEventListener('click', function () {
        document.getElementById('sidebar').classList.toggle('active');
        document.getElementById('content').classList.toggle('active');
    });

    // Dropdown menus
    var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
    var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
        return new bootstrap.Dropdown(dropdownToggleEl)
    });
});

// Add active class to current menu item
const currentLocation = location.href;
const menuItems = document.querySelectorAll('#sidebar a');
menuItems.forEach(item => {
    if (item.href === currentLocation) {
        item.classList.add('active');
        if (item.parentElement.parentElement.classList.contains('collapse')) {
            item.parentElement.parentElement.classList.add('show');
        }
    }
});

// loading bar 
window.addEventListener('load', () => {

    setTimeout(() => {
        document.querySelector('.loading-bar').style.display = 'none'
    }, 2000)

    // production
    //document.querySelector('.loading-bar').style.display = 'none'
})

// login page
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Show loading bar
    document.querySelector('.loading-bar').classList.add('active');

    // Simulate login delay
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
});
