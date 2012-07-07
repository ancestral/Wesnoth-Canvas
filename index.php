<?php
/* index.php
 * main page for Wesnoth Canvas
 * last updated 5 Jul 12
 */
 
 $data_directory = "../trunk/data/";
 
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Wesnoth Canvas</title>
    <style type="text/css" media="screen">
      #canvas { background-image: url('<?php echo $data_directory ?>core/images/terrain/off-map/background.png'); }
    </style>
    <script>
      var dataDirectory = <?php echo json_encode($data_directory); ?>;
    </script>
    <script type="text/javascript" language="javascript" src="scripts/jquery.min.js"></script>
  	<script type="text/javascript" language="javascript" src="scripts/terrainCodeTable.js"></script>
    <script type="text/javascript" language="javascript" src="scripts/map.js"></script>
  	<script type="text/javascript" language="javascript" src="scripts/grid.js"></script>
  	<script type="text/javascript" language="javascript" src="scripts/mousetrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="stylesheets/layout.css" />
    <link rel="shortcut icon" href="images/wesnoth-icon-small.png" />
  </head>

  <body>
    <div id="container" style="padding: 8px;">
      <header>
        <button id="show-hide" type="code">Show Map Code</button>
        <div id="hex">&nbsp;</div>
        <textarea id="code" class="mousetrap">Paste the text from your Wesnoth map file into this box.</textarea>
      </header>
      <div id="canvas" style="cursor:crosshair; margin-top: 16px;">
        <canvas id="game" width="800" height="600" style="position: absolute;"></canvas>
        <canvas id="effects" width="800" height="600" style="position: absolute;"></canvas>
        <canvas id="transitions" width="800" height="600" style="position: absolute;"></canvas>
      </div>
      <input id="console" class="mousetrap"></input>
    </div>    
  </body>
</html>
