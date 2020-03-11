import string, struct

#def inet_aton(packme):
#  a, b, c, d = map(string.atoi, string.split(packme, '.'))
#  return struct.pack('BBBB', a, b, c, d)

def inet_ntoa(packed):
  quads = map(str, struct.unpack('BBBB', packed))
  return string.join(quads, '.')

if __name__ == "__main__":
  ip = inet_ntoa(bytes(21549592082154959208))
  print(ip)