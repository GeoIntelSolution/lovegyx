#pragma strict
import UnityEngine.UI;
function Start () {

}
var sd:int;
var xm:int;
function Update () {
    if(gameObject.transform.position.y<0)
    {
       xm=gameObject.Find("Main Camera").GetComponent(shootcount).dead++;
       //sd=gameObject.Find("Main Camera").GetComponent(shootcount).dead++;
       //gameObject.Find("射击数").GetComponent(Text).text="已发送的球体数:"+sd+" "+"消灭数:"+xm;
       if(xm>20)
       {
          gameObject.Find("射击数").GetComponent(Text).text="恭喜过关";
           gameObject.Find("Main Camera").GetComponent(shootcount).enabled=false;
            gameObject.Find("surface").GetComponent(restart).enabled=true;
       }  
       Destroy(gameObject);
    }
  
}