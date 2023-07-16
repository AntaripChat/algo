// // Question Name: Magnetic Forces

// // Problem Statement

// // You are given N magnets arranged in a line. This arrangement of magnets in a line is called Magnet Sequence. The strength of the ith magnet is Ai. As all these magnets are strongly attached to each other and separating any two consecutive magnets requires some strength.

// // More specifically separating two consecutive magnets(say i and i+1) requires a strength of |A[i+1]-A[i]|. Here |x| represents the absolute value of x.

// // You are a body-builder and your goal today is to break the sequence of magnets. In lunch, you have eaten protein-salad and hence have B calories stored in your body. Hence you can spend at most B calories in separating the magnets.

// // You separate the magnets as follows :

// // You remove a prefix of magnets from array A. Like if array A = [5,1,6,3,4], and you remove the prefix A1..3. Magnet 3 and Magnet 4 are attached to each other with strength = |6-3| = 3. Hence you have to spend 3 calories in doing this and array A becomes = [5,1,6,3,4] = [3,4].
// // Next, say you remove the prefix A1..1. This requires you to burn |3-4| = 1 calories.
// // Hence in total, you burnt 3+1 = 4 calories and have made 2 separations in the magnet sequence.
// // Given array A and integer B, find the maximum number of separations you can make in the magnet sequence, by burning atmost B calories in total.

// // Input Format

// // First line contains two space-separated integers denoting N and B.
// // The next line contains N space-separated integers denoting the elements of array A.
// // Output Format

// // Print the maximum number of separations you can make in the magnet sequence, by burning at most B calories in total.
// // Constraints

// // 2<=N<=10^5
// // 1<=B<=10^9
// // 1<=Ai<=10^9
// // Sample Input 1

// // 5 6

// // 5 1 6 3 4

// // Sample Output 1

// // 2

// // Explanation of Sample 1

// // You can break the magnet sequence two times as :

// // Remove the prefix A1..2. Calories required to do this = |1-6| = 5. Magnet sequence becomes = [6,3,4].
// // Remove the prefix A1..2. Calories required to do this = |3-4| = 1. Magnet sequence becomes = [4].
// // Total calories required = 5+1 = 6 which is <= B




// Taller Or Shorter
// Question Name: Taller Or Shorter

// Problem Statement

// Antonio is one of the organizing members of this year’s Boys Scout Campaign. Antonio has been allotted N boys this year. Antonio arranged all these boys in a line from 1 to N.

// Now he made a comparison array based on the heights of these boys. Comparison array is an array of size N-1, where the ith element is :

// 1, if the height of the ith boy is more than the height of the (i+1)th boy.
// -1, if the height of the ith student is less than the height of the (i+1)th student.
// 0, if the height of the ith student is equal to the height of the (i+1)th student.
// Now all the boys have gone home and Antonio has to answer Q queries :

// In the ith query, he will be given two integers a and b and he has to tell if the height of the ath boy is more than, equal to, or less than the height of the bth boy.
// Antonio is facing difficulties in answering the queries and asks his coder friend(you) for help. Given the comparison array, answer the Q queries for Antonio.

// In each query print “1”(without quotes) if ath boy is taller than bth boy, “-1” if ath boy is shorter than bth boy, “0” is the ath and the bth boy have the same height. If for any query the information is insufficient print “Not Possible”(without quotes) instead.

// Input Format

// First line contains a single integer denoting N.
// Next line contains N-1 space separated integers denoting the elements of the comparison array.
// Next line contains a single integer denoting Q.
// Next Q lines contains two space separated integers denoting a and b for each of the queries.
// Output Format

// For each query print “1”(without quotes) if ath boy is taller than bth boy, “-1” if ath boy is shorter than bth boy, “0” is the ath and the bth boy have the same height.
// Print the answer for every query in a separate line.
// Constraints

// 2<=N<=105
// 1<=Q<=105
// 1<=a,b<=N
// a!=b
// Sample Input 1

// 4

// 1 0 -1

// 3

// 1 2

// 1 4

// 2 4

// Sample Output 1

// 1

// Not Possible

// -1

// Explanation of Sample 1

// Query 1 :

// Clearly 1 has more height than 2, as A1 = 1.
// Query 3 :

// The heights of students 2 and 3 are equal as A2 = 0. As A3 = -1, the height of student 3 is less than the height of 4. Hence the height of student 2 is also less than the height of student 4.
// Query 2 :

// Consider that the heights of the students were: [10 8 8 9] and [10 8 8 11]. For both these heights, the comparison array is [1 0 -1]. But in the first case height of the 1st student is more than the height of the 4th student, and in the second case height of the 1st student is less than the height of the 4th student.
// Hence we can’t say which one is greater/smaller from the comparison array.
