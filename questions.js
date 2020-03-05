const submitBtn = document.querySelector('.submit-btn');
const radioBtns = document.getElementsByTagName('input');
const labelBtns = document.querySelectorAll('.label');
const digimonSection = document.querySelector('.digimon');
const resultSection = document.querySelector('.result');
const questionContainer = document.querySelector('.question-container');
const instructions = document.querySelector('.instructions');
const refreshBtn = document.querySelector('.refresh-btn');

let Survey = {
    courage: {
        name: 'answer-1',
    },
    friendship: {
        name: 'answer-2',
    },
    love: {
        name: 'answer-3',
    },
    sincerity: {
        name: 'answer-4',
    },
    knowledge: {
        name: 'answer-5',
    }, 
    reliability: {
        name: 'answer-6',
    },
    hope: {
        name: 'answer-7',
    },
    light: {
        name: 'answer-8',
    },
    kindness: {
        name: 'answer-9',
    },
    miracles: {
        name: 'answer-10',
    },
};

let Digimon = {
    Agumon: {
        desc: "Agumon is a Reptile Digimon. It is on the way to adulthood, its power is low, but as its personality is quite ferocious, it doesn't understand fear. It has grown hard, sharp claws on both its hands and feet, and demonstrates its power in battle. Agumon is much like his partner in that he can be kind and compassionate. Though he can act rashly, Agumon is more cautious and less prone to getting into sticky situations, though he follows and protects his partner all the way. It is also a being that foretells Digivolution to a great and powerful Digimon.",
        img: "./images/agumon.png"
    },
    Gabumon: {
        desc: "Gabumon is a Reptile Digimon. Although it is covered by a fur pelt, it is still clearly a Reptile Digimon. Due to its extremely timid and shy personality, it always gathers up the data which Garurumon leaves behind, and shapes it into a fur pelt to wear. Because it is wearing the fur pelt of Garurumon, who is feared by other Digimon, it fills the role of safeguarding itself as a result of protecting its body. When it is wearing the fur pelt, its personality does a complete 180° shift.",
        img: "./images/gabumon.png",
    },
    Tentomon: {
        desc: "Tentomon is an Insectoid Digimon. It is the original type of Insectoid Digimon who, although it has a hard shell, still has low aggression. It has one hard claw on each of its fore-legs, and four on each of its middle- and hind-legs, and in particular, the middle-legs are able to skillfully grasp objects just like a human hand. Although the other Insectoids at its Digivolution level only possess fighting spirit, it still retains its naturally friendly sentiments, and displays its carefree way of life by doing things like sniffing the scent of flowers and napping in the shade of a tree.",
        img: "./images/tentomon.jpg",
    },
    Biyomon: {
        desc: "Biyomon is a Bird Digimon. Its wings have developed to become like arms and it is able to dexterously operate them and use them to grip objects, but for that reason, it is poor at flying through the air. It usually lives on the ground, but when danger draws near it escapes by flying away. Biyomon is as ambitious as her partner and is very dedicated to her partner.  As its personality is to be brimming over with curiosity, it loves to peck at the head portion of Tanemon.",
        img: "./images/biyomon.jpg",
    },
    Palmon: {
        desc: "Palmon is a Vegetation Digimon. It has a tropical flower blooming on its head. During the day, it opens up the flower and spreads its leaf-like arms to perform photosynthesis. It usually buries its root-like feet under the ground, and although it is absorbing nutrients, it is also able to walk. As for the flower on its head, when it is joyful or happy, it will waft about a sweet fragrance, but when it is angered or senses danger, it releases a foul stench that will drive off even large Digimon.",
        img: "./images/palmon.png",
    },
    Gomamon: {
        desc: "Gomamon is a Sea Animal Digimon. It has become able to move on land, and is covered in temperature-maintaining fur. The short, white fur that covers its body gets longer as it grows, and furthermore, it's said that it turns brown when it grows up. Its personality is a naughty-boy type that fiddles with everything it sees. The red fur growing along its back from the top of its head moves according to Gomamon's emotions, and when it gets angry, the fur bristles. Gomamon's claws are strong enough to easily break through solid ice, so you'll have a painful experience if you take it lightly.",
        img: "./images/gomamon.jpg",
    },
    Patamon: {
        desc: "Patamon is a Mammal Digimon. It is characterized by its large ears, and is able to fly through the air by using them as large wings, but because it only goes at a speed of 1 kph, it is said that it is definitely faster walking. However, it's very popular because its appearance is cute when it is desperately flying (though it seems that it doesn't feel the same). Due to its extremely obedient personality, its trainers are well-defended. Also, even though Patamon doesn't wear a Holy Ring, it is able to exhibit its hidden holy power, and it appears to have inherited the genes of ancient Digimon.",
        img: "./images/patamon.jpg"
    },
    Gatomon: {
        desc: "Gatomon is an Animal Digimon. It has a very healthy curiosity, so it loves pranks. Although its body is small, it is a precious Holy-species Digimon, and its appearance does not match the true strength it possesses. It wears a Holy Ring on its tail, but if it is lost, its power is decreased and it can no longer exhibit its original power. In order to defend itself, it wears long claws copied from SaberLeomon's data. Gatomon is devoted to defending her partner.",
        img: "./images/gatomon.jpg",
    },
    Veemon: {
        desc: 'Veemon is a Dragon Digimon. It is a new species of Digimon that was discovered recently. As a survivor of a species that flourished in the Genesis of the Digital World, it is able to perform "Armor Digivolution", a "pseudo-digivolution" using the Digi-Eggs. Among others, Veemon is an excellent combat species, as it possesses hidden power, and demonstrates tremendous abilities by Armor Digivolving. Although it has a mischievous, prank-loving personality, it has another side with a strong sense of justice.',
        img: "./images/veemon.png"
    },
    Hawkmon: {
        desc: "Hawkmon is a Bird Digimon. It is very polite, and is always calm, cool, and collected. Just like Veemon, it's a descendant of a special species that flourished in ancient times, so it's able to borrow the power of the 'Digi-Eggs' to pseudo-digivolve to an Armor. Hawkmon is a polite and very formal Digimon, this makes him come off like a samurai. His level-headed, polite personality helps balance out the more energetic and abrasive nature of his partner.",
        img: "./images/hawkmon.png",
    },
    Wormmon: {
        desc: "Wormmon is a Larva Digimon. It has a timid, cowardly personality. Just like Veemon and the others, it's a descendant of an ancient species, so it is able to perform special Armor Digivolutions. Also, it is said that in order for the fragile larva to grow into a powerful imago, Wormmon will one day digivolve into a Champion overflowing with power. It can definitely be said that it is a Digimon who has hidden potential for the future.",
        desc: "./images/Wormmon.png",
    },
    Armadillomon: {
        desc: "Armadillomon is a Mammal Digimon. Its body is covered in a hard shell. It has a carefree, charming personality, but occasionally gets hurt if it gets carried away. Just like Veemon and the others, Armadillomon is a descendant of an ancient species, so it is able to perform special Armor Digivolutions. Armadillomon is known to be reliable and relentless when it comes to protecting his partner.",
        img: "./images/Armadillomon.png",
    },
    Guilmon: {
        desc: "Guilmon is a Reptile Digimon. It has an appearance like a dinosaur that still retains its youth. Although it is still a Rookie, its potential as a combat species, something which all Digimon naturally possess, is very high, and it hides the ferocious personality of a carnivorous beast. The mark drawn on its abdomen is called the 'Digital Hazard', which is inscribed on those that have the potential to cause massive damage to computer data. However, as long as this ability is used peacefully, it can probably become a being that protects the Digital World.",
        img: "./images/guilmon.png",
    },
    Renamon: {
        desc: "Renamon is an Animal Digimon. It has the appearance of a golden fox. Renamon is a Digimon whose relationship with humans is expressed bluntly, so depending on how it was raised during its time as an In-Training Digimon, it is said that it can digivolve to a Renamon of particularly high intelligence. As it is always calm, cool, and collected, it is practiced enough that it doesn't lose that composure in any situation. Its slender, tall appearance excels when compared with other Rookies, and rather than Power Battling, it makes sport of the enemy with various arts that use its speed.",
        img: "./images/renamon.png",
    },
    Terriermon: {
        desc: "Terriermon is an Animal Digimon. It is an extremely precious Rookie Digimon that is a twin to Lopmon. While Terriermon has only one horn growing from its head and has a calm but robust personality. It is a Digimon shrouded in mystery, and it can be classified as a Beast-species Digimon from its body structure, but it's still not understood what kind of digivolved form it will take on. Also, it is rumored that it is sometimes born with its twin. It's a very cute type of Digimon, and from its calm behavior, it doesn't seem like a 'combat species', but when battling, it shows that it is more powerful than it appears.",
        img: "/images/Terriermon.png",
    },
    Impmon: {
        desc: "Impmon is an Evil Digimon. It has an appearance like a demon's child. It loves pranks, so it enjoys seeing the embarrassed appearances of its opponents. Also, it is said that when Impmon appears, electrical appliances temporarily go crazy, so an electronic image going out of order or ceasing to function might be because Impmon was pulling a prank. Although it is a Digimon that loves mischief and malice, it never toadies to the strong, but stands up to them with a strong attitude. However, the truth is that it has a lonely side.",
        img: "./images/Impmon.png",
    },
    Calumon: {
        desc: "Calumon is an Animal Digimon. This is 'digi-entelecheia' (the power of digivolution) given Digimon form. It is said to have the power to help other Digimon digivolve. It does not Digivolve or attack by itself. Calumon is a small, cute white creature with large eyes and comparatively small limbs. Its ears, usually short, can extend and it can even use them to fly. Its forehead bears the Zero Unit, which can manifest as the gem-like 'Crystal Matrix'.",
        img: "./images/Culumon.png",
    },

}

