var containsNearbyDuplicate = function(nums, k) {
    let seen = new Set(); // Track the numbers within the current window
    
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            return true; 
        }
        
        seen.add(nums[i]);
        if (seen.size > k) {
            seen.delete(nums[i - i]);
        }
    }
    
    return false; 
};