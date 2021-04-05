//==================================element Generator============================

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

//===============================createListNode================================

function createListNode(title){

    var listElement = createElement('div' ,{ class:'list'});
    var ListTitleNode = createElement('h3', {class : 'list-title'},title);
    var deleteList = createElement('button',{class:'delete-list'});
    var deleteIcon =  createElement('i',{class:"fas fa-times"})
    deleteList.appendChild(deleteIcon);
    var listItemNode = createElement('ul',{class:'list-Items'});
    var addCardButtonNode = createElement('button',{class:"add-card-btn show"},'Add a Card ...');
    var addCardInputElement = createElement('input', {class:"add-card-input hide" , type:'text',placeholder:'Enter a card name...'});

    ListTitleNode.appendChild(deleteList);
    listElement.appendChild(ListTitleNode );
    listElement.appendChild(addCardButtonNode);
    listElement.appendChild(addCardInputElement);


//================================ add List ====================================

    addCardButtonNode.addEventListener('click',function(){
        addCardButtonNode.classList.remove('show');
        addCardButtonNode.classList.add('hide');
        
        addCardInputElement.classList.remove('hide');
        addCardInputElement.classList.add('show');
        addCardInputElement.focus();
      

        

    });

//==============================Delete List======================================

    deleteIcon.addEventListener('click' , (event)=>{
                
                if(event.target.tagName === 'I' ){
                  
                    const i = event.target;
                    const button = i.parentNode;
                    const title = button.parentNode;
                    const div= title.parentNode;
                
                    if (i.className === 'fas fa-times') {
                        div.remove();
                    
                        }
                }

        });
    
//================================Insert Card======================================

    var insertionPosition = createElement('ul',{class:'list-Items'}); //<ul class="list-items"><ul>
    ListTitleNode.after(insertionPosition);
    addCardInputElement.addEventListener("keyup", function(e){
         
        if(e.keyCode === 13){
            var newLi = createElement("li" ,{class:"textContainer" , draggable:'true'});
          
            if(addCardInputElement.value !==""){
            var newCard = createElement('span' , {class:'card' }, addCardInputElement.value);
            newLi.appendChild(newCard);
            var btnContainer = createElement('div',{class:'btnContainer'} )
            var deleteBtn = createElement('button' ,{class:'deleteCard btn'} , 'delete' );
            btnContainer.appendChild(deleteBtn );
            var editBtn = createElement('button' ,{class:'editCard btn'} , 'edit' );
            btnContainer.appendChild(editBtn );

            newLi.appendChild(btnContainer);
            insertionPosition.appendChild(newLi );//<ul class="list-items"><li></li><ul>
          
            addCardInputElement.classList.remove('show');
            addCardInputElement.classList.add('hide');
            addCardInputElement.value = "";

            addCardButtonNode.classList.remove('hide');
            addCardButtonNode.classList.add('show');

//===================================Delete Card===================================

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

//====================================Edit Card======================================
            editBtn.addEventListener('click',(event)=>{
                if(event.target.tagName ==='BUTTON'){
                    const button = event.target;
                    const btnContainer = button.parentNode;
                    const li = btnContainer.parentNode;
                    const ul = li.parentNode;
                   if(editBtn.textContent==='edit'){
                    const span = li.firstElementChild;
                
                    const input = createElement('input', {class:"input-card " , type:'text'});
                    input.value = span.textContent;
                    li.insertBefore(input,span);
                    li.removeChild(span);
                    
                    editBtn.textContent ='save';
                    
                }else if(editBtn.textContent === 'save'){
                
                    const input = li.firstElementChild;
                    const span = createElement("span",{class:"span-card " , type:'text'} );
                    span.textContent = input.value;
                    li.insertBefore(span,input);
                    li.removeChild(input);
                    editBtn.textContent ='edit';

                }
            }})


        }

 }
//==================================Drag & Drop  Doesn't work good =================================

        
        const items = document.querySelectorAll(".textContainer");
        const lists = document.querySelectorAll(".list-Items");
        let dragged=null;
        

        for(let i =0 ;i<items.length;i++){
            const item = items[i];
            item.addEventListener('dragstart',function(){
               
                dragged=item; 
                setTimeout(function(){
                    item.style.display='none'; 
                },0);});
            
            item.addEventListener("dragend",function(){
                setTimeout(function(){
                    dragged.style.display='block';
                    dragged=null;
                },0);});

            for(let j=0; j<lists.length;j++){
                    const list=lists[j];
                    list.addEventListener('dragover',function(e){
                        e.preventDefault();});
                    list.addEventListener('dragenter',function(e){
                        e.preventDefault()
                        
                    });
                    list.addEventListener('drop',function(e){
                        this.append(dragged);
                      

                    });
                }
    }

     
    });
    return listElement;
};




//===============================Create Card Function==============================

function createCardNode(text){

    var CardNode = createElement('li' , {class:'card'}, text);

    return CardNode;
    

};


//=================================Add a List CTA=================================

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
            
               
            if(addListInputElement.value !==""){
            var newList = createListNode(addListInputElement.value);
            var insertionPosition = document.getElementById('add-list');
            insertionPosition.before(newList);
            

            addListInputElement.classList.remove('show');
            addListInputElement.classList.add('hide');
            addListInputElement.value = "";

            CTAButtonElement.classList.remove('hide');
            CTAButtonElement.classList.add('show');

        }}
    });

  

    
    return containerElement;


};



