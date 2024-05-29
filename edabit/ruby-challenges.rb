# Unlucky 13
# Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.
def unlucky_13(nums)
	nums.keep_if { |n| n % 13 != 0 }
end