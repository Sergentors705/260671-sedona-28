let modalErrorWindow=document.querySelector(".modal-error-container"),modalSuccessWindow=document.querySelector(".modal-success-container"),closeErrorButton=document.querySelector(".modal-error__btn"),closeSuccessButton=document.querySelector(".modal-success__btn"),feedbackButton=document.querySelector(".feedback__button"),feedbackName=document.querySelector("#feedback-name"),feedbackForm=document.querySelector(".feedback__form");const modalSuccessClose=()=>{modalSuccessWindow.style.display="none",closeSuccessButton.removeEventListener("click",modalSuccessClose);const e=new XMLHttpRequest;e.open("POST","https://echo.htmlacademy.ru/",!1),e.send(FormData)},modalErrorClose=()=>{modalErrorWindow.style.display="none",closeErrorButton.removeEventListener("click",modalErrorClose)},modalOpen=e=>{e.preventDefault(),feedbackForm.checkValidity()?(modalSuccessWindow.style.display="flex",closeSuccessButton.addEventListener("click",modalSuccessClose)):(modalErrorWindow.style.display="flex",closeErrorButton.addEventListener("click",modalErrorClose))};feedbackButton.addEventListener("click",modalOpen);