let finalResult = [];
let stronglyAgree = 0;
let agree = 0;
let somewhat = 0;
let disagree = 0;
let stronglyDisagree = 0;


function processSurvey() {
    currentId();  
    logResults();
    getDigimon();
    
};

function logResults() {
    for(i=0; i < finalResult.length; i++) {
        if(finalResult[i] === "strongly-agree") {
            stronglyAgree++;            
        } else if(finalResult[i] === "agree") {
            agree++;
        } else if(finalResult[i] === "somewhat") {
            somewhat++;
        } else if(finalResult[i] === "disagree") {
            disagree++;
        } else if(finalResult[i] === "strongly-disagree") {
            stronglyDisagree++;
        }
    }
} 

function showResult() {
    resultSection.style.display = 'block';
    resultSection.style.opacity = '1';
    document.body.style.background = "white";
    questionContainer.style.display = "none";
    submitBtn.style.display = "none";
    document.body.style.height = "100vh";
    refreshBtn.style.display = "flex";

}

const p = document.createElement("p");
const img = document.createElement("img");

function getDigimon() {
    if(finalResult.length >= 10) {
        if(stronglyDisagree === 10 || disagree === 10 || somewhat === 10) {
            p.textContent = Digimon.Impmon.desc;
            img.src = Digimon.Impmon.img;
            digimonSection.appendChild(p);
            digimonSection.appendChild(img);
            instructions.textContent = "Impmon is your partner for life!"

            showResult();
        } else if(stronglyAgree === 10 || agree === 10) {
            p.textContent = Digimon.Calumon.desc;
            img.src = Digimon.Calumon.img;
            digimonSection.appendChild(p);
            digimonSection.appendChild(img);
            instructions.textContent = "Calumon is your partner for life!"

            showResult();
        } else if(stronglyAgree > 7 && stronglyAgree < 10) {
            p.textContent = Digimon.Veemon.desc;
            img.src = Digimon.Veemon.img;
            digimonSection.appendChild(p);
            digimonSection.appendChild(img);
            instructions.textContent = "Veemon is your partner for life!"

            showResult();
        } else if(stronglyAgree > 4 && stronglyAgree < 8) {
            p.textContent = Digimon.Guilmon.desc;
            img.src = Digimon.Guilmon.img;
            digimonSection.appendChild(p);
            digimonSection.appendChild(img);
            instructions.textContent = "Guilmon is your partner for life!"

            showResult();
        } else if((stronglyAgree > 2 && stronglyAgree < 5) || (stronglyAgree === 2 && agree === 2 && somewhat === 2 && disagree === 2 && stronglyDisagree === 2)) {
            p.textContent = Digimon.Agumon.desc;
            img.src = Digimon.Agumon.img;
            digimonSection.appendChild(p);
            digimonSection.appendChild(img);
            instructions.textContent = "Agumon is your partner for life!"

            showResult();
        } else if(agree > 7 && agree < 10) {
            p.textContent = Digimon.Gabumon.desc;
            img.src = Digimon.Gabumon.img;
            digimonSection.appendChild(p);
            digimonSection.appendChild(img);
            instructions.textContent = "Gabumon is your partner for life!"

            showResult();
        } else if(agree > 5 && agree < 8) {
            p.textContent = Digimon.Patamon.desc;
            img.src = Digimon.Patamon.img;
            digimonSection.appendChild(p);
            digimonSection.appendChild(img);
            instructions.textContent = "Patamon is your partner for life!"

            showResult();
        } else if(agree > 2 && agree < 6) {
            p.textContent = Digimon.Renamon.desc;
            img.src = Digimon.Renamon.img;
            digimonSection.appendChild(p);
            digimonSection.appendChild(img);
            instructions.textContent = "Renamon is your partner for life!"

            showResult();
        } else if(somewhat > 7 && somewhat < 10) {
            p.textContent = Digimon.Gatomon.desc;
            img.src = Digimon.Gatomon.img;
            digimonSection.appendChild(p);
            digimonSection.appendChild(img);
            instructions.textContent = "Gatomon is your partner for life!"

            showResult();
        } else if (somewhat > 5 && somewhat < 8) {
            p.textContent = Digimon.Tentomon.desc;
            img.src = Digimon.Tentomon.img;
            digimonSection.appendChild(p);
            digimonSection.appendChild(img);
            instructions.textContent = "Tentomon is your partner for life!"

            showResult();
        } else if (somewhat > 2 && somewhat < 6) {
            p.textContent = Digimon.Gomamon.desc;
            img.src = Digimon.Gomamon.img;
            digimonSection.appendChild(p);
            digimonSection.appendChild(img);
            instructions.textContent = "Gomamon is your partner for life!"

            showResult();
        } else if (disagree > 7 && disagree < 10) {
            p.textContent = Digimon.Wormmon.desc;
            img.src = Digimon.Wormmon.img;
            digimonSection.appendChild(p);
            digimonSection.appendChild(img);
            instructions.textContent = "Wormmon is your partner for life!"

            showResult();
        } else if(disagree > 5 && disagree < 8) {
            p.textContent = Digimon.Palmon.desc;
            img.src = Digimon.Palmon.img;
            digimonSection.appendChild(p);
            digimonSection.appendChild(img);
            instructions.textContent = "Palmon is your partner for life!"

            showResult();
        } else if(disagree > 2 && disagree < 6) {
            p.textContent = Digimon.Biyomon.desc;
            img.src = Digimon.Biyomon.img;
            digimonSection.appendChild(p);
            digimonSection.appendChild(img);
            instructions.textContent = "Biyomon is your partner for life!"

            showResult();
        } else if(stronglyDisagree > 2 && stronglyDisagree < 10) {
            p.textContent = Digimon.Armadillomon.desc;
            img.src = Digimon.Armadillomon.img;
            digimonSection.appendChild(p);
            digimonSection.appendChild(img);
            instructions.textContent = "Armadillomon is your partner for life!"

            showResult();
        }
    } else if(finalResult.length < 10) {
        p.textContent = 'Did you answer every question?';
        digimonSection.appendChild(p);
        instructions.textContent = "Something went wrong!"

        showResult();
    }
}

