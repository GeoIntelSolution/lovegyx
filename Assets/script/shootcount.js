#pragma strict
import UnityEngine.UI;
function Start () {
		
}
var speed:int=5;
var count:int=0;
var dead:int=0;
var newObj:Transform;
function Update () {
 var x=Input.GetAxis("Horizontal")*Time.deltaTime*speed;
 var z=Input.GetAxis("Vertical")*Time.deltaTime*speed;
 transform.Translate(x,0,z);
 if (Input.GetButtonDown ("Fire1")) {
   var n:Transform=Instantiate(newObj,transform.position,transform.rotation);
   var fwd:Vector3=	transform.TransformDirection(Vector3.forward);
   n.GetComponent.<Rigidbody>().AddForce(transform.forward*2000);
   count++;
   gameObject.Find("射击数").GetComponent(Text).text="已发送的球体数:"+count+" "+"消灭数:"+dead;
}
//旋转
if(Input.GetKey(KeyCode.Q))
{
	transform.Rotate(0,-25*Time.deltaTime,0,Space.Self);

}
if(Input.GetKey(KeyCode.E))
{
 transform.Rotate(0,25*Time.deltaTime,0,Space.Self);
}
if(Input.GetKey(KeyCode.Z))
{
	transform.Rotate(-25*Time.deltaTime,0,0,Space.Self);

}
if(Input.GetKey(KeyCode.C))
{
 transform.Rotate(25*Time.deltaTime,0,0,Space.Self);
}
//升高降低镜头
if(Input.GetKey(KeyCode.H))
{
	transform.Translate(0,5*Time.deltaTime,0);

}
if(Input.GetKey(KeyCode.J))
{
	transform.Translate(0,-5*Time.deltaTime,0);

}
}