'use strict';

function prettify(val) {
    const seen = new Set;
    let nesting_level = 0;

    function indent() {
        return ''.padEnd(nesting_level * 2, ' ');
    }

function prettify_string(str) {
        str = str.replace(/\\/g, '\\\\');
        str = str.replace(/[\x00-\x1f\\]/g, c => {
            switch (c) {
                case '\\': return '\\\\';
                case '\n': return '\\n';
                case '\r': return '\\r';
                case '\t': return '\\t';
                case '\b': return '\\b';
                case '\f': return '\\f';
                default: return '\\x' + c.charCodeAt(0).toString(16).padStart(2, '0');
            }
        });
        str = str.replace(/[^\x00-\x7f]/g, c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
        if (str.includes("'") && !str.includes('"')) {
            return '"' + str + '"';
        }
        return "'" + str.replace(/'/g, "\\'") + "'";
    }

    function prettify_any(val) {
        switch (typeof val) {
            case 'undefined':
                return 'undefined';

            case 'boolean':
                return val ? 'true' : 'false';

            case 'number':
                return String(val);

            case 'string':
                return prettify_string(val);

            case 'object':
                if (val === null) {
                    return 'null';
                }
                if (Array.isArray(val)) {
                    if (seen.has(val)) {
                        return '[...]';
                    }
                    if (val.length === 0) {
                        return '[]';
                    }
                    let result = '[\n';
                    seen.add(val);
                    nesting_level++;
                    result += val
                        .map(x => indent() + prettify_any(x) + ',\n')
                        .join('');
                    nesting_level--;
                    seen.delete(val);
                    result += indent() + ']';
                    return result;
                }
                if (seen.has(val)) {
                    return '{...}';
                }
                const entries = Object.entries(val);
                if (entries.length === 0) {
                    return '{}';
                }
                let result = '{\n';
                seen.add(val);
                nesting_level++;
                result += entries
                    .sort(([k1], [k2]) => k1 < k2 ? -1 : k1 > k2 ? 1 : 0)
                    .map(([k, v]) => indent() + prettify_string(k) + ': ' + prettify_any(v) + ',\n')
                    .join('');
                nesting_level--;
                seen.delete(val);
                result += indent() + '}';
                return result;

            case 'function':
                return 'function () { ... }';
        }
        throw 'not implemented: ' + typeof val + ' ' + val;
    }

    return prettify_any(val) + '\n';
}

// console.log(prettify([{id:42, name:"\"as\ndf'", age:-4}, undefined, null, [ 'a', 'b', [], {} ]]));
// 
// let wtf = { foo: 1, bar: 2, baz: 3 };
// wtf.doh = wtf;
// wtf.zomg = [ {}, { wtf: wtf }, [ wtf, wtf ] ];
// console.log(prettify(wtf));
// 
// console.log(prettify("\x00\x00123'äó€"));
//

console.log(prettify([{'engine': 'mysql', 'database': {'name': 'test_db'}, 'table': {'name': 'test', 'test_id': {'type': 'INT', 'options': ['AUTO_INCREMENT', 'PRIMARY KEY']}, 'test_str': {'type': 'VARCHAR(50)', 'options': ['NOT NULL']}, 'test_int': {'type': 'INT(64)', 'options': ['NOT NULL']}, 'test_bit': {'type': 'BIT', 'options': ['NOT NULL']}, 'test_dec': {'type': 'DECIMAL(2,10)', 'options': ['NOT NULL']}}}]))
