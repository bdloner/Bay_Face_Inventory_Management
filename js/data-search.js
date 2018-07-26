$(document).ready(function () {

    var table = $('#bay-face').DataTable({
        "ajax": {
            "url": "db/inventory.json",
            "contentType": "application/json",
            "type": "POST"
        },
        "columns": [
            {"data": "pid", "defaultContent": "-"},
            {"data": "title", "defaultContent": "-"},
            {"data": "hostname", "defaultContent": "-"},
            {"data": "sn", "defaultContent": "-"},
            {"data": "address", "defaultContent": "-"}
        ],
        "initComplete": function () {
            $("#bay-face_filter").detach().appendTo('#new-search-area');
        },
        language: {search: "", searchPlaceholder: "Search Device"},
        deferRender: true

    });

    $('#bay-face tbody').on('click', 'tr', function () { //$("#sn").val(data.pid); << for put value in <input> form
        var data = table.row(this).data();
        //$("#bayface-status").modal("show");

        var linecardItem;
        var portItem;

        $.getJSON('db/inventory.json', function(data) {
            linecardItem = data.data[0].title;
            portItem = data.data[0].data[0][0].ifname;

            localStorage.setItem('linecard', linecardItem);
            localStorage.setItem('port', portItem);
        });

        window.location.href = "description-bay-face.html?pid=" + data.pid + "&title=" + data.title + "&hostname=" +
            data.hostname + "&sn=" + data.sn + "&address=" + data.address;
        //alert(data.pid);
    });
});