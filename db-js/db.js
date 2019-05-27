const shortid = require("shortid");
class GraphDatabase {
    constructor() {
        this.adjMatrix = {};
        this.nodes = [];
    }
    addNode(newNode) {
        newNode.id = this.nodes.length;
        this.nodes.push(newNode);
    }
    getNodes() {
        return this.nodes;
    }
    linkNodesById(parent, child) {
        if (this.adjMatrix[parent] == null) {
            this.adjMatrix[parent] = {};
        }
        this.adjMatrix[parent][child] = true;
    }
    getChildren(parentId) {
        let outChildren = [];
        for (let child in this.adjMatrix[parentId]) {
            outChildren.push(this.nodes[child]);
        }
        return outChildren;
    }
}

module.exports = GraphDatabase;
