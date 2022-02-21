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
	console.log("executing test 3 - strings lexicografically")
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

