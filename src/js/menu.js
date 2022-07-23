import chicken_tikka from '../images/chicken-tikka-alfredo.jpeg';
import steak_fettucine from '../images/creamy-steak-fettucine-vertical.png';
import bucatini from '../images/delish-bucatinipasta.jpg';
import redchilirico from '../images/delish-redchiliricottapasta.jpg';
import green_spag from '../images/green-spaghetti-vertical.jpg';
import lemon_aspag from '../images/lemon-asaparagus-chicken-pasta.jpg';
import one_pot from '../images/one-pot-chicken-alfredo.jpg';
import orecchiette from '../images/orecchiette-with-broccoli-rabe.jpg';
import quarterly_pasta from '../images/quarterly-pasta-chicken-parm-pasta.jpg';


let food = [
    {name:'Chicken Tikka Alfredo',
    description:'The star of this pasta is the tikka pasta sauce. Spiked with ginger and warm spices like garam masala and coriander, it pairs perfectly with yogurt-marinated chicken and Parmesan ',
    image:chicken_tikka
    },
    {name:'Creamy Steak Fettuccine',
    description:'Whenever we crave steak, this dish is always what we want to make. It comes together quickly and is so full of flavor, plus the steak makes it feel extra special.',
    image:steak_fettucine,
    },
    {name:'Bucatini all\'Amatriciana',
    description:'If you\'re in a pinch you can sub bacon for the pancetta in this classic pasta dish, but we think it really does make a difference in the outcome.',
    image:bucatini,
    },
    {name:'Red Chili Ricotta Pasta',
    description:'This no-effort creamy ricotta pasta is topped with red chili oil and buttery bread crumbs. The extra effort to make your own bread crumbs and chili oil is well worth it for this simple pasta.',
    image:redchilirico,
    },
    {name:'Green Spaghetti',
    description:'Poblanos and cilantro turn this pasta perfectly green! Supplementing with roasted green bell peppers instead if you\'re not a fan of spice.',
    image:green_spag,
    },
    {name:'Lemon Asparagus Chicken Pasta',
    description:'This pasta tastes like spring! Stir the cheese in, and don\'t skimp on the lemon slices, they really brighten the creamy sauce.',
    image:lemon_aspag,
    },
    {name:'One-Pot Chicken Alfredo',
    description:'Oh, chicken alfredo: It\'s the classic pseudo-Italian pasta we just can\'t seem to get enough of.',
    image:one_pot,
    },
    {name:'Orecchiette with Broccoli Rabe',
    description:'Orecchiette, literally translating to "little ears" in Italian, is a crazy-underrated and underutilized pasta in the home kitchen. The tiny little indentations catch so much sauce!',
    image:orecchiette,
    },
    {name:'Chicken Parm Pasta',
    description:'This chicken Parmesan-inspired dish has several key components—bacon, a flavorful panko topping, an easy doctored jarred sauce— and lucky for you, they all come together in just one pan!',
    image:quarterly_pasta,
    },
]

let foodList = []

function createCard(name,description,image,imgNumber){
        let card = document.createElement('div'),
         cardItem1 = document.createElement('div'),
         cardItem2 = document.createElement('div'),
         cname = document.createElement('h2'),
         cdes = document.createElement('p'),
         imgCon = document.createElement('img');

        card.setAttribute('id',`image-${imgNumber}`);
        card.classList.add('card');

        cname.textContent = name;
        cdes.textContent = description; 

        imgCon.src = image;
        imgCon.alt = `Food #${imgNumber + 1} - ${name}`;
        imgCon.classList.add('image');


        cardItem1.appendChild(imgCon);
        cardItem1.classList.add('center');
        cardItem2.appendChild(cname);
        cardItem2.appendChild(cdes);

        card.appendChild(cardItem1);
        card.appendChild(cardItem2);
          
        return card; 
    }



function showMenu(){
    console.log('menu');
    let mainCard = document.createElement('div');
    mainCard.setAttribute('id','cards');


    for (let index = 0; index < 9; index++) {
        var curfoodItem = createCard(food[index].name,food[index].description,food[index].image,index);
        foodList[index] = curfoodItem
        mainCard.appendChild(curfoodItem);   
    }

    return mainCard;
}



export default showMenu;