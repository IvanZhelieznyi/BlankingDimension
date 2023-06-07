function makePDF() {
	let now = new Date();
    var originalContents = document.body.innerHTML;
    var printReport = document.getElementById('c-print').innerHTML + "<div style=\"color: rgb(255, 204, 0, 0.25); text-align: center; font-weight: bold; font-size: 23px; line-height: 12px; transform: rotate(-25deg); position: absolute; left: 300px; top: 320px; border: rgb(192, 192, 192, 0.25) solid 4px; height: 100px; width: 160px; \"><p>INTERPIPE</p><p>" + (now.getMonth() + 1) + "." + now.getDate() + "." + now.getFullYear() + "</p></div>";
    document.body.innerHTML = printReport;
    window.print();
    document.body.innerHTML = originalContents;
    location.reload();
}

