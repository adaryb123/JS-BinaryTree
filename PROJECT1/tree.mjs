"use strict";

function Node(value){
    this.value = value;
    this.right = null;
    this.left = null;
}

export function Tree(compareFunction){
    this.compareFunction = compareFunction;
    this.root = null;

}

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

Tree.prototype.printTreeInorder = function(node = this.root){
    if(node !== null)
    {
        this.printTreeInorder(node.left);
        console.log(node.value, ", ");
        this.printTreeInorder(node.right);
    }
}

Tree.prototype.preorder = function*(node = this.root){
    if(node !== null)
    {
        yield node.value;
        yield * this.preorder(node.left);
        yield * this.preorder(node.right);
    }
}

Tree.prototype.inorder = function*(node = this.root){
    if(node !== null)
    {
        yield * this.inorder(node.left);
        yield node.value;
        yield * this.inorder(node.right);
    }
}

Tree.prototype.postorder = function*(node = this.root){
    if(node !== null)
    {
        yield * this.postorder(node.left);
        yield * this.postorder(node.right);
        yield node.value;
    }
}