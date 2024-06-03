// Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
})
// Toast
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
      return new bootstrap.Toast(toastEl)
}) 		

// Spinner
function showSpinner(id){
    // Get the modal
    var spin = document.getElementById("spin");
    var text = document.getElementById("text");

    text.style.display = "none";
    spin.classList.remove("d-none");
    spin.classList.add("d-block");

    var delayInMilliseconds = 1000; //1 second
        
    setTimeout(function() {
        spin.classList.remove("d-block");
        spin.classList.add("d-none");
        text.style.display = "block";        
        toastList.forEach(toast => toast.show()); // This show them				        
        window.location.replace("/add_to_cart/"+id);
    }, delayInMilliseconds);			
   
}