function currentId() {
    for(i=0; i < radioBtns.length; i++) {
        if(radioBtns[i].checked) {
           if(radioBtns[i].name === Survey.courage.name) {
                finalResult.push(radioBtns[i].value)
            } else if (radioBtns[i].name === Survey.friendship.name) {
                finalResult.push(radioBtns[i].value)
            } else if (radioBtns[i].name === Survey.love.name) {
                finalResult.push(radioBtns[i].value)
            } else if (radioBtns[i].name === Survey.sincerity.name) {
                finalResult.push(radioBtns[i].value)
            } else if (radioBtns[i].name === Survey.knowledge.name) {
                finalResult.push(radioBtns[i].value)
            } else if (radioBtns[i].name === Survey.reliability.name) {
                finalResult.push(radioBtns[i].value)
            } else if (radioBtns[i].name === Survey.hope.name) {
                finalResult.push(radioBtns[i].value)
            } else if (radioBtns[i].name === Survey.light.name) {
                finalResult.push(radioBtns[i].value)
            } else if (radioBtns[i].name === Survey.kindness.name) {
                finalResult.push(radioBtns[i].value)
            } else if (radioBtns[i].name === Survey.miracles.name) {
                finalResult.push(radioBtns[i].value)
            }

        }
    }
};
let forceGet = true;
function reloadPage(forceGet) {
    location.reload(forceGet);
}

submitBtn.addEventListener('click', processSurvey);
refreshBtn.addEventListener('click', reloadPage);