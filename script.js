document.getElementById('downloadPDF').addEventListener('click', function() {

    var element = document.getElementById('cvContainer');

    var opt = {
        margin:       0.5,
        filename:     'Samuel Wai Okyere_CV.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Generate PDF
    html2pdf().from(element).set(opt).save();
});
