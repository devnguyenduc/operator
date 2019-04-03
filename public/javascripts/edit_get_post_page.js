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
                    <th>Sửa</th>
                </tr>
            </thead>
            <tbody>
    `
    let close = `</tbody>
    </table>`
    inner = open;
    list.forEach(element => {
        inner += `<tr>
            <td>${element.file_name}</td>
            <td>
                <button class="btn btn-secondary" value="${element.file_name}" onclick="fixed(this.value)">
                    Sửa
                </button>                
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

function fixed(value){
    let data=getPost(value);
    let obj_data = JSON.parse(data);
    simplemde.value(obj_data.data_post);

    btn_create_post.click();
    setTimeout(()=>{
        document.getElementById("list_view").innerHTML = show_list();
    },2000)
}

document.getElementById("list_view").innerHTML = show_list();