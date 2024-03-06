function openSection(sectionId) {
    // Oculta todos los contenidos
    var contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }

    // Desactiva todas las pestañas
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    // Muestra el contenido seleccionado y activa la pestaña correspondiente
    document.getElementById(sectionId).classList.add("active");
    event.currentTarget.classList.add("active");
}
