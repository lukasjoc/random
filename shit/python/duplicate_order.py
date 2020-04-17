def duplicate_encode(word: str) -> str:
    m,temp = {},""
    for l in word.lower():
        if l in temp:
            m[l] = 1
        else:
            m[l] = 0
            temp += l

    encoded = ""
    duplicate = encoded+")"
    for k in word:
        encoded += "(" if m.get(k) == 0 else duplicate

    return encoded
