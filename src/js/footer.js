let setFooter =(function(){

    function renderFooter(){
        let copyR = document.createElement('p'),
            link = document.createElement('a'),
            logo = document.createElement('i');
       

            copyR.textContent = "Copyright © 2022 samir-ahajin \xa0 ";
            link.setAttribute('href','https://github.com/samir-ahajin');
            logo.classList.add('fab','fa-github');
            logo.setAttribute('aria-hidden','true')
            link.appendChild(logo);
      
        return [copyR,link];
    }

    return{
        set:renderFooter()
    }
})();

export default setFooter;