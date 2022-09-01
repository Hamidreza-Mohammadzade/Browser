
const En = document.getElementById('English')
const Ru = document.getElementById('Russian')
const It = document.getElementById('Italian')
const Ja = document.getElementById('Japanese')
const Fr = document.getElementById('French')
const Ge = document.getElementById('German')

const BrowserLan = document.getElementById('BrowserLan')
const SearchIn = document.getElementById('SearchIn')
const PlaceHolderTX = SearchIn.getAttribute('placeholder')

const ManageOptionAcc = document.getElementById('ManageOptionAcc')
const CustomOptionAcc = document.getElementById('CustomizeOptionAcc')

En.addEventListener('click' , () =>{
    BrowserLan.innerText = En.innerText
    SearchIn.placeholder = 'Search or type a URL'

    ManageOptionAcc.innerText = 'Manage your Account'
    CustomOptionAcc.innerText = 'Customize'
})
Ru.addEventListener('click' , () =>{
    BrowserLan.innerText = Ru.innerText
    SearchIn.placeholder = 'Найдите или введите URL'

    ManageOptionAcc.innerText = 'Управлять учетной записью'
    CustomOptionAcc.innerText = 'Настроить'
})
It.addEventListener('click' , () =>{
    BrowserLan.innerText = It.innerText
    SearchIn.placeholder = 'Cerca o digita un URL'

    ManageOptionAcc.innerText = 'Gestire il tuo account'
    CustomOptionAcc.innerText = 'personalizzare'
})
Ja.addEventListener('click' , () =>{
    BrowserLan.innerText = Ja.innerText
    SearchIn.placeholder = 'URL を検索または入力'

    ManageOptionAcc.innerText = 'アカウントの管理'
    CustomOptionAcc.innerText = 'カスタマイズ'
})
Fr.addEventListener('click' , () =>{
    BrowserLan.innerText = Fr.innerText
    SearchIn.placeholder = 'Rechercher ou saisir une URL'

    ManageOptionAcc.innerText = 'Gérer votre compte'
    CustomOptionAcc.innerText = 'Personnaliser'
})
Ge.addEventListener('click' , () =>{
    BrowserLan.innerText = Ge.innerText
    SearchIn.placeholder = 'Suchen oder geben Sie eine URL ein'

    ManageOptionAcc.innerText = 'Verwalten Sie Ihr Konto'
    CustomOptionAcc.innerText = 'Anpassen'
})