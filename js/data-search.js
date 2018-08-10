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

    /*$.getJSON('db/inventory.json', function(data) {

        /!*var arraysLinecard = [];
        var i = 0; var j = 0;*!/

        var titleLinecard;
        var pidLinecard;
        var portItem;
        var portState;

        titleLinecard = data.data[0].data[0].title;
        pidLinecard = data.data[0].data[0].pid;
        portItem = data.data[0].data[0].data[0][0].ifname;
        portState = data.data[0].data[0].data[0][0].ifstate;

        /!*$.each(data, function(){
            for (i in data.data){
                for (j in data.data){
                    arraysLinecard.push(data.data[i].data[j].title);
                }
            }
        });*!/

        /!*console.log(arraysLinecard);*!/

        localStorage.setItem('titleLinecard', titleLinecard);
        localStorage.setItem('pidLinecard', pidLinecard);
        localStorage.setItem('portItem', portItem);
        localStorage.setItem('portState',portState);
    });*/

    $('#bay-face tbody').on('click', 'tr', function () { //$("#sn").val(data.pid); << for put value in <input> form
        var data = table.row(this).data();
        //$("#bayface-status").modal("show");

        $.getJSON('db/inventory.json', function(data) {
            var titleLinecard;
            var pidLinecard;
            var portItem;
            var portState;

            titleLinecard = data.data[0].data[0].title;
            pidLinecard = data.data[0].data[0].pid;
            portItem = data.data[0].data[0].data[0][0].ifname;
            portState = data.data[0].data[0].data[0][0].ifstate;

            localStorage.setItem('titleLinecard', titleLinecard);
            localStorage.setItem('pidLinecard', pidLinecard);
            localStorage.setItem('portItem', portItem);
            localStorage.setItem('portState',portState);
        });

        window.location.href = "description-bay-face.html?pid=" + data.pid + "&title=" + data.title + "&hostname=" +
            data.hostname + "&sn=" + data.sn + "&address=" + data.address;

        //alert(data.pid);
    });
});