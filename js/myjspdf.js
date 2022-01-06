function makePDF() {
    var originalContents = document.body.innerHTML;
    var printReport = document.getElementById('c-print').innerHTML;
    document.body.innerHTML = printReport;
    window.print();
    document.body.innerHTML = originalContents;
    location.reload();
}