def digital_root(n):
    if len(str(n)) > 1:
        return rec(n)
    else:
        return 0

def rec(n):
    my_sum, numbers = 0, []
    for i in str(n):
        numbers.append(int(i))
        my_sum = sum(numbers)
        if len(str(my_sum)) > 1:
            del numbers[:]
            for i in str(my_sum):
                print(numbers)
                numbers.append(int(i))
                my_sum = sum(numbers)
    return my_sum


if __name__ == "__main__":
    print(digital_root(14590145))