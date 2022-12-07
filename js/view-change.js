var gallery_view = document.getElementById("horizontal");
var button = document.getElementById("change-view");
var images = document.querySelectorAll(".image-gallery-pic");
var display_mode = document.getElementById("display-mode");

var view_changed = false;

button.addEventListener("click", function() {
    if (view_changed) {
        gallery_view.className = "horizontal-image-gallery";
        var i = 0;
        while (i<3) {
            images[i].className="image-gallery-pic";
            i++;
        }
        view_changed = false;
        display_mode.innerText = "Gallery View: Horizontal";
    }
    else {
        console.log("trigger");
        gallery_view.className = "vertical-image-gallery";
        images[0].className = "vertical-image-gallery-pic";
        images[1].className = "vertical-image-gallery-pic";
        images[2].className = "vertical-image-gallery-pic";
        view_changed = true;
        display_mode.innerText = "Gallery View: Vertical";
    }
});


