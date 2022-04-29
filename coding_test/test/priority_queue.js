class MinHeap {
    constructor() {
        this.nodes = [];
    }

    insert(value) {
        this.nodes.push(value);
        this.bubbleUp();
    }

    bubbleUp(index = this.nodes.length - 1) {
        if (index < 1) return;

        const currentNode = this.nodes[index];
        const parentIndex = Math.floor((index - 1) / 2);
        const parentNode = this.nodes[parentIndex];
        if (parentNode.cost <= currentNode.cost) return;

        this.nodes[index] = parentNode;
        this.nodes[parentIndex] = currentNode;
        index = parentIndex;
        this.bubbleUp(index);
    }

    extract() {
        const min = this.nodes[0];
        if (this.nodes.length === 1) {
            this.nodes.pop();
            return min;
        };
        this.nodes[0] = this.nodes.pop()
        this.trickleDown();
        return min;
    }

    trickleDown(index = 0) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        const length = this.nodes.length;
        let minimum = index;

        if (!this.nodes[rightChildIndex] && !this.nodes[leftChildIndex]) return;
        if (!this.nodes[rightChildIndex]) {
            if (this.nodes[leftChildIndex].cost < this.nodes[minimum].cost) {
                minimum = leftChildIndex;
            }
            return;
        }

        if (this.nodes[leftChildIndex].cost > this.nodes[rightChildIndex].cost) {
            if (rightChildIndex <= length && this.nodes[rightChildIndex].cost < this.nodes[minimum].cost) {
                minimum = rightChildIndex;
            }
        } else {
            if (leftChildIndex <= length && this.nodes[leftChildIndex].cost < this.nodes[minimum].cost) {
                minimum = leftChildIndex;
            }
        }

        if (minimum !== index) {
            let t = this.nodes[minimum];
            this.nodes[minimum] = this.nodes[index];
            this.nodes[index] = t;
            this.trickleDown(minimum);
        }
    }
}