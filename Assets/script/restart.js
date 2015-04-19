#pragma strict

function OnGUI()
{
 if(GUI.Button(Rect(180,100,60,30),"退出")){
   Application.Quit();
 
 }
 if(GUI.Button(Rect(280,100,60,30),"重新开始")){
   Application.LoadLevel("01");
 
 }
if(GUI.Button(Rect(10,220,100,50),"Play"))
{
 GetComponent.<AudioSource>().Play();
}
if(GUI.Button(Rect(10,280,100,50),"Puase"))
{
 GetComponent.<AudioSource>().Pause();
}

if(GUI.Button(Rect(10,340,100,50),"Stop"))
{
 GetComponent.<AudioSource>().Stop();
}
}