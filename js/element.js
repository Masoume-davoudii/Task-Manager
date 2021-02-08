//==============element Generator===========================================
function createElement(tagName, attribute,content){

    var el = document.createElement(tagName);

    for (var key in attribute){
        el.setAttribute(key,attribute[key]);
    }

    if(typeof content !== "undefined"){
        if(content instanceof HTMLElement){
            el.appendChild(content); }
        else {
            el.innerText = content;
            }
        }
        return el;
    }

function createListNode(title){

    var listElement = createElement('div' ,{ class:'list draggable' , draggable:'true'});
    var ListTitleNode = createElement('h3', {class : 'list-title'},title);
    var listItemNode = createElement('ul',{class:'list-Items'});
    var addCardButtonNode = createElement('button',{class:"add-card-btn show"},'Add a Card ...');
    var addCardInputElement = createElement('input', {class:"add-card-input hide" , type:'text',placeholder:'Enter a card name...'});

    
    listElement.appendChild(ListTitleNode );
    listElement.appendChild(addCardButtonNode);
    listElement.appendChild(addCardInputElement);

    addCardButtonNode.addEventListener('click',function(){
        addCardButtonNode.classList.remove('show');
        addCardButtonNode.classList.add('hide');
        console.log("1");
        addCardInputElement.classList.remove('hide');
        addCardInputElement.classList.add('show');
        addCardInputElement.focus();
        console.log("2");

        

    });

    
    var insertionPosition = createElement('ul',{class:'list-Items'}); //<ul class="list-items"><ul>
    ListTitleNode.after(insertionPosition);
     addCardInputElement.addEventListener("keyup", function(e){
         
        if(e.keyCode === 13){
            var newCard = createElement('li' , {class:'card'}, addCardInputElement.value);
            var btnContainer = createElement('div',{class:'btnContainer'} )
            var deleteBtn = createElement('button' ,{class:'deleteCard btn'} , 'delete' );
            btnContainer.appendChild(deleteBtn );
            var editBtn = createElement('button' ,{class:'editCard btn'} , 'edit' );
            btnContainer.appendChild(editBtn );

            newCard.appendChild(btnContainer);
            insertionPosition.appendChild(newCard);//<ul class="list-items"><li></li><ul>
          
            addCardInputElement.classList.remove('show');
            addCardInputElement.classList.add('hide');
            addCardInputElement.value = "";

            addCardButtonNode.classList.remove('hide');
            addCardButtonNode.classList.add('show');

            deleteBtn.addEventListener('click' , (event)=>{
                if(event.target.tagName === 'BUTTON'){
                    const button = event.target;
                    const btnContainer = button.parentNode;
                    const li = btnContainer.parentNode;
                    const ul = li.parentNode;
                    if (button.className === 'deleteCard btn') {
                        ul.removeChild(li);
                        }
                }

        });

            editBtn.addEventListener('click',(event)=>{
                if(event.target.tagName ==='BUTTON'){
                    const li = ul.firstElementChild;
                    console.log(li);
                    const input = createElement('input', {class:"add-card-input " , type:'text',placeholder:'Enter a card name...'});
                    
                    editBtn.content ='save';

                }else if(editBtn.content === 'save'){

                    const li = ul.firstElementChild;
                    editBtn.content ='edit';

                }
            })


        }

     
    });

 

    return listElement;
};

console.log(createListNode("backlog"));


//====================Card==========================================================

function createCardNode(text){

    var CardNode = createElement('li' , {class:'card'}, text);

    return CardNode;
    

};


//====================Add a List CTA=================================================

function createAddListCTANode(){

    var containerElement = createElement('div' , {id :'add-list'});
    var CTAButtonElement = createElement('button',{class:'add-list-btn show'},'Add a List...' );
    var addListInputElement = createElement('input', {class:'add-list-input hide' , type:'text',placeholder:'Enter a list name...'});

    containerElement.appendChild(CTAButtonElement);
    containerElement.appendChild(addListInputElement);

    CTAButtonElement.addEventListener('click',function(){
        CTAButtonElement.classList.remove('show');
        CTAButtonElement.classList.add('hide');

        addListInputElement.classList.remove('hide');
        addListInputElement.classList.add('show');
        addListInputElement.focus();
        

    });

    

    addListInputElement.addEventListener("keyup", function(e){

        if(e.keyCode === 13){
            var newList = createListNode(addListInputElement.value);
            var insertionPosition = document.getElementById('add-list');
            insertionPosition.before(newList);
            

            addListInputElement.classList.remove('show');
            addListInputElement.classList.add('hide');
            addListInputElement.value = "";

            CTAButtonElement.classList.remove('hide');
            CTAButtonElement.classList.add('show');

        }
    });

    return containerElement;


};

console.log(createAddListCTANode());

//====================Delete=================






/*
//==================list ==================

function createListTitleNode(title){
    var titleElement = document.createElement('h3');
    titleElement.classList.add('list-title');
    titleElement.innerText = title;

    return titleElement;

}

console.log(createListTitleNode("To Do"));

function createListItemNode(){
    var unorderedListElement = document.createElement('ul');
    unorderedListElement.classList.add('list-Items');

    return unorderedListElement;

}

console.log(createListItemNode());

function createAddCardButtonNode(){

    var buttonElement = document.createElement('button');
    buttonElement.classList.add('add-card-btn');
    buttonElement.innerText = 'Add a Card ...';

    return buttonElement;

}

console.log( createAddCardButtonNode());

//===================Primary==================

function createListNode(title){

    var listElement = document.createElement('div');
    listElement.classList.add('list');

    listElement.appendChild(createListTitleNode(title));
    listElement.appendChild(createListItemNode());
    listElement.appendChild(createAddCardButtonNode());

    return listElement;
}

console.log(createListNode("backlog"));


function createAddListCTANode(){

    var containerElement = document.createElement('div');
    containerElement.setAttribute('id' , 'add-list');

    var CTAButtonElement = document.createElement('button');
    CTAButtonElement.setAttribute('class' ,'add-list-btn show');
    CTAButtonElement.innerText = 'Add a List...';

    var addListInputElement = document.createElement('input');
    addListInputElement.setAttribute('class', 'add-list-input hide');
    addListInputElement.setAttribute('type' ,'text');
    addListInputElement.setAttribute('placeholder' , 'Enter a list name ...');

    containerElement.appendChild(CTAButtonElement);
    containerElement.appendChild(addListInputElement);

    return containerElement;


}

console.log(createAddListCTANode());


*/
