<?php

declare(strict_types=1);

/**
 * Stupid Php in-memory queue based on php arrays
 *
 * @final
 */
final class Queue {

  private $nodes = [];

  /**
   * Constructor
   *
   * @param ?string $timezone
   * @access public
   */
  public function __construct(?string $timezone = null) {
    $this->timezone = $timezone ?: "UTC";
  }

  /**
   * enq adds an element to the end of the queue
   *
   * @param mixed $node
   * @access public
   * @return void
   */
  public function enq($node) {
    array_push($this->nodes, $node);
    return $this->timestamp();
  }

  /**
   * deq removes the first element from the queue
   *
   * @access public
   * @return void
   */
  public function deq() {
    if (count($this->nodes) <= 0) return null;
    array_shift($this->nodes);
    return $this->timestamp();
  }

  /**
   * peak shows the first element in the queue
   *
   * @access public
   * @return void
   */
  public function peak() {
    if (count($this->nodes) <= 0) return null;
    return $this->nodes[0];
  }


  /**
   * len returns the current length of the queu
   *
   * @access public
   * @return ?int
   */
  public function len(): ?int {
    return count($this->nodes) ?: null;
  }

  private function timestamp(): string {
    $date = new DateTime($this->timezone);
    return $date->format("Y-m-d H:i:s");
  }
}


$q = new Queue("Europe/Berlin");

for ($i = 0; $i <= 5; $i++) {
  printf("ENQ %s => %s\n", $i, $q->enq($i));
}

printf("Peak: %d\n", $q->peak());
printf("Len: %d\n", $q->len());

for ($i = 0; $i <= 3; $i++) {
  printf("DEQ %d => %s\n", $i, $q->deq());
}

printf("ENQ %s => %s\n", 3, $q->enq(3));
printf("Peak: %d\n", $q->peak());
printf("Len: %d\n", $q->len());
