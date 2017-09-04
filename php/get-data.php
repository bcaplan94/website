<?php
require_once 'DBClass.php';

$db = new Db();
$rows = $db -> select("SELECT * FROM world_pictures;");
$arr = array();
if($rows != false){
	foreach( $rows as &$row ) {
		if(isset($row['place']) && isset($row['pictures'])){
			$arr[$row["place"]] = $row["pictures"];

		}
	}
}

echo json_encode($arr);
?>
