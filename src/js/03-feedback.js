import throttle from 'lodash.throttle'

const STOREGE_KEY = 'feedback-form-state';
 
const feedbackForm = document.querySelector('.feedback-form');
const selectedForm = {};

initForm();

feedbackForm.addEventListener('submit', evt => {
    evt.preventDefault();
    const formData = new FormData(feedbackForm);
    formData.forEach((value, name) => console.log(value, name));
});

feedbackForm.addEventListener('change',throttle (evt => {
    selectedForm[evt.target.name] = evt.target.value;
    localStorage.setItem(STOREGE_KEY, JSON.stringify(selectedForm));
}), 500);

function initForm() {
    let persistedForms = localStorage.getItem(STOREGE_KEY);
    if (persistedForms) {
        persistedForms = JSON.parse(persistedForms);
    }
}












// const refs = {
//     form: document.querySelector('.feedback-form'),
//     textarea: document.querySelector('.feedback-form textarea'),
//     email: document.querySelector('.feedback-form input'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

    

// populateTextarea();
 
// function onFormSubmit(evt) {
//     evt.preventDefault();
//     evt.currentTarget.reset();
//     localStorage.removeItem(STOREGE_KEY);
// };
        

//  function onTextareaInput(evt) {
//      const message = evt.target.value;
//      localStorage.setItem(STOREGE_KEY, message);
    
//      };

// function populateTextarea() {
//     const savedformDate = localStorage.getItem(STOREGE_KEY);
//     if (savedformDate) {
//         JSON.parse(savedformDate);
//         formDate[evt.target.name] = evt.target.value;
//     }
// } 

// const formDate = {};
// refs.form.addEventListener('input', (evt) => {--__
//     localStorage.setItem(STOREGE_KEY, JSON.stringify(formDate));
// });



