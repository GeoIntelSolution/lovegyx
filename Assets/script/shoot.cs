using UnityEngine;
using System.Collections;

public class 射击 : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	int speed=5;


	float n=20.8f;
	void Update () {
		float x = Input.GetAxis ("Horizontal") * Time.deltaTime*speed;
		float z=Input.GetAxis("Vertical")*Time.deltaTime*speed;
		transform.Translate(x,0,z);
		//sprint(x);
		if (Input.GetButtonDown ("Fire1")) {
			//Transform n=Instantiate(newObj,transform.position,transform.rotation);
		
		}

	}
}
