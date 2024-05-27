document.addEventListener("DOMContentLoaded", function () {
    let triggers = document.querySelectorAll(".collapse-btn");

    triggers.forEach(trigger => {
        trigger.addEventListener("click", function () {
            let collapseElement = document.querySelector(this.dataset.target);

            if (collapseElement.classList.contains('show')) {
                collapseElement.classList.remove('show');
            } else {
                let collapses = document.querySelectorAll('.collapse.show');
                collapses.forEach(element => {
                    element.classList.remove('show');
                });

                collapseElement.classList.add('show');
            }
        });
    });
});