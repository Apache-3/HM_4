var xhr = new XMLHttpRequest();
xhr.open("GET", "data.json", true);
xhr.onload = function () {
    if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
    } else {
        console.error("Произошла ошибка при загрузке файла.");
    }
};
xhr.onerror = function () {
    console.error("Произошла ошибка при выполнении запроса.");
};
xhr.send();