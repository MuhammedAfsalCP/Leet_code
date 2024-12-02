var getCommon = function(nums1, nums2) {
    const nums1Set = new Set(nums1); // Convert nums1 to a Set for fast lookup
    nums2.sort((a, b) => a - b); // Sort nums2

    for (let num of nums2) {
        if (nums1Set.has(num)) { // Check if nums1 contains the number
            return num; // Return the smallest common element
        }
    }
    return -1; // Return -1 if no common element is found
};