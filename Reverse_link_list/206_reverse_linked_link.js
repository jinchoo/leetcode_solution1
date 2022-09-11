var reverseList = function (head) {
  let temp = null
  let currentNode = head

  while (currentNode) {
    let nextNode = currentNode.next
    currentNode.next = temp
    temp = currentNode
    currentNode = nextNode
  }
  return temp
}
