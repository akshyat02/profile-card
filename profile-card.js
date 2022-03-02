VanillaTilt.init(document.querySelectorAll(".box"), { 		
    max: 25, 		
    speed: 300,
    glare: true,
    "max-glare": 0.6
    
});
VanillaTilt.init(document.querySelectorAll(".social-icon"), { 		
    max: 35, 		
    speed: 1000,
    glare: true,
    "max-glare": 0.8
    
});

//It also supports NodeList 	
VanillaTilt.init(document.querySelectorAll(".box")); 
VanillaTilt.init(document.querySelectorAll(".social-icon"));