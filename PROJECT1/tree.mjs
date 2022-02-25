"use strict";

/**
 * Object represents 1 node in the binary search tree, 
 * object contains value and references to child nodes
 * @mixin
 * @param {any} value  - value held in this node
 */
function Node(value){
    this.value = value;
    this.right = null;
    this.left = null;
}

/**
 * Object contains root node of the binary search tree, and compare function
 * @mixin
 * @param {function} compareFunction - function to sort objects by
 */
export function Tree(compareFunction){
    this.compareFunction = compareFunction;
    this.root = null;
}

/**
 * Adds a new value to the tree
 * @memberof Tree
 * @param {any} new_value - value to be added
 * @param {Node} node - dont set this parameter, its only for recursion
 */
Tree.prototype.insertValue = function(new_value, node = this.root){
    if(this.root === null)
        this.root = new Node(new_value);
    else{
        if(this.compareFunction(new_value, node.value)){
            if(node.left === null)
                node.left = new Node(new_value);
            else
                this.insertValue(new_value,node.left);
        }
        else {
            if(node.right === null)
                node.right = new Node(new_value);
            else
                this.insertValue(new_value,node.right);
        }
    }
}

/**
 * Generates objects from the tree "preorder"
 * @memberof Tree
 * @param {Node} node - dont set this parameter, its only for recursion
 */
Tree.prototype.preorder = function*(node = this.root){
    if(node !== null)
    {
        yield node.value;
        yield * this.preorder(node.left);
        yield * this.preorder(node.right);
    }
}

/**
 * Generates objects from the tree "inorder"
 * @memberof Tree
 * @param {Node} node - dont set this parameter, its only for recursion
 */
Tree.prototype.inorder = function*(node = this.root){
    if(node !== null)
    {
        yield * this.inorder(node.left);
        yield node.value;
        yield * this.inorder(node.right);
    }
}

/**
 * Generates objects from the tree "postorder"
 * @memberof Tree
 * @param {Node} node - dont set this parameter, its only for recursion
 */
Tree.prototype.postorder = function*(node = this.root){
    if(node !== null)
    {
        yield * this.postorder(node.left);
        yield * this.postorder(node.right);
        yield node.value;
    }
}