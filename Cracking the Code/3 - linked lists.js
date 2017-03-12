/*@flow*/
/*
	Linked Lists
*/

// node class

function Node(data) {
	this.data = data;
	this.next = null;
}

function SinglyList() {
	this.length = 0;
	this. head = null;
}

SinglyList.prototype.add = function(value) {
	let node = new Node(value);
	let currentNode = this.head;

	if (!currentNode) {
		this.head = node;
		this.length++;
		return node;
	}

	while (currentNode.next) {
		currentNode = currentNode.next;
	}

	currentNode.next = node;
	this.length++;
	return node;
}

SinglyList.prototype.searchNodeAt = function(position) {
	let currentNode = this.head;
	let length = this.length;
	let count = 0;
	let message = {
		failure: "Nonexistant"
	};

	if (length === 0 || position < 0 || position > length) {
		throw new Error(message.failure);
	}

	while (count < position) {
		currentNode = currentNode.next;
		count++;
	}

	return currentNode;
}

SinglyList.prototype.remove = function(position) {
	let currentNode = this.head;
	let length = this.length;
	let count = 0;
	let message = {
		failure: "Nonexistant"
	};
	let prevNode = null;
	let nodeToDelete = null;
	let deletedNode = null;

	if (length === 0 || position < 0 || position > length) {
		throw new Error(message.failure);
	}

	if (position === 0) {
		this.head = currentNode.next;
		deletedNode = currentNode;
		currentNode = null;
		this.length--;
		return deletedNode;
	}

	while (count < position) {
		prevNode = currentNode;
		nodeToDelete = currentNode.next;
		count++;
	}

	prevNode.next = nodeToDelete.next;
	deletedNode = nodeToDelete;
	nodeToDelete = null;
	return deletedNode;
}


// Doubly linked List

function Node(value) {
	this.data = value;
	this.prev = null;
	this.next = null;
}

function DoublyLinkedList() {
	this.length = 0;
	this.head = null;
	this.tail = null;
}

DoublyLinkedList.prototype.add = function(value) {
	let node = new Node(value);

	if (this.length === 0) {
		this.head = node;
		this.tail = node;
	}
	else {
		this.tail.next = node;
		node.prev = this.tail;
		this.tail = node;
	}
	this.length++;
	return node;
};

DoublyLinkedList.prototype.searchNodeAt = function(position) {
	let currentNode = this.head;
	let length = this.length;
	let count = 0;
	let message = {
		failure: "Nonexistant"
	};

	if (length === 0 || position < 0 || position > length) {
		throw new Error(message.failure);
	}

	while (count < position) {
		currentNode = currentNode.next;
		count++;
	}

	return currentNode;
};

DoublyLinkedList.prototype.remove = function(position) {
	let currentNode = this.head;
	let length = this.length;
	let count = 0;
	let message = {
		failure: "Nonexistant"
	};
	let prevNode = null;
	let nodeToDelete = null;
	let deletedNode = null;
	let nextNode = null;

	if (length === 0 || position < 0 || position > length) {
		throw new Error(message.failure);
	}

	if (position === 0) {
		this.head = currentNode.next;

		if (this.head) {
			this.head.prev = null;
		}
		else {
			this.tail = null;
		}
	}
	else if (position === this.length - 1) {
		this.tall = this.tail.prev;
		this.tail.next = null;
	}
	else {
		while (count < position) {
			currentNode = currentNode.next;
			count++;
		}

		prevNode = currentNode.prev;
		nodeToDelete = currentNode;
		nextNode = currentNode.next;

		prevNode.next = nextNode;
		nextNode.prev = prevNode;
		deletedNode = nodeToDelete;
		nodeToDelete = null;
	}

	this.length--;
	return;
}


/*
*/

function SinglyLinkedList() {
	class Node() {
		constructor(data: any) {
			this.data = data;
			this.next = null;
		}
	}

	this.head = null;
	this.length = 0;

	this.add = (data: any) => {
		const nodeToAdd = new Node(data);
		let nodeToCheck = this.head;

		if (!nodeToCheck) {
			this.head = nodeToAdd;
			this.length++;
			return nodeToAdd;
		}

		while (nodeToCheck.next) {
			nodeToCheck = nodeToCheck.next;
		}

		nodeToCheck.next = nodeToAdd;
		this.length++;
		return nodeToAdd;
	}
}


// 2.1

const removeDupes = (list: LinkedList) => {
	if (!list) {
		return list;
	}

	let seen = [];
	let currentNode = list;

	seen.push(currentNode.val);
	while (currentNode.next) {
		if (seen.includes(currentNode.val)) {
			currentNode.next = currentNode.next.next;
		}
		else {
			seen.push(currentNode.next.val);
			currentNode = currentNode.next;
		}
	}

	return list;
};

// 2.2

const kthToLast = (list: LinkedList, position: number) => {
	if (!list) {
		return;
	}

	let currentNode = list;
	let kth = list;

	for (let i = 0; i < position; i++) {
		currentNode = currentNode.next;
		if (!currentNode) {
			return;
		}
	}

	while (currentNode.next) {
		currentNode = currentNode.next;
		kth = kth.next;
	}

	return kth.val;
};

// 2.3

const deleteMiddleNode = (node: node) => {
	if (!node || !node.next) {
		return;
	}

	node.val = node.next.val;
	node.next = node.next.next;
};

// 2.4

const partition = (list: LinkedList, partition: number) => {
	if (!list) {
		return;
	}

	let currentNode = list;
	let prevNode = null;
	let tail = list;

	/*
		set tail
	*/
	while (tail.next) {
		tail = tail.next;
	}

	while (currentNode) {
		if (!prevNode) {
			if (currentNode.val > partition) {
				prevNode = currentNode;
				tail.next = currentNode;
				tail = tail.next;
				tail.next = null;
				currentNode = currentNode.next;
			}
			else {
				prevNode = currentNode;
				currentNode = currentNode.next;
			}
		}
		else {
			if (currentNode.val > partition) {
				tail.next = currentNode;
				tail = tail.next;
				tail.next = null;
				prevNode.next = currentNode.next;
				currentNode = currentNode.next;
			}
			else {
				prevNode = currentNode;
				currentNode = currentNode.next;
			}
		}
	}
};
