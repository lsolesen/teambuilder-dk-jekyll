<?php
date_default_timezone_set("Europe/Copenhagen");

require __DIR__ . '/vendor/autoload.php';

use Teambuilder\Activity\Pdf\Portrait;
use Teambuilder\Activity\ActivityInterface;
use Teambuilder\Activity\ActivityImageInterface;

class ExerciseImage implements ActivityImageInterface
{
    protected $path;
    
    function __construct($path = __DIR__ . '/../assets/images/frontpage.jpg')
    {
        $this->path = $path;
    }

    public function getPath()
    {
        return $this->path;
    }
    public function getOrientation()
    {
        return 'portrait';
    }
}

class ExerciseAdapter implements ActivityInterface
{
    protected $document;
    
    function __construct($document)
    {
        $this->document = $document;
    }
    
    public function getTitle()
    {
        return $this->document->getYaml()['title'];
    }
    public function getCues()
    {
        return 'My cues';
    }
    public function getIntroduction()
    {
        return $this->document->getYaml()['excerpt'];
    }
    public function getDescription()
    {
        return $this->document->getContent();
    }
    public function getUrl()
    {
        if (isset($this->document->getYaml()['permalink'])) {
            return 'http://teambuilder.vih.dk' . $this->document->getYaml()['permalink'];            
        } else {
            return "";
        }

    }

    /**
     * return array with ImageInterface[]
     */
    public function getImages()
    {
        if (!is_array($this->document->getYaml()['gallery'])) return array();
        $images = array();
        foreach ($this->document->getYaml()['gallery'] as $img) {
            $images[] = new ExerciseImage(__DIR__ . "/../" . $img['image_path']);
        }
        return $images;
    }

    public function getBarCode()
    {
        return null;
    }
    
    function __destruct()
    {
        $this->document = null;
    }
}


//Get a list of file paths using the glob function.
$fileList = glob(__DIR__ . "/../_activity/*");
 
//Loop through the array that glob returned.
foreach ($fileList as $filename){
    $str = file_get_contents($filename);
    $name = pathinfo($filename);
    
    $parser = new Mni\FrontYAML\Parser();
    $document = $parser->parse($str);
    
    unset($parser);
    
    $filename =  __DIR__ . '/../assets/pdf/activity/' . $name['filename'] . '.pdf';
    $pdf = new Portrait();
    $pdf->setTemporaryDirectory(__DIR__);
    $pdf->setLogo(new ExerciseImage(__DIR__ . '/../assets/images/mp-logo.png'), 'http://www.motionsplan.dk');
    $pdf->setContribLogo(new ExerciseImage(__DIR__ . '/../assets/images/vih_logo.jpg'), 'http://www.vih.dk');
    $adapter = new ExerciseAdapter($document);
    $pdf->addNewPage($adapter);
    
    echo "Written " . $adapter->getTitle() . "\n";
    
    // This is not really testing the library - just to see whether functions works.
    $pdf->Output($filename, 'F');
    
    unset($document);
    unset($pdf);
    
    flush();
}
