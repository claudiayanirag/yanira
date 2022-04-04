//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=347; timeIni=347; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=5;
var score=0; scoreMax=1200; scoreInc=200; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#E1EDFF"; colorButton="#30CD1F"; colorText="#000000"; colorSele="#EECD11";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=1; scoWrongDo=1; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="'Palatino Linotype', 'Book Antiqua', Palatino, serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Su respuesta es...¡Correcta!"; messageTime="!Y se nos terminó el tiempo!"; messageError="Su respuesta es...Incorrecta"; messageErrorG="Su respuesta es...Incorrecta"; messageAttempts="No hay más comodines."; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="anVlZ29fMQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["QURWRVJCSU8=","U0lOVEFYSVM=","T1JUT0dSQUbDjUE=","UFJFUE9TSUNJT05FUw==","R1JBTcOBVElDQQ==","VElMREU=","","","",""];imaW=["0_no.jpg","0_sintaxis.png","0_a872aae6db2ef6bba80ff0ed5918a6f5.jpg","0_taller-presentacion-preposiciones-espanol-003.jpg","0_1F476062-A56F-453E-9D2F-AFD77DF49C87.jpeg","0_DEFINICI__N.jpg","","","",""];queW=["\"No\" es un ejemplo de:","Parte de la gramática que estudia el modo en que se combinan las palabras y los grupos que éstas forman para expresar significados, así como las relaciones que se establecen entre todas esas unidades.","Conjunto de las normas de escritura de una lengua.","Su función es servir de nexo entre los elementos de la oración y sus complementos.","Parte de la lingüística que estudia los elementos de una lengua, así como la forma en que estos se organizan y se combinan.","Signo que se usa en la escritura para determinar o señalar la acentuación de las palabras.","","","",""];var wordsL=[8,8,10,13,9,5,"","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="juego_1_resources/media/"; textBNext="Siguiente pregunta";
