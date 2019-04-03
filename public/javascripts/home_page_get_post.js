function getPost(post) {
    let xml = new XMLHttpRequest();
    xml.open("GET", `/get-post/${post}`, false);
    xml.send("");
    let str_Json = xml.responseText;
    return str_Json;
}

function getNamePost() {
    let xml = new XMLHttpRequest();
    xml.open("GET", "/get-name-post", false);
    xml.send();
    let str_Json = xml.responseText;
    return JSON.parse(str_Json);
}

function show_list() {
    let inner = "";
    let list = getNamePost();
    console.log(list);
    let open = `
        <table class="table list-view">
            <thead>
                <tr>
                    <th>File name</th>
                    <th>Xem</th>
                </tr>
            </thead>
            <tbody>
    `
    let close = `</tbody>
    </table>`
    inner = open;
    list.forEach(element => {
        inner += `<tr>
            <td scope="row">${element.file_name}</a></td>
            <td>
                <button class="btn btn-primary" value="${element.file_name}" onclick="transport(this.value)">Xem</button>
            </td>
        </tr>`
    });
    inner += close;
    return inner;
}

function transport(value) {
    let data = getPost(value);
    let obj_data = JSON.parse(data);
    markjax(obj_data.data_post,document.getElementById("post_viewer"));
    btn_show_post.click();
}

document.getElementById("list_view").innerHTML = show_list();