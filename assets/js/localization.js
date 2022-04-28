const SPANISH_CODE = '-es';
const ENGLISH_CODE = '-en';
const LOCALIZATION = 'locale';
var LANG = '';

function getLang() {
    if (navigator.languages != undefined) 
      return navigator.languages[0].toString(); 
    return navigator.language.toString();
}

function isSpanish(){
    return (getLang().toLowerCase().includes('es'))
}

function setToLang(lang_code){
    var all_texts = document.getElementsByClassName(LOCALIZATION);
    Array.from(all_texts).forEach(
        (element) => {
            if (element.id.includes(lang_code))
                element.style.display = 'block';
            else
                element.style.display = 'none';
        }
    )
}


// Carga del documento
function loadLocale(){
    LANG = isSpanish() ? SPANISH_CODE : ENGLISH_CODE ;
    setToLang(LANG); 
}


// En cuanto pulse el botón para cambiar de idioma
function changeLocale(){
    LANG = (LANG == SPANISH_CODE) ? ENGLISH_CODE : SPANISH_CODE ;
    setToLang(LANG); 
}
