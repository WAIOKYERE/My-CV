document.getElementById('downloadPDF').addEventListener('click', function() {
    
    document.getElementsByClassName("float-right")[0].classList.add("hidden");

    var element = document.getElementById('cvContainer');

    var opt = {
        margin:       0.5,
        filename:     'Samuel Wai Okyere_CV.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };


    
    // Generate PDF
    html2pdf().from(element).set(opt).save().then(function(){
        document.getElementsByClassName("float-right")[0].classList.remove("hidden");

    });
});

