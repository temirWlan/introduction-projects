# LIST
empty_list = []
empty_list = list()
reserved_list = [None] * 100
example_list = [1, 2, 3, 4, 5]

example_list.append(5)
example_list.insert(0, 7)
example_list.extend(reserved_list)
del example_list[1]

example_list[1:4]