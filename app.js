content://com.android.externalstorage.documents/tree/primary%3AAprendizado%20HTML%20::primary:Aprendizado HTML /js/app.jslet user = localStorage.getItem("logado");
let contas = JSON.parse(localStorage.getItem("contas")) || {};

function salvar(){
    localStorage.setItem("contas", JSON.stringify(contas));
}

function gerarIGG(){
    return "IGG-" + Math.random().toString(36).substring(2,10).toUpperCase();
}

function gerarID(){
    return "TX-" + Math.floor(Math.random()*1000000);
}

function data(){
    return new Date().toLocaleString("pt-BR");
}

function logout(){
    localStorage.removeItem("logado");
    window.location.href = "index.html";
