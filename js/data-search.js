$(document).ready(function () {
    var table = $('#bay-face').DataTable({
        "ajax": {
            "url": "db/inventory.json",
            "contentType": "application/json",
            "type": "POST"
        },
        "columns": [
            {"data": "pid", "defaultContent": "-"},
            {"data": "sn", "defaultContent": "-"},
            {"data": "state.hostname", "defaultContent": "-"},
            {"data": "state.ip", "defaultContent": "-"},
            {"data": "state.slot", "defaultContent": "-"},
            {"data": "state.status", "defaultContent": "-"}
        ],
        "initComplete": function () {
            $("#bay-face_filter").detach().appendTo('#new-search-area');
        },
        language: {search: "", searchPlaceholder: "Search Device"},
        deferRender: true

    });

    $('#bay-face tbody').on('click', 'tr', function () { //$("#sn").val(data.pid); << for put value in <input> form
        var data = table.row(this).data();
        $("#pid").text(data.pid);
        $("#sn").text(data.sn);
        $("#hostname").text(data.state.hostname);
        $("#ip").text(data.state.ip);
        $("#slot").text(data.state.slot);
        $("#status").text(data.state.status);
        $("#bayface-status").modal("show")

        //window.location.href = "bayface.html?pid=" + data.pid + "&sn=" + data.sn;
        //alert(data.pid);
    });
});