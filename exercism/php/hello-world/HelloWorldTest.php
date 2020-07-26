<?php


use PHPUnit\Framework\TestCase;

class HelloWorldTest extends TestCase {

	/**
	 * setUpBeforeClass
	 *
	 * @static
	 * @access public
	 * @return void
	 */
	public static function setUpBeforeClass() : void {
		require_once 'HelloWorld.php';
	}
	
	/**
	 * testHelloWorld
	 *
	 * @access public
	 * @return void
	 */
	public function testHelloWorld() : void {
		$this->assertEquals('Hello, World!', helloWorld());
	}

}

