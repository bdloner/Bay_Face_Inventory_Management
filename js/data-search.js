$(document).ready(function () {
    var table = $('#bay-face').DataTable({
        "ajax": {
            "url": "db/inventory.json",
            "type": "GET"
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

    $('#bay-face tbody').on('click', 'tr', function () {
        var data = table.row(this).data();
        alert(data.pid);
    });
});