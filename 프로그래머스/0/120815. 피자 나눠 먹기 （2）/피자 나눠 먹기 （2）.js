function solution(n) {
    
  const lcm = (a, b) => (a * b) / gcd(a, b);
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  
  return lcm(6, n) / 6;

}