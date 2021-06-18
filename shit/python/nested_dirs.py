#!/usr/local/bin/python3


def handle_problem(dic):
    def one_directory(dic, path):
        for name, info in dic.items():
            next_path = path + "/" + name
            if isinstance(info, dict):
                print("Creating " + next_path) # actually use mkdir here!
                one_directory(info, next_path)

    one_directory(dic, '')

if  __name__ == "__main__":
    # Python Template
    dic = {
            "root": {
                '0_name': {
                    "0_name_a": {
                        "0_name_a_a": {
                            },
                        "0_name_a_b": {
                            "file": "file"
                            }
                        },
                    "0_name_b": {
                        }

                    },
                "1_name": {
                    },
                "2_name": {
                    },
                "3_name": {
                    "3_name": {

                        },

                    }
                }
            }
    handle_problem(dict)

