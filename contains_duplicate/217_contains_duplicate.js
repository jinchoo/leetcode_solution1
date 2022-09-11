//create a memory

//Go through array and see if what i see now, is something i've seen before
//if my number is never seen before, put it is memory
//if the number does exist in memory, return true
//[1,2,3,1]
var containsDuplicate = function (nums) {
  let hashMap = {}
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]] === undefined) {
      hashMap[nums[i]] = [i]
    } else {
      return true
    }
  }
  return false
}

//Time Complexity = O(N);
//Space Complexity = O(N)
