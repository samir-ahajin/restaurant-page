
import setHeader from './header';
import showAbout from './about';
import showMenu from './menu';
import setFooter from './footer';
import showHome from './home';



let setWeb=(function(){
    

    function _selectNav(){
        let btns = document.querySelectorAll('.btn'),
            contentCon = document.getElementById('con-1');
        
        btns.forEach(btn=>btn.addEventListener('click',function(e){
            let clicked = document.getElementsByClassName('active')
            clicked[0].className = clicked[0].className.replace(" active", "");
            e.target.className += " active";  

            if(e.target.id == "nav-0"){
                contentCon.innerHTML="";
                contentCon.appendChild(showHome());

            }else if(e.target.id == "nav-1"){
                contentCon.innerHTML="";
                contentCon.appendChild(showMenu());

            }else if(e.target.id == "nav-2"){
                contentCon.innerHTML="";
                contentCon.appendChild(showAbout());
            }
        }))
      
    }
    function _setFooter(){
        let footer = document.getElementById('con-2');
        footer.appendChild(setFooter.set[0])
        footer.appendChild(setFooter.set[1])
    }
    function _setHeader(){
        let header = document.getElementById('con-0')
        header.appendChild(setHeader.set[0]);
        header.appendChild(setHeader.set[1]);
    }
    
    function _setContainer(){
        let main = document.getElementById('content')
        let current = [];
        for (let index = 0; index < 3; index++) {
            current[index] = document.createElement('div')
            current[index].setAttribute('id',`con-${index}`);
            current[index].classList.add('center');
            main.appendChild(current[index]);
        }
    }
    function renderWeb(){
       _setContainer();
       _setHeader();
       document.getElementById('con-1').appendChild(showHome());
       _selectNav();    
       _setFooter();

       
    }

    return{
        set:renderWeb(),
    }
})();

export default setWeb;
