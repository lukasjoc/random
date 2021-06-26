"""
JSON Parser to AST
"""

json_quote = '"'
json_sep = ","
json_ws = [' ', '\t', '\b', '\n', '\r']

JSON_COMMA = ','
JSON_COLON = ':'
JSON_LEFTBRACKET = '['
JSON_RIGHTBRACKET = ']'
JSON_LEFTBRACE = '{'
JSON_RIGHTBRACE = '}'
JSON_QUOTE = '"'

JSON_SYNTAX = [
        JSON_COMMA,
        JSON_COLON,
        JSON_LEFTBRACKET,
        JSON_RIGHTBRACKET,
        JSON_LEFTBRACE,
        JSON_RIGHTBRACE,
        ]

# Lex the string with inferred types
def lex(s):
    tokens = []

if __name__ == "__main__":
    json = '{"foo": [1, 2, {"bar": 2}]}'
    print(lex(s=json))

    assert lex(s=json) == ['{', 'foo', ':', '[', 1, ',', 2, ',', '{', 'bar', ':', 2, '}', ']', '}'];











