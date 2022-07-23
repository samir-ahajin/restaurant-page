
let setHeader=(function(){
 
    function _createList(){
        let uList = document.createElement('ul'),
            selection = ['Home','Menu','About'],
            item = [],
            item2 = [];
        for (let index = 0; index < 3; index++) {
            item[index] = document.createElement('li');
            item2[index] = document.createElement('button');
            item2[index].innerHTML = selection[index];
            item2[index].setAttribute('id',`nav-${index}`);
            item2[index].classList.add('btn');
            if(index == 0){
                item2[index].classList.add('active');
            }
            item[index].appendChild(item2[index]);
            uList.appendChild(item[index]);

        }
        return uList;
    }
    function renderHeader(){
        let   hContainer = [],
              title = document.createElement('h1');
        for (let index = 0; index < 2; index++) {
            hContainer[index] =  document.createElement('div');
        }
        title.setAttribute('id','tText');
        title.textContent = "PASTARIA";
        hContainer[0].appendChild(title);
        hContainer[0].setAttribute('id','logo');
        hContainer[1].setAttribute('id','nav');
        hContainer[1].appendChild(_createList());
        
        return hContainer;
    }
    return{
        set:renderHeader(),
    }
})();

export default setHeader;