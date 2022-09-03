import throttle from 'lodash.throttle'

const STOREGE_KEY = 'feedback-form-state';


const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    email: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

    

populateTextarea();
 
function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STOREGE_KEY);
};
        

 function onTextareaInput(evt) {
     const message = evt.target.value;
     localStorage.setItem(STOREGE_KEY, message);
    
     };

function populateTextarea() {
    const savedformDate = localStorage.getItem(STOREGE_KEY);
    if (savedformDate) {
        JSON.parse(savedformDate);
        formDate[evt.target.name] = evt.target.value;
    }
} 

const formDate = {};
refs.form.addEventListener('input', (evt) => {--__
    localStorage.setItem(STOREGE_KEY, JSON.stringify(formDate));
});



