function solution(today, terms, privacies) {
    //59
    const obj = {};
    
    terms.forEach((item,idx) => {
        obj[item.split(" ")[0]] = +item.split(" ")[1];
    })
    
    return privacies.map((item,idx) => {
        let year = +item.split(" ")[0].split(".")[0];
        let month = +item.split(" ")[0].split(".")[1];
        let day = +item.split(" ")[0].split(".")[2];
        let dDay = obj[item.split("")[item.length-1]];
        
        let tYear = +today.split(".")[0];
        let tMonth = +today.split(".")[1];
        let tDay = +today.split(".")[2];
        
        month += dDay; 
        while(month > 12) 
        { 
            month -= 12; 
            year++; 
        }
        
        
        if (year < tYear || (year === tYear && month < tMonth) || (year === tYear && month === tMonth && day <= tDay)) 
        { 
            return idx + 1; 
        } 
        return null
    }).filter(item => item);
    
}