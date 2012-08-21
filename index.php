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
    <script>
      var dataDirectory = <?php echo json_encode($data_directory); ?>;
    </script>
    <script src="scripts/jquery.min.js"></script>
  	<script src="scripts/terrainCodeTable.js"></script>
    <script src="scripts/map.js"></script>
  	<script src="scripts/grid.js"></script>
    <link rel="stylesheet" type="text/css" href="stylesheets/layout.css" />
    <link rel="shortcut icon" href="images/wesnoth-icon-small.png" />
  </head>

  <body style="background-image: url('<?php echo $data_directory ?>core/images/terrain/off-map/background.png');">
    <div id="container">
      <header>
        <canvas id="status1" width="800" height="24"></canvas>       
        <textarea id="code" class="mousetrap">Mm,Wwf,Wwf,Gs^Fp,Hh^Fp,Hh,Mm,Hh,Gs^Fp,Hh,Gs^Fp,Gs^Fp,Hh,Hh,Wwf,Wwf,Hh,Hh,Mm,Gs^Fp,Wwf,Hh,Gs^Fp,Mm,Mm,Mm,Mm,Mm,Mm
Hh^Fp,Hh^Fp,Wwf,Mm,Hh^Uf,Hh^Fms,Gg^Fms,Hh^Fms,Gs^Fp,Hh,Hh,Gg,Gs^Fms,Gs^Fp,Wwf,Wwf,Mm,Gs^Fms,Gs^Fms,Wwf,Wwf,Hh,Hh,Hh^Fp,Gs^Fms,Mm,Mm,Mm^Xm,Mm
Wwf,Gg^Uf,Gg,Wwf,Wwf,Hh,Gg^Vh,Gg^Efm,Gg,Mm,Hh,Gg,Gg,Gg,Wwf,Wwf,Wwf,Hh,Wwf,Wwf,Gg^Efm,Gs^Fp,Mm,Hh,Mm,Hh,Gg^Efm,Mm,Wwf
Mm,Wwf,Wwf,Gg^Fms,Hh,Wwf,Gg,Gg,Gg,Gg,Gg,Gg,Wwf,Wwf,Hh,Wwf,Gg,Wwf,Gg,Gg,Gg^Uf,Hh,Wwf,Wwf,Wwf,Hh,Wwf,Wwf,Wwf
Mm,Mm^Xm,Wwf,Mm,Gg,Wwf,Wwf,Wwf,Wwf,Gg,Wwf,Wwf,Gg,Wwf,1Kh,Gg^Fp,Ch,Gg,Gg,Gg,Wwf,Wwf,Gg^Fp,Gg^Fms,Hh,Wwf,Gg,Hh^Fms,Mm
Mm,Mm,Wwf,Wwf,Hh,Gg,Gg^Fp,Gg^Fms,Wwf,Wwf,Gg,Gg^Vh,Gg,Gg,Ch,Ch,Wwf,Ch,Wwf,Wwf,Gs^Fp,Gg^Vh,Re^Gvs,Re^Gvs,Re^Gvs,Re^Uf,Gg,Hh,Mm
Wwf,Wwf,Wwf,Wwf,Wwf,Gg^Vh,Wwf,Wwf,Gg^Fms,Gg,Re^Gvs,Re^Gvs,Ch,Ch,Wwf,Wwf,Gg,Wwf,Gg,Mm,Gg,Gg,Re^Gvs,Re^Gvs,Gg^Wm,Re^Gvs,Re^Gvs,Hh^Fp,Hh
Wwf,Wwf,Gs^Fp,Mm,Hh,Wwf,Gg,Hh,Re^Gvs,Re^Gvs,Gg,Gg,Wwf,Wwf,Wwf,Gs^Fms,Mm,Hh,Gg,Gg,Re^Gvs,Re^Gvs,Hh,Gg^Fms,Gg^Efm,Gs^Fp,Gg,Gg,Gg
Hh^Fms,Gg,Gg^Efm,Hh^Uf,Hh^Fp,Gs^Fms,Gg,Gg,Gg,Gg,Wwf,Wwf,Hh^Fms,Wwf,Wwf,Gg^Fp,Gg,Gg,Re^Gvs,Re^Gvs,Gg,Gg,Gg,Gg,Gg,Gg,Gs^Fp,Gg,Hh
Mm,Hh^Fms,Gg,Hh,Mm,Gg,Wwf,Wwf,Wwf,Wwf,Gg,Mm,Gg,Gg,Wwf,Wwf,Gg,Gg,Gg,Re^Gvs,Gg,Gg,Gg^Fms,Gg,Gg,Hh^Fms,Mm,Hh^Uf,Hh
Hh^Fms,Gg^Uf,Wwf,Wwf,Wwf,Wwf,Gs^Fms,Gg,Gg,Gg,Gg,Gg,Ss^Vhs,Gg,Ww,Gg,Gg^Efm,Gg,Ch,Gg,Wwf,Gs^Vh,Hh,Gg^Uf,Gg,Gg,Hh^Fp,Hh,Hh
Wwf,Wwf,Hh,Gg,Gg,Hh,Hh^Fds,Gg^Vh,Gg,Gg,Gg,Gg^Efm,Ss,Hh,Ww,Gs^Fms,Mm,Gs^Fp,Wwf,Wwf,Gg,Wwf,Wwf,Gg,Wwf,Wwf,Wwf,Wwf,Wwf
Gg^Fp,Gg^Fms,Gg^Efm,Gg,Gg,Gg^Wm,Gg,Gg^Efm,Gg,Gg,Gg,Gg,Hh,Wwf,Ww,Hh,Wwf,Wwf,Gg,Gg,Gg^Efm,Gg,Gg,Wwf,Gg,Gg,Gg,Mm,Hh^Fms
Hh,Hh,Ch,Hh^Fds,Re^Gvs,Re^Gvs,Re^Gvs,Gg,Gg^Fms,Gg,Gg,Hh^Uf,Mm,Gs^Fp,Ww,Wo,Wwf,Gg,Gg,Hh^Fms,Gg^Uf,Gg,Gg,Gg,Gs^Fp,Gg,Gg,Hh^Fms,Hh^Fds
Hh,Gg^Uf,Gg,Re^Gvs,Gg,Re^Gvs,Ch,Hh,Gg,Gg,Gg,Hh,Wwf,Wwf,Gg,Gg^Efm,Gg^Fms,Wwf,Gg,Hh,Gg,Gg,Hh^Fms,Gg^Efm,Gg,Gg^Uf,Gg,Gs^Fp,Mm
Mm,Gg,Gg,Gg,Gg,Mm,Hh^Fms,Ch,Gg^Efm,Gg,Gg,Wwf,Gg^Fp,Gg^Uf,Gg,Gg^Uf,Wwf,Wwf,Gg,Gg,Gg,Ch,Ch,Mm,Gg,Gg,Gg,Hh^Fms,Hh
Hh^Fds,Gg^Fms,Gg,Gg^Uf,Gs^Fp,Gg^Efm,Gg,Gg,Gg^Uf,Hh,Gg,Wwf,Wwf,Gg^Efm,Ww,Wwf,Mm,Hh,Gg,Gg,Gg^Fms,Hh,Re^Gvs,Re^Gvs,Re^Gvs,Re^Gvs,Ch,Gg^Uf,Hh
Hh^Fms,Hh^Fms,Gg^Efm,Gg,Gg,Gg,Gg,Gg,Gg,Hh^Fms,Gg,Gg,Wwf,Wo,Ww,Gs^Fp,Hh,Hh^Uf,Gg,Gg,Gg,Gg,Gg,Re^Gvs,Gg,Hh^Fds,Gg,Hh,Gg^Fms
Wwf,Mm,Wwf,Gg,Wwf,Wwf,Wwf,Gg,Gg,Gg,Wwf,Wwf,Mm,Hh,Ww,Wwf,Ss,Gg,Gg,Gg,Gg,Gg^Efm,Hh^Fds,Gg^Wm,Gg,Gg,Hh,Gg^Fms,Wwf
Hh,Wwf,Hh^Fp,Wwf,Gg,Gg,Hh,Wwf,Wwf,Wwf,Ch,Gs^Fms,Gg,Gs^Fp,Ww,Hh,Ss^Vhs,Gg^Efm,Gg,Gg,Gg,Gg^Vh,Gs^Fms,Hh,Wwf,Gg,Wwf,Wwf,Hh^Fms
Hh,Hh,Mm,Gg,Gg,Gg^Uf,Gs^Fp,Gs^Vh,Gg,Gg,Gg,Gg^Efm,Gg,Gg,Wwf,Gg,Gg,Gg,Gg,Gg,Wwf,Gg,Wwf,Wwf,Mm,Wwf,Gg,Gg^Uf,Mm
Gg^Efm,Hh^Uf,Gs^Fp,Hh^Fms,Gg,Gg,Gg,Gg,Gg,Re^Gvs,Re^Gvs,Gg,Gg,Wwf,Wwf,Gg,Hh^Fms,Mm,Wwf,Wwf,Gg,Wwf,Gg,Gg^Efm,Hh^Fp,Hh,Gg,Hh^Fds,Hh^Fds
Gg,Gg,Gg,Gg^Efm,Gg,Gg,Hh,Gg,Re^Gvs,Re^Gvs,Gg,Gg,Mm,Gg^Fms,Wwf,Wwf,Wwf,Wwf,Gg,Gg,Re^Gvs,Gg,Gg,Gs^Fp,Hh,Hh^Uf,Gs^Fp,Gg,Wwf
Hh,Gg,Re^Gvs,Gs^Fp,Gg^Wm,Gg^Fms,Re^Gvs,Re^Gvs,Gg,Gg,Gg,Hh,Gg,Gg^Fp,Wwf,Wwf,Ch,Gg,Re^Gvs,Re^Gvs,Gg^Fp,Hh,Wwf,Wwf,Wwf,Mm,Wwf,Wwf,Wwf
Mm,Hh^Fms,Gg,Re^Gvs,Re^Gvs,Re^Gvs,Re^Gvs,Gg,Gs^Fp,Mm,Wwf,Wwf,Wwf,Wwf,Ch,Ch,Gg,Re^Gvs,Gg,Gg,Wwf,Wwf,Gg^Fp,Gg^Vh,Hh,Wwf,Wwf,Wwf,Mm
Mm,Hh,Gg,Re^Uf,Hh,Re^Gvs,Gg^Fp,Gg^Vh,Wwf,Wwf,Gg,Ch,Ch,Ch,2Kh,Gg,Gg,Gg^Vh,Wwf,Wwf,Wwf,Gg^Fms,Wwf,Gg,Gg,Gg,Wwf,Mm,Mm
Wwf,Hh^Fms,Wwf,Wwf,Wwf,Gg^Fms,Wwf,Wwf,Gg^Uf,Gg,Gg,Gg,Gg,Gg^Fp,Hh,Wwf,Wwf,Wwf,Gg,Gg,Gg,Wwf,Gg,Wwf,Hh^Fms,Hh,Wwf,Mm^Xm,Mm
Wwf,Wwf,Gg^Efm,Hh,Mm,Wwf,Mm,Hh,Gg,Gg,Wwf,Wwf,Wwf,Wwf,Wwf,Wwf,Gs^Fms,Gg,Hh,Gg,Gg,Gg,Gg^Vh,Wwf,Wwf,Mm,Gg^Uf,Wwf,Wwf
Mm,Mm,Mm,Hh,Gs^Fms,Hh^Fp,Hh,Gs^Fp,Wwf,Wwf,Gs^Fms,Hh,Mm,Wwf,Wwf,Wwf,Hh^Fms,Mm,Gg^Uf,Gg^Efm,Gs^Fp,Gg^Efm,Gs^Fp,Hh,Hh^Fp,Wwf,Wwf,Gg^Fms,Hh^Fms
Mm,Mm,Mm,Mm^Xo,Mm,Hh^Fp,Gs^Fp,Hh,Wwf,Wwf,Mm,Gs^Fms,Hh,Gg,Wwf,Wwf,Hh,Hh,Mm,Hh^Fp,Gs^Fp,Hh,Gs^Fp,Hh^Fp,Mm,Mm,Wwf,Hh,Mm</textarea>
      </header>
      <div id="canvas" style="cursor:crosshair;">        
        <canvas id="game" class="pane" width="800" height="600" style="position: absolute;"></canvas>
        <canvas id="effects" class="pane" width="800" height="600" style="position: absolute;"></canvas>
        <canvas id="transitions" class="pane" width="800" height="600" style="position: absolute;"></canvas>
      </div>
      <input id="console" class="mousetrap"></input>
    </div>    
  </body>
</html>
