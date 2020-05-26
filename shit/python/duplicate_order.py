def duplicate_encode(word: str) -> str:
    if not word:
        return

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


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser("duplicate_encode")
    parser.add_argument("-w", type=str, help="Word to encode")

    args = parser.parse_args()
    encoded = duplicate_encode(word=args.w)
    print(encoded)
