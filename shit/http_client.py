#!/usr/bin/env python3

import http.client
import argparse as ap

def localhost_client(port="1313"):
    conn = http.client.HTTPConnection("localhost", port)
    conn.request("GET", "/")
    r1 = conn.getresponse()
    body = r1.read()
    print(r1.status)
    conn.close()

if __name__ == "__main__":
    parser = ap.ArgumentParser("HTTP-Client with http.client")
    parser.add_argument('--port', type=str , help='destination port')
    args = parser.parse_args()

    port = args.port
    localhost_client(port=port)
