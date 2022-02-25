/* 
   Author : Adam Rybansky
   Login : xryban00
   Tested on Node.js version 17.5.0
*/

"use strict";

import { Tree } from "./tree.mjs";

{
	console.log("executing test 1 - natural numbers, compared from lowest to highest")
	let input = [5,7,2131345646,9,4,13,12415486];
	let preorderOutput = [5,4,7,2131345646,9,13,12415486]
	let inorderOutput = [4,5,7,9,13,12415486,2131345646]
	let postorderOutput = [4,12415486,13,9,2131345646,7,5]
	const arrayEquals = (a, b) => JSON.stringify(a) == JSON.stringify(b);
	let success = true;
	let t = new Tree((a,b) => a < b);
	input.forEach(i => t.insertValue(i));

	let testOutput = []
	for (let n of t.preorder())
		testOutput.push(n);
	if (!arrayEquals(preorderOutput,testOutput))
		success = false;

	testOutput = []
	for (let n of t.inorder())
		testOutput.push(n);
	if (!arrayEquals(inorderOutput,testOutput))
		success = false;

	testOutput = []
	for (let n of t.postorder())
		testOutput.push(n);
	if (!arrayEquals(postorderOutput,testOutput))
		success = false;

	if (success)
		console.log("PASS")
	else
		console.log("FAIL")
}


{
	console.log("executing test 2 - real numbers, compared from highest to lowest")
	let input = [-0.7,59,-88,0,6.6666,6.6662,-18.32];
	let preorderOutput = [-0.7,59,0,6.6666,6.6662,-88,-18.32]
	let inorderOutput = [59,6.6666,6.6662,0,-0.7,-18.32,-88]
	let postorderOutput = [6.6662,6.6666,0,59,-18.32,-88,-0.7]
	const arrayEquals = (a, b) => JSON.stringify(a) == JSON.stringify(b);
	let success = true;
	let t = new Tree((a,b) => a > b);
	input.forEach(i => t.insertValue(i));
	let testOutput = []
	for (let n of t.preorder())
		testOutput.push(n);
	if (!arrayEquals(preorderOutput,testOutput))
		success = false;

	testOutput = []
	for (let n of t.inorder())
		testOutput.push(n);
	if (!arrayEquals(inorderOutput,testOutput))
		success = false;

	testOutput = []
	for (let n of t.postorder())
		testOutput.push(n);
	if (!arrayEquals(postorderOutput,testOutput))
		success = false;

	if (success)
		console.log("PASS")
	else
		console.log("FAIL")
}


{
	console.log("executing test 3 - strings, compared alphabetically")
	let input = ['xgb','x','xggb','zzz','a','','xgbb'];
	let preorderOutput = ['xgb','x','a','','xggb','xgbb','zzz']
	let inorderOutput = ['','a','x','xgb','xgbb','xggb','zzz']
	let postorderOutput = ['','a','x','xgbb','zzz','xggb','xgb']
	const arrayEquals = (a, b) => JSON.stringify(a) == JSON.stringify(b);
	let success = true;
	let t = new Tree((a,b) => a < b);
	input.forEach(i => t.insertValue(i));

	let testOutput = []
	for (let n of t.preorder())
		testOutput.push(n);
	if (!arrayEquals(preorderOutput,testOutput))
		success = false;

	testOutput = []
	for (let n of t.inorder())
		testOutput.push(n);
	if (!arrayEquals(inorderOutput,testOutput))
		success = false;

	testOutput = []
	for (let n of t.postorder())
		testOutput.push(n);
	if (!arrayEquals(postorderOutput,testOutput))
		success = false;
	
	if (success)
		console.log("PASS")
	else
		console.log("FAIL")
}


