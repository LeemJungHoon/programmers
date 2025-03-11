function solution(chicken) {
    let service = 0; 
    
    while (chicken >= 10) {
        let extraChicken = Math.floor(chicken / 10); 
        service += extraChicken;
        chicken = extraChicken + (chicken % 10); 
    }
    
    return service;
}
