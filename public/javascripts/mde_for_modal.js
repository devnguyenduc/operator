var simplemde = new SimpleMDE({
    element: document.getElementById("id_textarea_id_modal_hello_world"),
    autofocus: true,
    autosave: {
        enabled: true,
        uniqueId: "id_textarea_id_modal_hello_world",
        delay: 1000,
    },
    previewRender: function (plainText, preview) {
        setTimeout(function () {
            markjax(plainText, preview);
        }, 250);
        return preview.innerHTML;
    },
});

