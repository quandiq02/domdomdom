let toggles = document.querySelectorAll('.toggle'),
    content = document.querySelectorAll('.content');

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', () => {
        if (parseInt(content[i].style.height) != content[i].scrollHeight) {
            content[i].style.height = content[i].scrollHeight + "px";
        } else {
            content[i].style.height = "0px";
        }

        // for (let j = 0; j < content.length; j++) {
        //     if (j !== i) {
        //         content[j].style.height = "0px";
        //     }
        // }
    });
}