from heapq import nlargest

def latest(scores):
  scores = sorted(scores)
  score = scores[1:2]
  for i in score:
    return i

def personal_best(scores):
  scores = sorted(scores)
  score = nlargest(1, scores)
  for i in score:
    return i

def personal_top_three(scores):
  scores = sorted(scores)
  score = nlargest(3, scores)
  return score

