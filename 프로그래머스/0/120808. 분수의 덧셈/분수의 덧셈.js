function solution(numer1, denom1, numer2, denom2) {
    //43
    
    let num1 = numer1 * denom2 + numer2* denom1;
    let num2 = denom1 * denom2;
    
    const gcd = (a,b) => {
        return b === 0 ? a : gcd(b, a % b);
    }
    
    let divisor = gcd(num1,num2);
    
    
    return [num1 / divisor, num2 / divisor];
}