{
	console.log("executing test 4 - different data types in the same tree");
	let input = ["adass", 7,"kek",true,-5.2,false,(a,b) => a+b,"g"];
	let preorderOutput = ['adass', 'kek', 'g', 7, -5.2, true, false, (a,b) => a+b];
	let inorderOutput =  ['g', 'kek', 'adass', -5.2, 7, false, true, (a,b) => a+b];
	let postorderOutput = ['g', 'kek', -5.2, false, (a,b) => a+b, true, 7, 'adass'];
	const arrayEquals = (a, b) => JSON.stringify(a) == JSON.stringify(b);
	let success = true;
	let t = new Tree((a,b) => (typeof a == typeof b));
	input.forEach(i => t.insertValue(i));

	let testOutput = []
	for (let n of t.preorder())
		testOutput.push(n);
	if (!arrayEquals(preorderOutput,testOutput))
		success = false;

	testOutput = []
	for (let n of t.inorder())
		testOutput.push(n);
	if (!arrayEquals(inorderOutput,testOutput))
		success = false;

	testOutput = []
	for (let n of t.postorder())
		testOutput.push(n);
	if (!arrayEquals(postorderOutput,testOutput))
		success = false;

	if (success)
		console.log("PASS")
	else
		console.log("FAIL")
}


{
	console.log("executing test 5 - multiple iterators at the same time")
	let input = [5,7,2131345646,9,4,13,12415486];
	let preorderOutput = [5,4,7,2131345646,9,13,12415486]
	let inorderOutput = [4,5,7,9,13,12415486,2131345646]
	let postorderOutput = [4,12415486,13,9,2131345646,7,5]
	const arrayEquals = (a, b) => JSON.stringify(a) == JSON.stringify(b);
	let success = true;
	let t = new Tree((a,b) => a < b);
	input.forEach(i => t.insertValue(i));

	let pre1 = t.preorder();
	let in1 = t.inorder();
	let post1 = t.postorder();
	let post2 = t.postorder();
	
	let testPre1 = [];
	let testIn1 = [];
	let testPost1 = [];
	let testPost2 = [];

	for(let i = 0 ; i < 7; i++){
		testPre1.push(pre1.next().value);
		testIn1.push(in1.next().value);
		testPost1.push(post1.next().value);
		testPost2.push(post2.next().value);
	}

	if (!arrayEquals(testPre1,preorderOutput))
		success = false;
	else if (!arrayEquals(testIn1,inorderOutput))
		success = false;
	else if (!arrayEquals(testPost1,postorderOutput))
		success = false;
	else if (!arrayEquals(testPost1,postorderOutput))
		success = false;

	if (success)
		console.log("PASS")
	else
		console.log("FAIL")
}

{
	console.log("executing test 6 - functions, compared by their return value")
	let input = [(a,b) => a + b, (a,b) => a - b, (a,b) => a * b, (a,b) => a % b, (a,b) => a / b, (a,b) => a ** b];
	let preorderOutput = [(a,b) => a + b, (a,b) => a - b, (a,b) => a % b, (a,b) => a / b, (a,b) => a * b, (a,b) => a ** b];
	let inorderOutput = [(a,b) => a - b, (a,b) => a / b, (a,b) => a % b, (a,b) => a + b, (a,b) => a * b, (a,b) => a ** b];
	let postorderOutput = [(a,b) => a / b, (a,b) => a % b, (a,b) => a - b, (a,b) => a ** b, (a,b) => a * b, (a,b) => a + b];

	function arrayEquals(a,b){
		for(let i in a){
			if(a[i].toString() != b[i].toString())
				return false;
		}
		return true;
	}

	let success = true;
	let t = new Tree((a,b) => a(2,3) < b(2,3));
	input.forEach(i => t.insertValue(i));

	let testOutput = []
	for (let n of t.preorder())
		testOutput.push(n);
	if (!arrayEquals(preorderOutput,testOutput))
		success = false;

	testOutput = []
	for (let n of t.inorder()){
		testOutput.push(n);
	}
	if (!arrayEquals(inorderOutput,testOutput))
		success = false;

	testOutput = []
	for (let n of t.postorder())
		testOutput.push(n);
	if (!arrayEquals(postorderOutput,testOutput))
		success = false;
	
	if (success)
		console.log("PASS")
	else
		console.log("FAIL")
}