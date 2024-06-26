let currentTab = 0;
const nextBotao = document.getElementById("nextBtn");
const prevBotao = document.getElementById("prevBtn");
const formularioJogo = document.getElementById("cadastroForm")


function showTab(tabIndex) {
    let tabs = document.getElementsByClassName("tab");
    tabs[tabIndex].style.display = "block"; 

    if (tabIndex == 0) {
        prevBotao.style.display = "none";
    } else {
        prevBotao.style.display = "inline";
    }

    if (tabIndex == (tabs.length - 1)) {
        nextBotao.innerHTML = "Enviar";
        nextBotao.classList.remove('btn-primary');
        nextBotao.classList.add('bg-green');
        nextBotao.classList.add('white-color');
    } else {
        nextBotao.innerHTML = "Próximo";
    }
    updateStepIndicator(tabIndex);
}

function nextPrev(direction) {
    let tabs = document.getElementsByClassName("tab");
    if (direction == 1 && !validateForm()) return false;
    tabs[currentTab].style.display = "none";
    currentTab += direction;
    if (currentTab >= tabs.length) {
        formularioJogo.submit();
        return false;
    }
    showTab(currentTab);
}

function validateForm() {
    let tabs = document.getElementsByClassName("tab");
    let currentInputs = tabs[currentTab].getElementsByTagName("input");
    let currentSelects = tabs[currentTab].getElementsByTagName("select");
    let isValid = true;
    
    for (let i = 0; i < currentInputs.length; i++) {
        if (currentInputs[i].value == "") {
            currentInputs[i].classList.add("invalid");
            isValid = false;
        } else {
            currentInputs[i].classList.remove("invalid");
        }
    }

    for (let i = 0; i < currentSelects.length; i++) {
        if (currentSelects[i].value == "") {
            currentSelects[i].classList.add("invalid");
            isValid = false;
        } else {
            currentSelects[i].classList.remove("invalid");
        }
    }
    
    if (isValid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    
    return isValid;
}

function updateStepIndicator(tabIndex) {
    let steps = document.getElementsByClassName("step");
    for (let i = 0; i < steps.length; i++) {
        steps[i].className = steps[i].className.replace(" active", "");
    }
    steps[tabIndex].className += " active";
}

showTab(currentTab);
