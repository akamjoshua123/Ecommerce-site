const containers = Array.from(document.querySelectorAll('.cart-details-flex'));

containers.forEach(container => container.addEventListener('click', (e) => {
    if(e.target.classList.contains('danger')) {
        if(confirm('Are You Sure?'))
        var parent = e.target.parentElement.parentElement.parentElement;
        parent.remove();
    }
}));