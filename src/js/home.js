import bellucci from '../images/bellucci.jpg';
import left from '../images/Pastaria-Branding+Design-1.jpg';
import right from '../images/PastariaTshirt1.jpg';


let content=[  
    {
        name:'Turning Up the Heat',
        image:left,
        description:'“\xa0Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\xa0”',
    },
    {
        name:'~\xa0Monica Bellucci\xa0~',
        image:bellucci,
        description:'“\xa0I am certainly Italian in my love of food! I eat everything, but I love Italian food most of all. Even my daughter does. Her favourite food is pasta and parmigiana.\xa0”'
    },
    {
        name:'FEAST Magazine, December 2012',
        image:right,
        description:'“\xa0Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\xa0”',

    }
  
]
function createDivision(){
    let mainCon = []
    for (let index = 0; index < 3 ;index++) {
        let newCon = document.createElement('div'),
            con1 = document.createElement('div'),
            con2  = document.createElement('div'),
            para = document.createElement('p'),
            paraMain = document.createElement('p'),
            title = document.createElement('h1'),
            imgCon = document.createElement('img');

        newCon.setAttribute('id',`hCon-${index}`);
        para.textContent = content[index].description;
        title.textContent = content[index].name;
        title.classList.add('spec');
        imgCon.src = content[index].image;
        con2.classList.add('center');
        title.classList.add('center');
        con1.classList.add('center');

        if(index%2 == 0){
            paraMain.appendChild(title);
            paraMain.appendChild(para);
            con1.appendChild(paraMain);
            con2.appendChild(imgCon);
            newCon.appendChild(con1);
            newCon.appendChild(con2);
        }else{
            con2.appendChild(imgCon);
            paraMain.appendChild(para);
            paraMain.appendChild(title);    
            con1.appendChild(paraMain); 
            newCon.appendChild(con2);
            newCon.appendChild(con1); 
        }    
        newCon.classList.add('hCons');
        mainCon[index] = newCon;
    }
    return mainCon;
}


function showHome(){
    console.log('home');
    let hContainer = document.createElement('div')

    for (let index = 0; index < 3; index++) {
      hContainer.appendChild(createDivision()[index])
    }
    
    return hContainer;
}

export default showHome;