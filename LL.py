class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedLists:
    def __init__(self, value=0):
        self.length = 0
        if value is None:
            return
        newNode = Node(value=value)
        self.head = newNode
        self.tail = newNode
        self.length += 1
    
    def print_list(self):
        temp = self.head
        while temp is not None:
            print(temp.value)
            temp = temp.next
    
    def append(self, value):
        newNode = Node(value=value)
        if not self.head:
            self.head = newNode
            self.tail = newNode
        else:
            self.tail.next = newNode
            self.tail = newNode
        self.length += 1
        return True
    
    def pop(self):
        if self.length == 0: return
        temp = self.head
        prev = self.head
        while (temp.next):
              prev = temp
              temp = temp.next
        prev.next = None
        self.tail = prev
        self.length -= 1
        if self.length == 0:
            self.head = None
            self.tail = None
            return temp.value
    
    def prepend(self, value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node
        if self.length == 0: self.tail = new_node 
        self.length += 1
        
        return True
    
    def pop_first(self):
        if self.length == 0: return None
        temp = self.head
        self.head = self.head.next
        temp.next == None
        self.length -= 1
        if self.length == 0:
            self.tail = None
        return temp
    
    def get(self, index):
        if index < 0 or index > self.length: return None
        temp = self.head
        for _ in range(index): temp = temp.next
        return temp
    def set_value(self, index, value):
        temp = self.get(index=index)
        if temp: 
            temp.value = value
            return True
        return False
    def insert(self, index, value):
        if index < 0 or index > self.length: return False
        if index == 0:
            return self.prepend(value=value)
        if index == self.length:
            return self.append(value=value)
        temp = self.get(index)
        new_node = Node(value=value)
        new_node.next = temp.next
        temp.next = new_node
        self.length += 1
        return True
    def remove(self, index):
        if index < 0 or index >= self.length: return False
        if index == 0: return self.pop_first()
        if index == self.length - 1: return self.pop()
        temp = self.head
        prev = self.head
        for _ in range(index):
            prev = temp
            temp = temp.next
        prev.next = temp.next
        return temp
    def getLength(self):
        length = 0
        temp = self.head
        while temp:
            length += 1
            temp = temp.next
        return length
    
    def find_middle_node(self):
        length = self.getLength()
        if length == 0: return None
        temp = self.head
        if length%2 == 0:
            loop = (length/2)
            for _ in range(int(loop)):
                temp = temp.next
        else:
            loop = ((length + 1)/2)
            for _ in range((int((loop)))- 1):
                temp = temp.next
        return temp.value
    
    def reverse(self):
        temp = self.head
        self.head = self.tail
        self.tail = temp
        after = temp.next
        before = None
        for _ in range(self.length):
            after = temp.next
            temp.next = before
            before = temp
            temp = after
        return True

myLL = LinkedLists(1)
myLL.append(2)
myLL.append(3)
myLL.append(4)
myLL.print_list()
print(f"Middle: {myLL.find_middle_node()}")
print(f"Length: {myLL.length}")
print(f"Head: {myLL.head.value if myLL.head is not None else "None"}")
print(f"Tail: {myLL.tail.value if myLL.tail is not None else "None"}")