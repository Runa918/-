import UnityEngine.SceneManagement;
private var velocity : Vector3;
public var speed : float = 3;
public var player : Transform;

function Start () {
    player = GameObject.FindGameObjectWithTag("Player").transform;
}
 
function Update () {
    velocity.y += Physics.gravity.y * Time.deltaTime
}

function OnTriggerStay(col : Collider) {
    if(col.tag == "Player") {
        var playerPos : Vector3; 
        playerPos = player.position;
        var direction : Vector3; 
        direction = playerPos - transform.position;
        transform.position = ( transform.position + ( direction.normalized * speed * Time.deltaTime));
        transform.LookAt(playerPos); 
    }
}
function OnCollisionEnter(obj:Collision){
    if (obj.gameObject.name == "terrain")
        return;
    if(obj.gameObject.name == "20161001"){
        SceneManager.LoadScene("gameover");
    }
}
