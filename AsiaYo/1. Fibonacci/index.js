const fibonacii = (n) => {
  if (n <= 0) return 'n must be greater than 0'

  let dp = Array(n).fill(0)
  // base case
  dp[0] = 0
  dp[1] = 1

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1]
  }

  return dp[n - 1]
}
// Time Complexity : O(n)
// Space Complexity: O(n)

fibonacii(3) // 1
fibonacii(5) // 3
fibonacii(10) // 34
fibonacii(-1) // "n must be greater than 0"
