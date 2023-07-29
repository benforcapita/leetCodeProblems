/**
 * You are asked to design a file system that allows you to create new paths and associate them with different values.

The format of a path is one or more concatenated strings of the form: / followed by one or more lowercase English letters. For example, "/leetcode" and "/leetcode/problems" are valid paths while an empty string "" and "/" are not.

Implement the FileSystem class:

bool createPath(string path, int value) Creates a new path and associates a value to it if possible and returns true. Returns false if the path already exists or its parent path doesn't exist.
int get(string path) Returns the value associated with path or returns -1 if the path doesn't exist.
 

Example 1:

Input: 
["FileSystem","createPath","get"]
[[],["/a",1],["/a"]]
Output: 
[null,true,1]
Explanation: 
FileSystem fileSystem = new FileSystem();

fileSystem.createPath("/a", 1); // return true
fileSystem.get("/a"); // return 1
Example 2:

Input: 
["FileSystem","createPath","createPath","get","createPath","get"]
[[],["/leet",1],["/leet/code",2],["/leet/code"],["/c/d",1],["/c"]]
Output: 
[null,true,true,2,false,-1]
Explanation: 
FileSystem fileSystem = new FileSystem();

fileSystem.createPath("/leet", 1); // return true
fileSystem.createPath("/leet/code", 2); // return true
fileSystem.get("/leet/code"); // return 2
fileSystem.createPath("/c/d", 1); // return false because the parent path "/c" doesn't exist.
fileSystem.get("/c"); // return -1 because this path doesn't exist.
 

Constraints:

2 <= path.length <= 100
1 <= value <= 109
Each path is valid and consists of lowercase English letters and '/'.
At most 104 calls in total will be made to createPath and get.
 */


class FileSystemclass {
    map: Map<string, number>
    constructor() {
        this.map = new Map();
    }
    /**
     *    Implement createPath: This method should first check if the path already exists in your Map. 
     *    If it does, return false because the path already exists. If the path doesn't exist, check if its parent path exists. 
     *    You can get the parent path by removing the last segment from the path.
     *    If the parent path doesn't exist and the path isn't root ("/"), return false. If the parent path exists or the path is root,
     *    add the path and its associated value to your Map and return true.
     * @param path  
     * @param value 
     * @returns 
     */
    createPath(path: string, value: number): boolean {
        if (this.map.has(path)) {
            return false;
        }
        const parentPath = path.substring(0, path.lastIndexOf("/"));
        if (!this.map.has(parentPath) && parentPath !== "") {
            return false;
        }
        this.map.set(path, value);
        return true;
    }

    get(path: string): number {
        return this.map.get(path) ?? -1;
    }
}


/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.createPath(path,value)
 * var param_2 = obj.get(path)
 */

const fileSystem = new FileSystemclass();
console.log(fileSystem.createPath("/leet", 1)); // return true
console.log(fileSystem.createPath("/leet/code", 2)); // return true
console.log(fileSystem.get("/leet/code")); // return 2
console.log(fileSystem.createPath("/c/d", 1)); // return false because the parent path "/c" doesn't exist.